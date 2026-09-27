# `$std/toml` — @std/toml@1.0.11

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/toml
     需要精确签名时以 `deno doc` 或源码为准。 -->

> parse and stringify for handling TOML encoded data.

导入：`import {...} from "$std/toml";`　别名：`jsr:@g9wp/std@^0.1.5/toml`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/toml` | `@std/toml` | `toml/mod.ts` | 3 |
| `$std/toml/parse` | `@std/toml/parse` | `toml/parse.ts` | 1 |
| `$std/toml/stringify` | `@std/toml/stringify` | `toml/stringify.ts` | 2 |

## `$std/toml`

3 个导出符号：

- **`parse`** (function)
  - `export function parse(tomlString: string): Record<string, unknown>`
  - Parses a TOML string into an object.
- **`stringify`** (function)
  - `export function stringify( obj: Record<string, unknown>, options?: StringifyOptions, ): string`
  - Converts an object to a TOML string.
- **`StringifyOptions`** (interface)
  - `export interface StringifyOptions`
  - Options for stringify.

## `$std/toml/parse`

- **`parse`** (function)
  - `export function parse(tomlString: string): Record<string, unknown>`
  - Parses a TOML string into an object.

## `$std/toml/stringify`

- **`stringify`** (function)
  - `export function stringify( obj: Record<string, unknown>, options?: StringifyOptions, ): string`
  - Converts an object to a TOML string.
- **`StringifyOptions`** (interface)
  - `export interface StringifyOptions`
  - Options for stringify.
