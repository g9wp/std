# `$std/json` — @std/json@1.1.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/json
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for parsing streaming JSON data.

导入：`import {...} from "$std/json";`　别名：`jsr:@g9wp/std@^0.1.5/json`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/json` | `@std/json` | `json/mod.ts` | 8 |
| `$std/json/canonicalize` | `@std/json/canonicalize` | `json/canonicalize.ts` | 2 |
| `$std/json/concatenated-json-parse-stream` | `@std/json/concatenated-json-parse-stream` | `json/concatenated_json_parse_stream.ts` | 1 |
| `$std/json/parse-stream` | `@std/json/parse-stream` | `json/parse_stream.ts` | 1 |
| `$std/json/stringify-stream` | `@std/json/stringify-stream` | `json/stringify_stream.ts` | 2 |
| `$std/json/types` | `@std/json/types` | `json/types.ts` | 2 |

## `$std/json`

8 个导出符号：

- **`canonicalize`** (function)
  - `export function canonicalize(value: JsonValue): string`
  - Serializes a JSON value to a canonical string per RFC 8785 JSON Canonicalization Scheme (JCS).
- **`canonicalizeToBytes`** (function)
  - `export function canonicalizeToBytes(value: JsonValue): Uint8Array_`
  - Serializes a JSON value to canonical UTF-8 bytes per RFC 8785 JSON Canonicalization Scheme (JCS).
- **`ConcatenatedJsonParseStream`** (class)
  - `export class ConcatenatedJsonParseStream implements TransformStream<string, JsonValue>`
  - Stream to parse Concatenated JSON.
- **`JsonParseStream`** (class)
  - `export class JsonParseStream extends TransformStream<string, JsonValue>`
  - Parse each chunk as JSON.
- **`JsonPrimitive`** (type)
  - `export type JsonPrimitive = string \| number \| boolean \| null`
  - A primitive JSON value.
- **`JsonStringifyStream`** (class)
  - `export class JsonStringifyStream extends TransformStream<unknown, string>`
  - Convert each chunk to JSON string.
- **`JsonValue`** (type)
  - `export type JsonValue = \| … }`
  - The type of the result of parsing JSON.
- **`StringifyStreamOptions`** (interface)
  - `export interface StringifyStreamOptions`
  - Options for JsonStringifyStream.

## `$std/json/canonicalize`

- **`canonicalize`** (function)
  - `export function canonicalize(value: JsonValue): string`
  - Serializes a JSON value to a canonical string per RFC 8785 JSON Canonicalization Scheme (JCS).
- **`canonicalizeToBytes`** (function)
  - `export function canonicalizeToBytes(value: JsonValue): Uint8Array_`
  - Serializes a JSON value to canonical UTF-8 bytes per RFC 8785 JSON Canonicalization Scheme (JCS).

## `$std/json/concatenated-json-parse-stream`

- **`ConcatenatedJsonParseStream`** (class)
  - `export class ConcatenatedJsonParseStream implements TransformStream<string, JsonValue>`
  - Stream to parse Concatenated JSON.

## `$std/json/parse-stream`

- **`JsonParseStream`** (class)
  - `export class JsonParseStream extends TransformStream<string, JsonValue>`
  - Parse each chunk as JSON.

## `$std/json/stringify-stream`

- **`JsonStringifyStream`** (class)
  - `export class JsonStringifyStream extends TransformStream<unknown, string>`
  - Convert each chunk to JSON string.
- **`StringifyStreamOptions`** (interface)
  - `export interface StringifyStreamOptions`
  - Options for JsonStringifyStream.

## `$std/json/types`

- **`JsonPrimitive`** (type)
  - `export type JsonPrimitive = string \| number \| boolean \| null`
  - A primitive JSON value.
- **`JsonValue`** (type)
  - `export type JsonValue = \| … }`
  - The type of the result of parsing JSON.
