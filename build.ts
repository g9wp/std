import * as dax from "jsr:@david/dax@^0.48.3";
import { cliteRun } from "jsr:@g9wp/clite@^0.7.9";
import * as fs from "jsr:@std/fs@^1.0.24";
import * as path from "jsr:@std/path@^1.1.5";

interface DenoConfig {
  workspace?: string[];
  name?: string;
  version?: string;
  exports?: Record<string, string>;
  imports?: Record<string, string>;
  fmt?: any;
}

interface PatchConfig {
  deno?: DenoConfig;
  unstable?: Record<string, string>;
}

async function readJsonFile<T = any>(file: string): Promise<T> {
  return JSON.parse(await Deno.readTextFile(file));
}

class Cli {
  repo_url = "https://github.com/denoland/std.git";

  repo_path = "../std"; // 指向本地的 @std 源码仓库路径

  _repo_$_!: typeof dax.$;
  async _repo_$() {
    if (this._repo_$_) return this._repo_$_;

    const $ = dax.build$({
      commandBuilder: new dax.CommandBuilder().cwd(this.repo_path)
        .printCommand(),
    });

    if (!await fs.exists(path.join(this.repo_path, ".git"))) {
      if (!this.repo_url) throw new Error("repo url required");
      await fs.emptyDir(this.repo_path);
      await $`git clone ${this.repo_url} .`;
    }

    return this._repo_$_ = $;
  }

  tag_filter = /^release-/;
  tag_filter_flag?: string;

  async lastest_tag() {
    const $ = await this._repo_$();
    await $`git fetch --tags`;
    const tags = await $`git tag --sort=-creatordate`.lines();

    if (this.tag_filter) {
      const f = new RegExp(this.tag_filter, this.tag_filter_flag);
      const r = tags.find((i) => i.match(f));
      if (!r) throw new Error("no tag found");
      return r;
    }

    if (tags.length <= 0) throw new Error("no tag found");
    return tags[0];
  }

  out = "."; // 生成的 std 整合包的输出路径
  patch = "./patch.json";

  async main() {
    const tag = await this.lastest_tag();
    const $ = await this._repo_$();
    await $`git checkout ${tag}`;

    // ================= 配置参数 =================
    const PATCH: PatchConfig = await readJsonFile(this.patch).catch(() => ({}));
    const STD_REPO_PATH = this.repo_path; // 指向本地的 @std 源码仓库路径
    const OUTPUT_DIR = this.out; // 生成的 std 整合包的输出路径
    const OUTPUT_PATH = "./std";
    // ============================================

    await fs.ensureDir(OUTPUT_DIR);
    await fs.emptyDir(path.join(OUTPUT_DIR, OUTPUT_PATH));

    const rootConfigPath = path.join(STD_REPO_PATH, "deno.json");
    const rootConfig: DenoConfig = await readJsonFile(rootConfigPath);

    if (!rootConfig.workspace) {
      console.error("未在根目录 deno.json 中找到 workspace 配置");
      return;
    }

    const targetExports: Record<string, string> = {};
    const targetImports: Record<string, string> = {};

    for (const subModDir of rootConfig.workspace) {
      const subModFolderName = path.basename(subModDir); // 本地实际目录名，如: data_structures
      const subConfigPath = path.join(STD_REPO_PATH, subModDir, "deno.json");

      let subConfig: DenoConfig;
      try {
        subConfig = await readJsonFile(subConfigPath);
      } catch {
        continue;
      }

      if (!subConfig.exports) continue;

      // 核心修复点：标准的 JSR 发布包名使用的是中划线 `-`
      // 如果子模块本身定义了 name（如 @std/data-structures），直接用它的 name；否则后备把下划线转成中划线
      const jsrSubModName = subConfig.name ? subConfig.name.replace("@std/", "") : subModFolderName.replace(/_/g, "-");

      console.log(
        `正在处理子模块: 本地目录 [${subModFolderName}] -> JSR名 [@std/${jsrSubModName}]...`,
      );

      // 自动将官方子模块及版本号写入 imports 字典
      if (subConfig.name && subConfig.version) {
        targetImports[subConfig.name] = `jsr:${subConfig.name}@^${subConfig.version}`;
      } else {
        console.warn(`子模块 [${jsrSubModName}] 缺少包名或版本`);
        targetImports[`@std/${jsrSubModName}`] = `jsr:@std/${jsrSubModName}`;
      }

      // 预处理：收集所有已存在的 stable 键名（去掉开头的 ./）
      const stableKeys = new Set<string>();
      for (const key of Object.keys(subConfig.exports)) {
        if (key !== "." && !key.startsWith("./unstable-")) {
          stableKeys.add(key.replace(/^\.\//, ""));
        }
      }

      // 存储当前模块有效的导出映射 [新导出键名(不含./)] -> 远程 JSR 依赖路径
      const validExports = new Map<string, string>();

      for (const [exportKey] of Object.entries(subConfig.exports)) {
        if (exportKey === ".") {
          validExports.set(".", `@std/${jsrSubModName}`);
          continue;
        }

        const cleanKey = exportKey.replace(/^\.\//, "");

        if (cleanKey.startsWith("unstable-")) {
          const potentialStableKey = cleanKey.replace(/^unstable-/, "");
          if (stableKeys.has(potentialStableKey)) {
            continue; // 忽略已稳定的
          }
          // 未稳定的 unstable 映射为新包的 stable 路径
          validExports.set(
            `${jsrSubModName}/${potentialStableKey}`,
            `@std/${jsrSubModName}/${cleanKey}`,
          );
        } else {
          // 正常的 stable 导出
          validExports.set(
            `${jsrSubModName}/${cleanKey}`,
            `@std/${jsrSubModName}/${cleanKey}`,
          );
        }
      }

      // 生成文件与建立映射
      for (const [cleanNewKey, remotePath] of validExports.entries()) {
        if (cleanNewKey === ".") {
          // 1. 处理模块根级入口，例如 "./data-structures"
          const localPath = `${jsrSubModName}.ts`;
          const fullLocalPath = path.join(OUTPUT_DIR, OUTPUT_PATH, localPath);

          const extraUnstables = Array.from(validExports.entries())
            .filter(([k, v]) => k !== "." && v.includes("/unstable-"))
            .map(([_, v]) => PATCH.unstable?.[v] ?? `export * from "${v}";`);

          let fileContent = `export * from "${remotePath}";\n`;
          if (extraUnstables.length > 0) {
            fileContent += `\n// unstable exports\n` +
              extraUnstables.join("\n") +
              "\n";
          }

          await fs.ensureDir(path.dirname(fullLocalPath));
          await Deno.writeTextFile(fullLocalPath, fileContent);

          targetExports[`./${jsrSubModName}`] = `${OUTPUT_PATH}/${localPath}`;
        } else {
          // 2. 处理子路径导出，例如 "./data-structures/2d-array"

          // 忽略 json jsr:@std/html/named-entity-list.json
          if (cleanNewKey.endsWith(".json")) continue;

          const localPath = `${cleanNewKey}.ts`;
          const fullLocalPath = path.join(OUTPUT_DIR, OUTPUT_PATH, localPath);
          const fileContent = `export * from "${remotePath}";\n`;

          await fs.ensureDir(path.dirname(fullLocalPath));
          await Deno.writeTextFile(fullLocalPath, fileContent);

          targetExports[`./${cleanNewKey}`] = `${OUTPUT_PATH}/${localPath}`;
        }
      }
    }

    // 组装并写入最终的配置
    const finalConfig: DenoConfig = {
      ...await readJsonFile<DenoConfig>("deno.json").catch(() => null),
      ...PATCH.deno,
      exports: targetExports,
      imports: targetImports,
    };

    await Deno.writeTextFile(
      path.join(OUTPUT_DIR, "deno.json"),
      JSON.stringify(finalConfig, null, 2),
    );

    console.log(`\n🎉 生成完成。`);

    await dax.$`deno i --minimum-dependency-age=0`.cwd(OUTPUT_DIR).printCommand();
    await dax.$`deno check std`.cwd(OUTPUT_DIR).printCommand();
  }
}

if (import.meta.main) {
  await cliteRun(Cli);
}
