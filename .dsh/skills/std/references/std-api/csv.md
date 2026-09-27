# `$std/csv` — @std/csv@1.0.6

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/csv
     需要精确签名时以 `deno doc` 或源码为准。 -->

导入：`import {...} from "$std/csv";`　别名：`jsr:@g9wp/std@^0.1.5/csv`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/csv` | `@std/csv` | `csv/mod.ts` | 15 |
| `$std/csv/parse` | `@std/csv/parse` | `csv/parse.ts` | 4 |
| `$std/csv/parse-stream` | `@std/csv/parse-stream` | `csv/parse_stream.ts` | 3 |
| `$std/csv/stringify` | `@std/csv/stringify` | `csv/stringify.ts` | 6 |
| `$std/csv/stringify-stream` | `@std/csv/stringify-stream` | `csv/stringify_stream.ts` | 2 |

## `$std/csv`

15 个导出符号：

- **`Column`** (type)
  - `export type Column = ColumnDetails \| PropertyAccessor \| PropertyAccessor[]`
  - The most essential aspect of a column is accessing the property holding the data for that column on each object in the data array. If that member is at the top level, Column can simply be a property…
- **`ColumnDetails`** (type)
  - `export type ColumnDetails = … }`
  - Column information.
- **`CsvParseStream`** (class)
  - `export class CsvParseStream< const T extends CsvParseStreamOptions \| undefined = undefined, > implements TransformStream<string, RowType<T>> { readonly #readable: ReadableStream< string[] \| Record<string, string \| unkno…`
  - CsvParseStream transforms a stream of CSV-encoded text into a stream of parsed objects.
- **`CsvParseStreamOptions`** (interface)
  - `export interface CsvParseStreamOptions`
  - Options for CsvParseStream.
- **`CsvStringifyStream`** (class)
  - `export class CsvStringifyStream<TOptions extends CsvStringifyStreamOptions> extends TransformStream< TOptions["columns"] extends Array<string> ? Record<string, unknown> : Array<unknown>, string >`
  - Convert each chunk to a CSV record.
- **`CsvStringifyStreamOptions`** (interface)
  - `export interface CsvStringifyStreamOptions`
  - Options for CsvStringifyStream.
- **`DataItem`** (type)
  - `export type DataItem = Readonly<Record<string, unknown> \| unknown[]>`
  - An object (plain or array)
- **`parse`** (function)
  - `export function parse(input: string): string[][]`
  - Parses CSV string into an array of arrays of strings.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions`
  - Options for parse.
- **`ParseResult`** (re-export)
- **`PropertyAccessor`** (type)
  - `export type PropertyAccessor = number \| string`
  - Array index or record key corresponding to a value for a data object.
- **`RecordWithColumn`** (re-export)
- **`RowType`** (type)
  - `export type RowType<T> = T extends undefined ? string[] : ParseResult<CsvParseStreamOptions, T>[number]`
  - Row return type.
- **`stringify`** (function)
  - `export function stringify( data: readonly DataItem[], options?: StringifyOptions, ): string`
  - Converts an array of objects into a CSV string.
- **`StringifyOptions`** (type)
  - `export type StringifyOptions = … }`
  - Options for stringify.

## `$std/csv/parse`

- **`parse`** (function)
  - `export function parse(input: string): string[][]`
  - Parses CSV string into an array of arrays of strings.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions`
  - Options for parse.
- **`ParseResult`** (re-export)
- **`RecordWithColumn`** (re-export)

## `$std/csv/parse-stream`

- **`CsvParseStream`** (class)
  - `export class CsvParseStream< const T extends CsvParseStreamOptions \| undefined = undefined, > implements TransformStream<string, RowType<T>> { readonly #readable: ReadableStream< string[] \| Record<string, string \| unkno…`
  - CsvParseStream transforms a stream of CSV-encoded text into a stream of parsed objects.
- **`CsvParseStreamOptions`** (interface)
  - `export interface CsvParseStreamOptions`
  - Options for CsvParseStream.
- **`RowType`** (type)
  - `export type RowType<T> = T extends undefined ? string[] : ParseResult<CsvParseStreamOptions, T>[number]`
  - Row return type.

## `$std/csv/stringify`

- **`Column`** (type)
  - `export type Column = ColumnDetails \| PropertyAccessor \| PropertyAccessor[]`
  - The most essential aspect of a column is accessing the property holding the data for that column on each object in the data array. If that member is at the top level, Column can simply be a property…
- **`ColumnDetails`** (type)
  - `export type ColumnDetails = … }`
  - Column information.
- **`DataItem`** (type)
  - `export type DataItem = Readonly<Record<string, unknown> \| unknown[]>`
  - An object (plain or array)
- **`PropertyAccessor`** (type)
  - `export type PropertyAccessor = number \| string`
  - Array index or record key corresponding to a value for a data object.
- **`stringify`** (function)
  - `export function stringify( data: readonly DataItem[], options?: StringifyOptions, ): string`
  - Converts an array of objects into a CSV string.
- **`StringifyOptions`** (type)
  - `export type StringifyOptions = … }`
  - Options for stringify.

## `$std/csv/stringify-stream`

- **`CsvStringifyStream`** (class)
  - `export class CsvStringifyStream<TOptions extends CsvStringifyStreamOptions> extends TransformStream< TOptions["columns"] extends Array<string> ? Record<string, unknown> : Array<unknown>, string >`
  - Convert each chunk to a CSV record.
- **`CsvStringifyStreamOptions`** (interface)
  - `export interface CsvStringifyStreamOptions`
  - Options for CsvStringifyStream.
