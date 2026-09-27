# `$std/ini` — @std/ini@1.0.0-rc.9

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/ini
     需要精确签名时以 `deno doc` 或源码为准。 -->

> parse and stringify for handling INI encoded data, such as the Desktop Entry specification.

导入：`import {...} from "$std/ini";`　别名：`jsr:@g9wp/std@^0.1.5/ini`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/ini` | `@std/ini` | `ini/mod.ts` | 6 |
| `$std/ini/parse` | `@std/ini/parse` | `ini/parse.ts` | 3 |
| `$std/ini/stringify` | `@std/ini/stringify` | `ini/stringify.ts` | 3 |

## `$std/ini`

6 个导出符号：

- **`parse`** (function)
  - `export function parse<T extends object>( text: string, options: ParseOptions = {}, ): T`
  - Parse an INI config string into an object.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions`
  - Options for parse.
- **`ReplacerFunction`** (type)
  - `export type ReplacerFunction = ( key: string, value: any, section?: string, ) => string; export interface StringifyOptions { lineBreak?: "\n" \| "\r\n" \| "\r"; pretty?: boolean; replacer?: ReplacerFunction; } function is…`
  - Function for replacing JavaScript values with INI string values.
- **`ReviverFunction`** (type)
  - `export type ReviverFunction = ( key: string, value: string \| number \| boolean \| null, section?: string, ) => unknown; const SECTION_REGEXP = /^\[(?<name>.*\S.*)]$/; const KEY_VALUE_REGEXP = /^(?<key>.*?)\s*=\s*(?<value>…`
  - Function for replacing INI values with JavaScript values.
- **`stringify`** (function)
  - `export function stringify( object: object, options: StringifyOptions = {}, ): string`
  - Compile an object into an INI config string. Provide formatting options to modify the output.
- **`StringifyOptions`** (interface)
  - `export interface StringifyOptions`
  - Options for stringify.

## `$std/ini/parse`

- **`parse`** (function)
  - `export function parse<T extends object>( text: string, options: ParseOptions = {}, ): T`
  - Parse an INI config string into an object.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions`
  - Options for parse.
- **`ReviverFunction`** (type)
  - `export type ReviverFunction = ( key: string, value: string \| number \| boolean \| null, section?: string, ) => unknown; const SECTION_REGEXP = /^\[(?<name>.*\S.*)]$/; const KEY_VALUE_REGEXP = /^(?<key>.*?)\s*=\s*(?<value>…`
  - Function for replacing INI values with JavaScript values.

## `$std/ini/stringify`

- **`ReplacerFunction`** (type)
  - `export type ReplacerFunction = ( key: string, value: any, section?: string, ) => string; export interface StringifyOptions { lineBreak?: "\n" \| "\r\n" \| "\r"; pretty?: boolean; replacer?: ReplacerFunction; } function is…`
  - Function for replacing JavaScript values with INI string values.
- **`stringify`** (function)
  - `export function stringify( object: object, options: StringifyOptions = {}, ): string`
  - Compile an object into an INI config string. Provide formatting options to modify the output.
- **`StringifyOptions`** (interface)
  - `export interface StringifyOptions`
  - Options for stringify.
