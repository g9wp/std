# `$std/dotenv` — @std/dotenv@0.225.8

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/dotenv
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Parses and stringifies data in the .env file format.

导入：`import {...} from "$std/dotenv";`　别名：`jsr:@g9wp/std@^0.1.5/dotenv`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/dotenv` | `@std/dotenv` | `dotenv/mod.ts` | 5 |
| `$std/dotenv/load` | `@std/dotenv/load` | `dotenv/load.ts` | 0 |
| `$std/dotenv/parse` | `@std/dotenv/parse` | `dotenv/parse.ts` | 1 |
| `$std/dotenv/stringify` | `@std/dotenv/stringify` | `dotenv/stringify.ts` | 1 |

## `$std/dotenv`

5 个导出符号：

- **`load`** (async function) ⚠️已废弃
  - `export async function load( options: LoadOptions = {}, ): Promise<Record<string, string>>`
  - Load environment variables from a .env file. Loaded variables are accessible in a configuration object returned by the load() function, as well as optionally exporting them to the process environment…
- **`LoadOptions`** (interface) ⚠️已废弃
  - `export interface LoadOptions`
  - Options for load and loadSync.
- **`loadSync`** (function) ⚠️已废弃
  - `export function loadSync( options: LoadOptions = {}, ): Record<string, string>`
  - Works identically to load, but synchronously.
- **`parse`** (function)
  - `export function parse(text: string): Record<string, string>`
  - Parse .env file output in an object.
- **`stringify`** (function)
  - `export function stringify(object: Record<string, string>): string`
  - Stringify an object into a valid .env file format.

## `$std/dotenv/load`

> Loads environment variables from a .env file into the process environment as a side effect of importing this module.

> 该子路径**没有导出符号**：导入它只为触发副作用（见上方说明）。

## `$std/dotenv/parse`

- **`parse`** (function)
  - `export function parse(text: string): Record<string, string>`
  - Parse .env file output in an object.

## `$std/dotenv/stringify`

- **`stringify`** (function)
  - `export function stringify(object: Record<string, string>): string`
  - Stringify an object into a valid .env file format.
