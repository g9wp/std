# `$std/msgpack` — @std/msgpack@1.0.3

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/msgpack
     需要精确签名时以 `deno doc` 或源码为准。 -->

> This module provides functions to encode and decode MessagePack.

导入：`import {...} from "$std/msgpack";`　别名：`jsr:@g9wp/std@^0.1.5/msgpack`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/msgpack` | `@std/msgpack` | `msgpack/mod.ts` | 5 |
| `$std/msgpack/decode` | `@std/msgpack/decode` | `msgpack/decode.ts` | 1 |
| `$std/msgpack/encode` | `@std/msgpack/encode` | `msgpack/encode.ts` | 4 |

## `$std/msgpack`

5 个导出符号：

- **`decode`** (function)
  - `export function decode(data: Uint8Array): ValueType`
  - Decode a value from the MessagePack binary format.
- **`encode`** (function)
  - `export function encode(object: ValueType): Uint8Array_`
  - Encode a value to MessagePack binary format.
- **`Uint8Array_`** (re-export)
- **`ValueMap`** (interface)
  - `export interface ValueMap`
  - Value map that can be encoded to MessagePack.
- **`ValueType`** (type)
  - `export type ValueType = \| number \| bigint \| string \| boolean \| null \| Uint8Array \| readonly ValueType[] \| ValueMap`
  - Value types that can be encoded to MessagePack.

## `$std/msgpack/decode`

- **`decode`** (function)
  - `export function decode(data: Uint8Array): ValueType`
  - Decode a value from the MessagePack binary format.

## `$std/msgpack/encode`

- **`encode`** (function)
  - `export function encode(object: ValueType): Uint8Array_`
  - Encode a value to MessagePack binary format.
- **`Uint8Array_`** (re-export)
- **`ValueMap`** (interface)
  - `export interface ValueMap`
  - Value map that can be encoded to MessagePack.
- **`ValueType`** (type)
  - `export type ValueType = \| number \| bigint \| string \| boolean \| null \| Uint8Array \| readonly ValueType[] \| ValueMap`
  - Value types that can be encoded to MessagePack.
