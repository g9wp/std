# `$std/yaml` — @std/yaml@1.3.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/yaml
     需要精确签名时以 `deno doc` 或源码为准。 -->

> parse and stringify for handling YAML encoded data.

导入：`import {...} from "$std/yaml";`　别名：`jsr:@g9wp/std@^0.1.5/yaml`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/yaml` | `@std/yaml` | `yaml/mod.ts` | 9 |
| `$std/yaml/parse` | `@std/yaml/parse` | `yaml/parse.ts` | 4 |
| `$std/yaml/stringify` | `@std/yaml/stringify` | `yaml/stringify.ts` | 4 |
| `$std/yaml/types` | `@std/yaml/types` | `yaml/types.ts` | 2 |

## `$std/yaml`

9 个导出符号：

- **`parse`** (function)
  - `export function parse( content: string, options: ParseOptions = {}, ): unknown`
  - Parse and return a YAML string as a parsed YAML document object.
- **`parseAll`** (function)
  - `export function parseAll( content: string, options: ParseOptions = {}, ): unknown[]`
  - Same as parse, but understands multi-document YAML sources, and returns multiple parsed YAML document objects.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions`
  - Options for parse.
- **`SchemaType`** (re-export)
- **`stringify`** (function)
  - `export function stringify( data: unknown, options: StringifyOptions = {}, ): string`
  - Converts a JavaScript object or value to a YAML document string.
- **`StringifyOptions`** (type)
  - `export type StringifyOptions = … }`
  - Options for stringify.
- **`StyleVariant`** (re-export)
- **`YamlPosition`** (interface)
  - `export interface YamlPosition`
  - Position information for error reporting.
- **`YamlSyntaxError`** (class)
  - `export class YamlSyntaxError extends SyntaxError`
  - Error thrown when YAML parsing fails.

## `$std/yaml/parse`

- **`parse`** (function)
  - `export function parse( content: string, options: ParseOptions = {}, ): unknown`
  - Parse and return a YAML string as a parsed YAML document object.
- **`parseAll`** (function)
  - `export function parseAll( content: string, options: ParseOptions = {}, ): unknown[]`
  - Same as parse, but understands multi-document YAML sources, and returns multiple parsed YAML document objects.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions`
  - Options for parse.
- **`SchemaType`** (re-export)

## `$std/yaml/stringify`

- **`SchemaType`** (re-export)
- **`stringify`** (function)
  - `export function stringify( data: unknown, options: StringifyOptions = {}, ): string`
  - Converts a JavaScript object or value to a YAML document string.
- **`StringifyOptions`** (type)
  - `export type StringifyOptions = … }`
  - Options for stringify.
- **`StyleVariant`** (re-export)

## `$std/yaml/types`

- **`YamlPosition`** (interface)
  - `export interface YamlPosition`
  - Position information for error reporting.
- **`YamlSyntaxError`** (class)
  - `export class YamlSyntaxError extends SyntaxError`
  - Error thrown when YAML parsing fails.
