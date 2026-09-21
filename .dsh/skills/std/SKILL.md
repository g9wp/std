---
name: std
description: "速查并使用 $std (@g9wp/std) 导出的函数：$std 把上游 denoland/std 的 42 个模块合并为单一包（487 个子路径，上游 unstable-xxx 一律改名为稳定名），源码仓库 https://github.com/g9wp/std 是它的唯一来源。需要“这个功能该从哪个模块导入”“某个函数叫什么 / 怎么调 / 签名是什么”“上游 unstable 模块在新包里的稳定名”“某个符号在哪个子路径 / 对应上游哪个文件”时使用。"
whenToUse: "在 Deno/JSR 项目里需要选用或调用 @g9wp/std（$std）中的工具函数时；在 g9wp/std 或 denoland/std 仓库里写 TypeScript 且想复用现成 std 函数时。"
---

# $std (@g9wp/std) 函数速查与使用规范

`@g9wp/std` 是 **Deno + JSR 的 ESM 工具库**：把上游 `denoland/std` 的 42 个模块合并为单一包，
无构建步骤、可直接 `import`。源码仓库 `https://github.com/g9wp/std`（`std/` 下是再导出文件 + `build.ts` 生成 `deno.json` 的 487 条 exports）。

| 别名 | 包名 | 版本 | 源码仓库 | 内容 |
| --- | --- | --- | --- | --- |
| `$std` | `@g9wp/std`（`jsr:@g9wp/std@^0.1.4`） | 0.1.4 | `https://github.com/g9wp/std` | 上游 `denoland/std` 的 **42 个模块 / 487 个子路径**合并包（含被改名为稳定名的 unstable 模块） |
| 上游源码 | `@std/*` | — | `https://github.com/denoland/std` | 上游 release tag（当次的 tag 记在 `references/std-modules.md` 头部，由生成器从上游 clone 自动取） |

## 安装与别名

```jsonc
// deno.json
{
  "imports": {
    "$std": "jsr:@g9wp/std@^0.1.4"
  }
}
```

```ts
import { debounce } from "$std/async";
import { pooledMap } from "$std/async";          // 想减小加载面时用子路径：$std/async/pooled-map
import { join } from "$std/path";
```

- 本仓库（g9wp/std）自身**不需要** `$std` 别名（`std/*.ts` 直接 `export * from "@std/<模块>"`，上游映射写在仓库 `deno.json` 的 `imports` 里，由 `build.ts` 生成）；下游项目按上面加 `"$std": "jsr:@g9wp/std@^0.1.4"` 即可。
- 无别名时可写 `import { debounce } from "jsr:@g9wp/std@^0.1.4/async";`。
- **不要绕过 `$std` 直接用上游 `@std/*`**：版本和子路径名都不同（见下），混用会同时加载两份代码。

## 三条硬规则

1. **unstable 改名为稳定名**：`$std/async/throttle` = 上游 `@std/async/unstable-throttle`；`$std/collections/binary-search` = 上游 `@std/collections/unstable-binary-search`。查不到稳定子路径时先怀疑这个规则。
2. **已稳定的 unstable 被丢弃**：上游若同时有 `abortable` 和 `unstable-abortable`，则 `$std` 只保留 `abortable`。个别被 `patch.json` 显式屏蔽的（如 `@std/uuid/unstable-v6`）不导出。
3. **根入口已含大部分子模块**：`$std/async` 已经导出 `delay/debounce/retry/pooledMap/throttle/...`；只有当你要**减小加载面**或**避开同名冲突**时才改用子路径 `$std/async/delay`。同一符号不要从两处同时 `export *`（会重复导出报错）。

## 常见需求 → 模块路由

| 需求 | 用法 |
| --- | --- |
| 延时 / 防抖 / 节流 / 重试 / 并发池 | `$std/async` → `delay` `debounce` `throttle` `retry` `pooledMap` `pooledMapSettled` `allKeyed`；子路径 `$std/async/tee` `$std/async/deadline` `$std/async/channel` `$std/async/semaphore` `$std/async/circuit-breaker` |
| 遍历/转换/分组数组对象 | `$std/collections` → `chunk` `partition` `aggregateGroups` `reduceGroups` `associateBy` `deepMerge` `distinctBy` `sortBy` `maxBy` `sumOf` `union` `zip` `unzip` `invert` `pick` `omit` |
| 路径拼接/解析 | `$std/path` → `join` `resolve` `dirname` `basename` `extname` `relative` `normalize` `toFileUrl` `globToRegExp`（`$std/path/posix` 与 `$std/path/windows` 各自全套） |
| 读写文件 / 遍历目录 | `$std/fs` → `readTextFile` `writeTextFile` `readFile` `walk` `expandGlob` `ensureDir` `copy` `move` `emptyDir` `exists` `stat` |
| 读写 JSON/JSONC/TOML/YAML/CSV/INI | `$std/json`（流式） `$std/jsonc` `$std/toml` `$std/yaml` `$std/csv` `$std/ini` `$std/front-matter` |
| 文本处理（命名风格、相似度、自然排序） | `$std/text` → `toCamelCase` `toKebabCase` `toSnakeCase` `toTitleCase` `levenshteinDistance` `compareSimilarity` `dedent`；**自然排序**用 `$std/collections/sort-by`，或 `$stdx/collections` 的 `naturalCollator`/`naturalSortBy`（见 `stdx` 技能） |
| 断言与测试 | `$std/assert` → `assertEquals` `assertThrows` `assertRejects` `assertMatch` `assertObjectMatch`；`$std/expect`、`$std/testing`（`fakeTime` `stub` `assertSpyCall`） |
| 哈希 / 编码 | `$std/crypto` → `crypto`(StdCrypto) `encryptAesGcm` `decryptAesGcm` `timingSafeEqual`；`$std/encoding` → `encodeHex` `decodeHex` `encodeBase64` `encodeBase32` `encodeAscii85` `encodeVarint` |
| 流式处理 / Web Streams | `$std/streams` → `toText` `toLines` `toTransformStream` `TextLineStream` `ByteSliceStream` `LimitedBytesTransformStream`；`$std/io`（`toBytes` `toByteStream` 等） |
| 命令行交互 | `$std/cli` → `parseArgs` `promptSelect` `promptSecret` `promptMultipleSelect` `Spinner` `ProgressBar`，以及 `moveCursorUp` `setCursorPosition` `eraseLine` 等 ANSI 控制 |
| 版本号 / ID | `$std/semver` `$std/uuid`（v1/v3/v4/v5/v7） `$std/ulid` |
| 静态服务 / Cookie / HTTP 语义 | `$std/http` → `serveFile` `serveDir` `setCookie` `getCookies` `signCookie` `verifySignedCookie` `eTag` `route` `HttpError` `createProblemDetailsResponse`；`$std/media-types`（`typeByExtension` `extension` `contentType` `parseMediaType`）、`$std/net` |
| 数据结构 | `$std/data-structures` → `Deque` `BinaryHeap` `RedBlackTree` `BinarySearchTree` `MultiMap` `BidirectionalMap` `IndexedHeap` `RollingCounter` |
| 缓存 | `$std/cache` → `memoize` `TtlCache` `LruCache` |
| 二进制序列化 | `$std/cbor` `$std/msgpack` `$std/bytes` |
| 日期时间 | `$std/datetime` → `format` `parse` `dayOfYear` `weekOfYear` `difference` |

> **JSON 便捷读写 / 自然排序 / 池化并发 / 文件哈希 / Windows 专属**这些**不在 `$std` 里**，在 `stdx`：
> `readJsonFile` `writeJsonFile` `naturalCollator` `naturalSortBy` `pooledEach` `pooledArray` `file_sum`
> `spawnCommand` `toFullWidth` `Num/Int/Bool` `win`（`attrib` `createDesktopIni` `defaultEncoding`）—— 见 **`stdx` 技能**。

完整 42 模块清单见 `references/std-modules.md`；每个模块的**全部导出符号、签名、一行说明**见 `references/std-api/<模块>.md`。

## 怎么快速找到某个函数

1. **查目录**：`references/std-modules.md` 的 42 行表（每个模块的用途 + 子路径数 + 详情链接）。
2. **按名查符号**：在 `references/std-api/*.md` 里检索，例如 `grep -ri "timingSafeEqual" references/`；每行格式为 `- **名字** (类型)` + 缩进的签名行 + 一行说明；`⚠️已废弃`/`🚫@internal` 有标记。
3. **查子路径映射**：`references/std-export-map.json`（`$std` 子路径 → 上游 `@std/...` 标识符与源码文件）。
4. **看权威源码**：仓库根 `deno.json`（$std 全部 exports，由 `build.ts` 生成）、`std/<模块>.ts`（再导出）；
   上游实现与类型在 `denoland/std` 仓库的 `std/<模块>/<文件>.ts`。
5. **取精确签名**：`deno doc` 支持 jsr 标识符，不用克隆源码，例如 `deno doc jsr:@g9wp/std@0.1.4/path`、
   `deno doc jsr:@g9wp/std@0.1.4/fs/walk`，或上游 `deno doc jsr:@std/path@<版本>`；有本地克隆时也可 `deno doc <克隆目录>/path/mod.ts`。

## 使用注意事项

- **运行时**：纯 ESM，Deno / Node / Bun / 浏览器 / Cloudflare Workers 大多可用（模块头注释会标注 “This module is browser compatible.”）。
- **权限**：涉及文件/网络的函数需要 Deno 权限（`--allow-read`、`--allow-write`、`--allow-run`、`--allow-net`），函数 JSDoc 中的 `@tags allow-read` 即提示。
- **unstable 能力**：`$std` 里以稳定名暴露的（`throttle` `semaphore` `circuit-breaker` `channel` `pool-settled` `cycle` `binary-search` `read-dir` 等）上游仍标 `unstable-`，API 可能在小版本变动，升级 `$std` 时留意。
- **deprecated**：`$std` 中已标记 `@deprecated` 的符号在目录里带 ⚠️（如 `$std/testing` 的 `assertSnapshot`、`$std/dotenv/load` 这类副作用模块），新代码不要用。
- **类型严格**：上游开启 `strict`、`exactOptionalPropertyTypes`、`noUncheckedIndexedAccess`，写调用代码时按类型收窄（`arr[0]` 是 `T | undefined`）。
- **常见坑（实测）**：`$std/media-types` 没有 `getType`（旧版 API），按扩展名取类型要用 `typeByExtension(ext)`；`$std/path.extname(".jpg")` 是**空串**（点开头当隐藏文件名）。

## 参考文件与再生成

```
SKILL.md                        本文件：定位、规则、路由、坑
references/std-modules.md       $std 42 模块总览（生成）
references/std-api/*.md         $std 每个模块的全部导出符号 + 签名 + 一行说明（生成，42 个文件）
references/std-export-map.json  $std 子路径 → 上游标识符/源码 映射（生成）
scripts/gen.ts                  重新生成上述生成物
```

重新生成（`$std` 版本或上游 std 升级后）：

```bash
# 在 g9wp/std 仓库的克隆里，本技能位于 .dsh/skills/std
cd <g9wp/std 克隆>/.dsh/skills/std
deno run -A scripts/gen.ts      # stdc 默认取本技能所属仓库根，上游默认取兄弟目录 ../std
# 或显式指定：deno run -A scripts/gen.ts <stdc 仓库> <上游 std 仓库> <输出目录>
# 环境变量：STD_REPO / STD_UPSTREAM_REPO / STD_UPSTREAM_REF（上游 ref，缺省从 clone 的 git tag 自动取）
#          / STD_SKILL_OUT（兼容旧的 STDX_* 前缀）、STD_VERBOSE=1
```

> 上游 `denoland/std` 升级时：先在 `<stdc 的兄弟目录>/std` 更新 https://github.com/denoland/std 的克隆（切到新 tag），
> 再跑仓库根的 `deno run -A build.ts` 重建 exports，最后跑上面的 `gen.ts`（生成物只写仓库相对路径与仓库 URL，不含本机路径）。
