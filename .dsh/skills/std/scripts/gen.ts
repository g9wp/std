/**
 * 生成 $std (@g9wp/std) 的 Agent Skill 参考资料（本技能位于 $std 源码仓库内：`<仓库>/.dsh/skills/std`）。
 *
 * 用法：
 *   deno run -A scripts/gen.ts [stdc 仓库] [上游 std 仓库] [输出目录]
 * 默认（都相对于本脚本位置，便于任何人克隆后直接跑）：
 *   stdc     = 本脚本往上三层（即本技能所属仓库根）
 *   上游 std = stdc 的兄弟目录 `../std`（denoland/std 的克隆）
 *   输出     = 本技能目录（生成物写到其 references/ 下）
 * 环境变量可覆盖：STD_REPO / STD_UPSTREAM_REPO / STD_UPSTREAM_REF / STD_SKILL_OUT（兼容旧名 STDX_*；STD_VERBOSE=1 打印进度）
 *   其中 STD_UPSTREAM_REF 缺省时自动从上游 clone 的 git tag 取（CI 里就是刚 checkout 的那个 release tag）
 *
 * 输入（全部为本地只读数据）：
 *   - <stdc>/deno.json      $std 权威 exports 清单（487 条，由 stdc/build.ts 生成）
 *   - <stdc>/std/ 下的再导出文件（指出上游 jsr 标识符）
 *   - <上游>/ 上游 denoland/std 源码（tag 由 git 自动检测，见 STD_UPSTREAM_REF）
 * 输出（只写仓库相对路径 / 仓库 URL，不写本机绝对路径）：
 *   - <out>/references/std-modules.md
 *   - <out>/references/std-api/<module>.md
 *   - <out>/references/std-export-map.json
 */
import path from "node:path";

const scriptDir = (import.meta as { dirname?: string }).dirname ?? path.dirname(path.fromFileUrl(import.meta.url));
/** 本技能目录：<仓库>/.dsh/skills/std */
const skillDir = path.resolve(scriptDir, "..");
const argOf = (i: number) => Deno.args[i];
const env = (name: string, legacy: string) => Deno.env.get(name) ?? Deno.env.get(legacy);
/** 统一成 posix 分隔符（Deno 在 Windows 上也接受，输出/切片更稳） */
const posix = (p: string) => path.resolve(p).replace(/\\/g, "/");

const STDC = posix(env("STD_REPO", "STDX_STD_REPO") ?? argOf(0) ?? path.resolve(skillDir, "../../.."));
const STD = posix(env("STD_UPSTREAM_REPO", "STDX_UPSTREAM_REPO") ?? argOf(1) ?? path.resolve(STDC, "../std"));
const OUT = posix(env("STD_SKILL_OUT", "STDX_SKILL_OUT") ?? argOf(2) ?? skillDir);
const VERBOSE = Deno.env.get("STD_VERBOSE") === "1" || Deno.env.get("STDX_VERBOSE") === "1";

/** $std 包仓库与上游仓库（生成物里只出现仓库 URL，不出现本机路径） */
const STDC_REPO = "https://github.com/g9wp/std";
const STD_REPO = "https://github.com/denoland/std";

/**
 * 上游 ref（用于生成 GitHub 源码链接）：优先 `STD_UPSTREAM_REF`，
 * 否则问本地 clone 的 git（`describe --tags --exact-match` → 退回最近 tag）；
 * 都拿不到就用默认分支 `main`，并在文件头注明。
 */
function detectUpstreamRef(repoDir: string): string | undefined {
  const override = Deno.env.get("STD_UPSTREAM_REF");
  if (override) return override;
  for (
    const args of [
      ["describe", "--tags", "--exact-match"],
      ["describe", "--tags", "--abbrev=0"],
    ]
  ) {
    try {
      const out = new Deno.Command("git", {
        args: ["-C", repoDir, ...args],
        stdout: "piped",
        stderr: "null",
      }).outputSync();
      if (!out.success) continue;
      const tag = new TextDecoder().decode(out.stdout).trim();
      if (tag) return tag;
    } catch {
      // 没有 git / 不是 git 仓库：继续往后退
    }
  }
  return undefined;
}

const STD_REF = detectUpstreamRef(STD);
/** 生成链接时用的 ref（没检测到 tag 就退回默认分支） */
const STD_TREE_REF = STD_REF ?? "main";

type Json = Record<string, unknown>;

const decoder = new TextDecoder("utf-8");

function readJson<T = Json>(path: string): T {
  return JSON.parse(decoder.decode(Deno.readFileSync(path))) as T;
}

function readText(path: string): string | undefined {
  try {
    return decoder.decode(Deno.readFileSync(path));
  } catch {
    return undefined;
  }
}

/* ------------------------------------------------------------------ *
 * 1. 上游模块索引
 * ------------------------------------------------------------------ */

interface UpModule {
  dir: string; // 目录名，如 data_structures
  name: string; // @std/data-structures
  modKey: string; // data-structures
  version?: string;
  exports: Record<string, string>; // "./deep-merge" -> "./deep_merge.ts"
  absDir: string;
}

const rootConfig = readJson<{ workspace?: string[] }>(`${STD}/deno.json`);
const upModules = new Map<string, UpModule>(); // key: modKey
const upByDir = new Map<string, UpModule>();

for (const rel of rootConfig.workspace ?? []) {
  const dir = rel.replace(/^\.\//, "");
  const cfg = readJson<Json>(`${STD}/${dir}/deno.json`);
  const name = String(cfg.name ?? `@std/${dir.replace(/_/g, "-")}`);
  const mod: UpModule = {
    dir,
    name,
    modKey: name.replace(/^@std\//, ""),
    version: cfg.version === undefined ? undefined : String(cfg.version),
    exports: (cfg.exports ?? {}) as Record<string, string>,
    absDir: `${STD}/${dir}`,
  };
  upModules.set(mod.modKey, mod);
  upByDir.set(dir, mod);
}

/* ------------------------------------------------------------------ *
 * 2. 静态符号抽取
 * ------------------------------------------------------------------ */

interface Sym {
  name: string;
  kind: string;
  sig: string;
  doc: string;
  deprecated: boolean;
  internal: boolean;
  origin: string; // 上游源文件（相对上游 std 仓库根）
}

interface FileInfo {
  symbols: Sym[];
  moduleDoc?: string;
  moduleTags?: string;
  moduleDeprecated?: boolean;
}

const fileCache = new Map<string, FileInfo>();

const DECL_RE =
  /^[ \t]*export[ \t]+(?:declare[ \t]+)?(?:(abstract)[ \t]+)?(?:(async)[ \t]+)?(function\*?|class|const|let|var|interface|type|enum|namespace)[ \t]+([A-Za-z_$][\w$]*)/;

const DECL_DEFAULT_RE =
  /^[ \t]*export[ \t]+default[ \t]+(?:(async)[ \t]+)?(function\*?|class)?[ \t]*([A-Za-z_$][\w$]*)?/;

const LOCAL_EXPORT_RE = /^[ \t]*export[ \t]+(?:type[ \t]+)?\{([^}]*)\}[ \t]*;?[ \t]*$/;

/** 从文本中截取配对结束位置（考虑字符串）。start 指向开括号。 */
function matchDelim(text: string, start: number): number {
  const open = text[start]!;
  const close = open === "(" ? ")" : open === "[" ? "]" : open === "{" ? "}" : open === "<" ? ">" : "";
  if (!close) return start;
  let depth = 0;
  let i = start;
  let quote: string | undefined;
  while (i < text.length) {
    const ch = text[i]!;
    if (quote) {
      if (ch === "\\") i++;
      else if (ch === quote) quote = undefined;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      quote = ch;
      i++;
      continue;
    }
    if (ch === open) depth++;
    else if (ch === close) {
      depth--;
      if (depth === 0) return i + 1;
    }
    i++;
  }
  return text.length;
}

function collapse(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

/** 去掉签名里夹带的注释并压缩空白。 */
function sanitizeSig(s: string): string {
  return collapse(s.replace(/\/\*\*[\s\S]*?\*\//g, " ").replace(/\/\/[^\n]*/g, " "));
}

function clip(s: string, max = 220): string {
  return s.length <= max ? s : s.slice(0, max - 1).trimEnd() + "…";
}

/** 抽取声明签名：从 declStart 开始。 */
function scanSignature(text: string, declStart: number, kind: string): string {
  // 找到声明名之后第一个决定签名的位置
  const rest = text.slice(declStart);
  const nameMatch = DECL_RE.exec(text.slice(declStart, declStart + 200)) ??
    /^[ \t]*export[ \t]+/.exec(rest);
  const afterName = declStart + (nameMatch ? nameMatch[0].length : 0);

  if (kind === "function") {
    const paren = text.indexOf("(", afterName - 1);
    if (paren >= 0) {
      const end = matchDelim(text, paren);
      let i = end;
      // 返回类型
      while (i < text.length && /\s/.test(text[i]!)) i++;
      if (text[i] === ":") {
        i++;
        let depth = 0;
        while (i < text.length) {
          const ch = text[i]!;
          if (ch === "<" || ch === "(" || ch === "[") depth++;
          else if (ch === ">" || ch === ")" || ch === "]") depth--;
          else if (ch === "{" && depth === 0) {
            const prev = text.slice(end, i).trimEnd().slice(-1);
            if (prev === ":" || prev === "|" || prev === "&" || prev === "=" ) {
              i = matchDelim(text, i);
              continue;
            }
            break;
          } else if (ch === ";" && depth === 0) break;
          i++;
        }
      }
      return clip(sanitizeSig(text.slice(declStart, i)));
    }
    return clip(sanitizeSig(text.slice(declStart, afterName)));
  }

  if (kind === "class" || kind === "interface" || kind === "enum" || kind === "namespace") {
    let i = afterName;
    let depth = 0;
    while (i < text.length) {
      const ch = text[i]!;
      if (ch === "<") depth++;
      else if (ch === ">") depth--;
      else if (ch === "{" && depth === 0) break;
      else if (ch === "\n") {
        const lineEnd = text.indexOf("\n", i + 1);
        const line = text.slice(declStart, i);
        if (/\b(extends|implements)\b/.test(line) && line.endsWith(",")) {
          i = lineEnd < 0 ? text.length : lineEnd;
          continue;
        }
      }
      i++;
    }
    return clip(sanitizeSig(text.slice(declStart, i)));
  }

  // const / let / var / type
  let i = afterName;
  let depth = 0;
  while (i < text.length) {
    const ch = text[i]!;
    if (ch === "(" || ch === "[" || ch === "{" || ch === "<") depth++;
    else if (ch === ")" || ch === "]" || ch === "}" || ch === ">") depth--;
    else if (depth === 0 && ch === "=") break;
    else if (depth === 0 && ch === ";" ) break;
    else if (depth === 0 && ch === "\n") {
      const next = text.slice(i + 1).match(/^[ \t]*(\S)/);
      if (next && next[1] === "=") {
        // 换行后才是赋值
      } else break;
    }
    i++;
  }
  const head = clip(sanitizeSig(text.slice(declStart, i)), 160);

  if (kind === "type") {
    // 类型别名：保留右值（遇到对象字面量类型即截断，避免把成员注释吞进来）
    let j = i;
    let d2 = 0;
    let afterEq = false;
    while (j < text.length) {
      const ch = text[j]!;
      if (ch === "(" || ch === "[" || ch === "<") d2++;
      else if (ch === ")" || ch === "]" || ch === ">") d2--;
      else if (ch === "{" && d2 === 0) {
        if (afterEq) return clip(sanitizeSig(text.slice(declStart, j)) + " … }");
        d2++;
      } else if (ch === "}" && d2 === 0) d2--;
      else if (ch === "=" && d2 === 0) afterEq = true;
      else if (ch === ";" && d2 === 0) break;
      else if (ch === "\n" && d2 === 0) {
        const peek = text.slice(j + 1, j + 60);
        if (/^\s*\n/.test(peek) || /^\s*export\b/.test(peek)) break;
      }
      j++;
    }
    return clip(sanitizeSig(text.slice(declStart, j)));
  }

  // 变量：如果右值是函数，补上参数表
  let j = i;
  while (j < text.length && /\s/.test(text[j]!)) j++;
  if (text[j] === "=") {
    let k = j + 1;
    while (k < text.length && /[\s]/.test(text[k]!)) k++;
    const tail = text.slice(k, k + 30);
    if (/^(async\s+)?(function\b|\()/.test(tail) || tail.startsWith("<")) {
      const p = text.indexOf("(", k);
      if (p >= 0 && p - k < 40) {
        const end = matchDelim(text, p);
        let m = end;
        while (m < text.length && /\s/.test(text[m]!)) m++;
        if (text.slice(m, m + 2) === "=>") {
          let n = m + 2;
          let d = 0;
          while (n < text.length && n - m < 120) {
            const ch = text[n]!;
            if (ch === "(" || ch === "{" || ch === "[" || ch === "<") d++;
            else if (ch === ")" || ch === "}" || ch === "]" || ch === ">") d--;
            else if (ch === ";" && d === 0) break;
            else if (ch === "\n" && d === 0) break;
            n++;
          }
          return clip(sanitizeSig(text.slice(declStart, n)));
        }
        return clip(sanitizeSig(text.slice(declStart, end)), 160);
      }
    }
  }
  return head;
}

function docSummary(doc: string): { doc: string; deprecated: boolean; internal: boolean } {
  const deprecated = /@deprecated\b/.test(doc);
  const internal = /@internal\b/.test(doc);
  const clean = doc
    .split("\n")
    .map((l) => l.replace(/^\s*\*+ ?/, "").replace(/\s+$/, ""))
    .join("\n")
    .trim();
  const first = clean.split(/\n\s*\n/)[0] ?? "";
  const text = collapse(
    first
      .replace(/\{@link(?:code|plain)?\s+([^}]+)\}/g, (_m, body: string) => {
        const parts = body.split("|");
        return parts[parts.length - 1]!.trim();
      })
      .replace(/`/g, ""),
  );
  return { doc: clip(text, 200), deprecated, internal };
}

function extractFile(absPath: string): FileInfo | undefined {
  const cached = fileCache.get(absPath);
  if (cached) return cached;
  const text = readText(absPath);
  if (text === undefined) return undefined;

  const info: FileInfo = { symbols: [] };
  fileCache.set(absPath, info); // 先占位，避免循环引用死循环

  const lines = text.split("\n");
  // 行起始偏移
  const offsets: number[] = new Array(lines.length);
  let acc = 0;
  for (let i = 0; i < lines.length; i++) {
    offsets[i] = acc;
    acc += lines[i]!.length + 1;
  }

  const originRel = absPath.startsWith(STD) ? absPath.slice(STD.length + 1) : absPath;

  // 模块级 JSDoc（文件开头第一个 /** 块；std 文件通常先有版权注释）
  const head = text.slice(0, Math.min(text.length, 4000));
  const docStart = head.indexOf("/**");
  const docEnd = docStart >= 0 ? head.indexOf("*/", docStart + 3) : -1;
  if (docStart >= 0 && docEnd > docStart) {
    const block = head.slice(docStart + 3, docEnd);
    info.moduleDoc = docSummary(block).doc;
    info.moduleTags = /@module\b/.test(block) ? "@module" : undefined;
    info.moduleDeprecated = /@deprecated\b/.test(block);
  }

  let pendingDoc: string | undefined;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    const trimmed = line.trim();

    if (trimmed.startsWith("/**")) {
      // 收集 JSDoc
      let block = line.slice(line.indexOf("/**") + 3);
      let j = i;
      while (!block.includes("*/") && j + 1 < lines.length) {
        j++;
        block += "\n" + lines[j]!;
      }
      block = block.slice(0, block.indexOf("*/") >= 0 ? block.indexOf("*/") : undefined);
      pendingDoc = block;
      i = j;
      continue;
    }
    if (trimmed === "" || trimmed.startsWith("//") || trimmed.startsWith("*")) continue;

    // 相对再导出
    const reStar = /^\s*export\s+\*\s+from\s+["'](\.[^"']+)["']/.exec(line);
    if (reStar) {
      const target = resolveRel(absPath, reStar[1]!);
      const sub = target ? extractFile(target) : undefined;
      if (sub) for (const s of sub.symbols) pushSym(info, s);
      pendingDoc = undefined;
      continue;
    }
    const reNamed = /^\s*export\s+(?:type\s+)?\{([^}]*)\}\s*from\s+["'](\.[^"']+)["']/.exec(line);
    if (reNamed) {
      const target = resolveRel(absPath, reNamed[2]!);
      const sub = target ? extractFile(target) : undefined;
      const names = reNamed[1]!.split(",").map((p) => {
        const m = /^\s*(?:type\s+)?([\w$]+)(?:\s+as\s+([\w$]+))?\s*$/.exec(p);
        return m ? { from: m[1]!, as: m[2] ?? m[1]! } : undefined;
      }).filter(Boolean) as { from: string; as: string }[];
      if (sub) {
        for (const n of names) {
          const hit = sub.symbols.find((s) => s.name === n.from);
          if (hit) pushSym(info, { ...hit, name: n.as });
        }
      }
      pendingDoc = undefined;
      continue;
    }

    const decl = DECL_RE.exec(line);
    if (decl) {
      const rawKind = decl[3]!;
      const kind = rawKind === "function*" ? "generator" : rawKind;
      const kindText = `${decl[1] ? "abstract " : ""}${decl[2] ? "async " : ""}${kind}`;
      const name = decl[4]!;
      const abs = offsets[i]! + (line.length - line.trimStart().length);
      const sig = scanSignature(text, abs, rawKind === "function*" ? "function" : kind);
      const meta = docSummary(pendingDoc ?? "");
      pushSym(info, {
        name,
        kind: kindText,
        sig,
        doc: meta.doc,
        deprecated: meta.deprecated,
        internal: meta.internal,
        origin: originRel,
      });
      pendingDoc = undefined;
      continue;
    }

    // export default function / class / 匿名值
    if (/^[ \t]*export[ \t]+default\b/.test(line)) {
      const dflt = DECL_DEFAULT_RE.exec(line);
      const abs = offsets[i]! + (line.length - line.trimStart().length);
      const rawKind = dflt?.[2] === "function*" ? "function" : dflt?.[2] ?? "function";
      const meta = docSummary(pendingDoc ?? "");
      pushSym(info, {
        name: dflt?.[3] ?? "default",
        kind: `default ${dflt?.[2] ? (dflt[2] === "function*" ? "generator" : dflt[2]) : "value"}`,
        sig: clip(sanitizeSig(text.slice(abs, abs + 160))),
        doc: meta.doc,
        deprecated: meta.deprecated,
        internal: meta.internal,
        origin: originRel,
      });
      pendingDoc = undefined;
      continue;
    }

    // export { A, B } —— 本地再导出（多见于仅导出类型的模块）
    const local = LOCAL_EXPORT_RE.exec(line);
    if (local) {
      const names = local[1]!.split(",").map((p) => {
        const m = /^\s*(?:type\s+)?([\w$]+)(?:\s+as\s+([\w$]+))?\s*$/.exec(p);
        return m ? (m[2] ?? m[1]!) : undefined;
      }).filter(Boolean) as string[];
      for (const n of names) {
        if (info.symbols.some((s) => s.name === n)) continue;
        pushSym(info, {
          name: n,
          kind: "re-export",
          sig: "",
          doc: "",
          deprecated: false,
          internal: false,
          origin: originRel,
        });
      }
      pendingDoc = undefined;
      continue;
    }
    pendingDoc = undefined;
  }

  return info;
}

function pushSym(info: FileInfo, s: Sym) {
  if (info.symbols.some((x) => x.name === s.name && x.kind === s.kind)) return;
  info.symbols.push(s);
}

function resolveRel(fromFile: string, spec: string): string | undefined {
  const base = fromFile.slice(0, fromFile.lastIndexOf("/"));
  const parts = (base + "/" + spec).split("/");
  const out: string[] = [];
  for (const p of parts) {
    if (p === "." || p === "") continue;
    if (p === "..") out.pop();
    else out.push(p);
  }
  return out.join("/");
}

/* ------------------------------------------------------------------ *
 * 3. 解析 $std 的 exports 映射
 * ------------------------------------------------------------------ */

interface StdEntry {
  key: string; // 去掉 ./ 的导出名，如 async/throttle
  module: string; // async
  sub: string; // throttle（根为 ""）
  specifiers: string[]; // 上游 @std/... 标识符
  files: string[]; // 上游绝对路径
  symbols: Sym[];
  unresolved: string[];
}

const stdcConfig = readJson<{ name: string; version: string; exports: Record<string, string> }>(
  `${STDC}/deno.json`,
);
const entries: StdEntry[] = [];
const t0 = performance.now();

for (const [rawKey, relFile] of Object.entries(stdcConfig.exports)) {
  const entryStart = performance.now();
  const key = rawKey.replace(/^\.\//, "");
  const [module, ...rest] = key.split("/");
  const sub = rest.join("/");
  const file = `${STDC}/${relFile.replace(/^\.\//, "")}`;
  const content = readText(file) ?? "";
  const specs: string[] = [];
  for (const m of content.matchAll(/from\s+["'](@std\/[^"']+)["']/g)) specs.push(m[1]!);

  const entry: StdEntry = {
    key,
    module: module!,
    sub,
    specifiers: specs,
    files: [],
    symbols: [],
    unresolved: [],
  };

  for (const spec of specs) {
    const m = /^@std\/([^/]+)(?:\/(.*))?$/.exec(spec);
    if (!m) {
      entry.unresolved.push(spec);
      continue;
    }
    const up = upModules.get(m[1]!);
    if (!up) {
      entry.unresolved.push(spec);
      continue;
    }
    const subKey = m[2] ? `./${m[2]}` : ".";
    const upRel = up.exports[subKey];
    if (!upRel) {
      entry.unresolved.push(spec);
      continue;
    }
    const abs = resolveRel(`${up.absDir}/x.ts`, upRel);
    if (!abs) continue;
    entry.files.push(abs);
    const extracted = extractFile(abs);
    if (extracted) for (const s of extracted.symbols) pushSym({ symbols: entry.symbols } as FileInfo, s);
  }
  entries.push(entry);
  if (VERBOSE) {
    const cost = performance.now() - entryStart;
    if (cost > 300) console.error(`[slow] ${entry.key} ${Math.round(cost)}ms syms=${entry.symbols.length}`);
    if (entries.length % 25 === 0) {
      console.error(`[${entries.length}] ${Math.round(performance.now() - t0)}ms files=${fileCache.size}`);
    }
  }
}

/* ------------------------------------------------------------------ *
 * 4. 渲染
 * ------------------------------------------------------------------ */

const moduleOrder = [...new Set(entries.map((e) => e.module))];
const moduleInfo = new Map<string, UpModule>();
for (const m of moduleOrder) {
  const up = upModules.get(m);
  if (up) moduleInfo.set(m, up);
}

function moduleDocOf(m: string): string {
  const up = upModules.get(m);
  if (!up) return "";
  const rootRel = up.exports["."];
  if (!rootRel) return "";
  const abs = resolveRel(`${up.absDir}/x.ts`, rootRel);
  if (!abs) return "";
  return extractFile(abs)?.moduleDoc ?? "";
}

const GENERATED_HEADER = (extra = "") =>
  `<!-- 本文件由 \`scripts/gen.ts\` 依据 $std 源码自动生成，请勿手工编辑。\n` +
  `     数据源：${STDC_REPO}（@g9wp/std ${stdcConfig.version} 的 exports 清单）+ ${STD_REPO}${
    STD_REF ? `（${STD_REF} 源码）` : "（源码，未检测到 tag → 链接指向默认分支）"
  }${extra ? "\n     " + extra : ""}\n     需要精确签名时以 \`deno doc\` 或源码为准。 -->\n`;

async function write(path: string, content: string) {
  const dir = path.slice(0, path.lastIndexOf("/"));
  await Deno.mkdir(dir, { recursive: true });
  await Deno.writeTextFile(path, content);
}

// 4a. std-modules.md
{
  const rows: string[] = [];
  rows.push(`| 模块 | 上游包 | 子路径 | 说明 | 详情 |`);
  rows.push(`| --- | --- | --- | --- | --- |`);
  for (const m of moduleOrder.sort()) {
    const up = moduleInfo.get(m);
    const subs = entries.filter((e) => e.module === m && e.sub !== "");
    const doc = collapse(moduleDocOf(m)).replace(/\|/g, "\\|");
    rows.push(
      `| \`$std/${m}\` | ${up ? `[@std/${up.modKey}@${up.version ?? "?"}](https://jsr.io/@std/${up.modKey})` : "?"} | ${
        subs.length
      } | ${doc || "—"} | [std-api/${m}.md](./std-api/${m}.md) |`,
    );
  }
  const content = `# $std (@g9wp/std) 模块总览\n\n${GENERATED_HEADER()}\n` +
    `共 ${moduleOrder.length} 个模块、${entries.length} 个导出子路径。\n\n` +
    rows.join("\n") +
    `\n\n## 命名规则\n\n` +
    `- \`$std/<模块>\` 等价于上游 \`@std/<模块>\` 的根模块（mod.ts）。\n` +
    `- \`$std/<模块>/<名字>\` 是上游同名子路径；**上游的 \`unstable-xxx\` 会被改名为 \`xxx\`**（若同名 stable 子路径已存在，则 unstable 版本被丢弃）。\n` +
    `- 上游尚未稳定的能力因此可以直接用稳定名字导入，例如 \`$std/async/throttle\` = 上游 \`@std/async/unstable-throttle\`。\n` +
    `- 上游 \`@std/x/mod.ts\` 已导出的子模块不会重复导出；\`patch.json\` 中显式屏蔽的导出（如 \`@std/uuid/unstable-v6\`）不包含在内。\n`;
  await write(`${OUT}/references/std-modules.md`, content);
}

// 4b. 每个模块的 API 目录
let totalSymbols = 0;
for (const m of moduleOrder) {
  const up = moduleInfo.get(m);
  const list = entries
    .filter((e) => e.module === m)
    .sort((a, b) => (a.sub === "" ? -1 : b.sub === "" ? 1 : a.sub.localeCompare(b.sub)));
  const lines: string[] = [];
  lines.push(`# \`$std/${m}\`${up ? ` — @std/${up.modKey}@${up.version ?? "?"}` : ""}\n`);
  lines.push(GENERATED_HEADER(`上游源码：${STD_REPO}/tree/${STD_TREE_REF}/${up?.dir ?? "?"}`));
  const doc = collapse(moduleDocOf(m));
  if (doc) lines.push(`> ${doc}\n`);
  lines.push(
    `导入：\`import {...} from "$std/${m}";\`　别名：\`jsr:@g9wp/std@^${stdcConfig.version}/${m}\`\n`,
  );
  lines.push(
    `| 子路径 | 上游来源 | 源码 | 导出数 |\n| --- | --- | --- | --- |\n` +
      list
        .map((e) => {
          const spec = e.specifiers.length ? e.specifiers.map((s) => `\`${s}\``).join(" + ") : "—";
          const files = e.files.length ? e.files.map((f) => `\`${f.slice(STD.length + 1)}\``).join(", ") : "—";
          return `| \`$std/${e.key}\` | ${spec} | ${files} | ${e.symbols.length} |`;
        })
        .join("\n"),
  );
  lines.push("");

  for (const e of list) {
    totalSymbols += e.symbols.length;
    lines.push(`## \`$std/${e.key}\`\n`);
    if (e.sub !== "" ) {
      const renamed = e.specifiers.find((s) => /unstable-/.test(s));
      if (renamed) lines.push(`> ⚠️ 上游为不稳定模块 \`${renamed}\`，在 $std 中以稳定名字 \`${e.key}\` 提供。\n`);
    }
    if (e.unresolved.length) lines.push(`> 未能定位上游源码：${e.unresolved.map((u) => `\`${u}\``).join(", ")}\n`);
    if (!e.symbols.length) {
      const docs = e.files.map((f) => extractFile(f)).filter((d) => d !== undefined);
      const modDoc = docs.find((d) => d!.moduleDoc)?.moduleDoc;
      if (modDoc) lines.push(`> ${modDoc}\n`);
      if (docs.some((d) => d!.moduleTags === "@module")) {
        lines.push(`> 该子路径**没有导出符号**：导入它只为触发副作用（见上方说明）。\n`);
      } else {
        lines.push(`_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 \`deno doc\` 为准。）_\n`);
      }
      continue;
    }
    const syms = [...e.symbols].sort((a, b) => a.name.localeCompare(b.name));
    if (e.sub === "") {
      lines.push(`${syms.length} 个导出符号：\n`);
    }
    for (const s of syms) {
      const flags = `${s.deprecated ? " ⚠️已废弃" : ""}${s.internal ? " 🚫@internal" : ""}`;
      lines.push(`- **\`${s.name}\`** (${s.kind})${flags}`);
      if (s.sig) lines.push(`  - \`${s.sig.replace(/\|/g, "\\|")}\``);
      if (s.doc) lines.push(`  - ${s.doc}`);
    }
    lines.push("");
  }
  await write(`${OUT}/references/std-api/${m}.md`, lines.join("\n"));
}

// 4c. 机器可读映射
{
  const map: Record<string, { upstream: string[]; module: string; source: string[] }> = {};
  for (const e of entries) {
    map[e.key] = { upstream: e.specifiers, module: e.module, source: e.files.map((f) => f.slice(STD.length + 1)) };
  }
  await write(
    `${OUT}/references/std-export-map.json`,
    JSON.stringify({ package: stdcConfig.name, version: stdcConfig.version, upstream: `${STD_REPO} @ ${STD_REF ?? "unknown"}`, exports: map }, null, 2),
  );
}

console.log(`modules=${moduleOrder.length} entries=${entries.length} symbols=${totalSymbols}`);
