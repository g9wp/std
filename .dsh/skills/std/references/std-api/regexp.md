# `$std/regexp` — @std/regexp@1.0.2

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/regexp
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Functions for tasks related to regular expression (regexp), such as escaping text for interpolation into a regexp.

导入：`import {...} from "$std/regexp";`　别名：`jsr:@g9wp/std@^0.1.5/regexp`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/regexp` | `@std/regexp` + `@std/regexp/unstable-replace-all-async` | `regexp/mod.ts`, `regexp/unstable_replace_all_async.ts` | 2 |
| `$std/regexp/escape` | `@std/regexp/escape` | `regexp/escape.ts` | 1 |
| `$std/regexp/replace-all-async` | `@std/regexp/unstable-replace-all-async` | `regexp/unstable_replace_all_async.ts` | 1 |

## `$std/regexp`

2 个导出符号：

- **`escape`** (function)
  - `export function escape(str: string): string`
  - Escapes arbitrary text for interpolation into a regexp, such that it will match exactly that text and nothing else.
- **`replaceAllAsync`** (async function)
  - `export async function replaceAllAsync( text: string, searchValue: RegExp \| string, replacer: (substring: string, ...args: any[]) => Promise<string> \| string, ): Promise<string>`
  - Asynchronously replaces all occurrences of a pattern in a string.

## `$std/regexp/escape`

- **`escape`** (function)
  - `export function escape(str: string): string`
  - Escapes arbitrary text for interpolation into a regexp, such that it will match exactly that text and nothing else.

## `$std/regexp/replace-all-async`

> ⚠️ 上游为不稳定模块 `@std/regexp/unstable-replace-all-async`，在 $std 中以稳定名字 `regexp/replace-all-async` 提供。

- **`replaceAllAsync`** (async function)
  - `export async function replaceAllAsync( text: string, searchValue: RegExp \| string, replacer: (substring: string, ...args: any[]) => Promise<string> \| string, ): Promise<string>`
  - Asynchronously replaces all occurrences of a pattern in a string.
