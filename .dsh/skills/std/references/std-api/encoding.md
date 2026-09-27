# `$std/encoding` — @std/encoding@1.0.11

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/encoding
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for encoding and decoding common formats like hex, base64, and varint.

导入：`import {...} from "$std/encoding";`　别名：`jsr:@g9wp/std@^0.1.5/encoding`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/encoding` | `@std/encoding` + `@std/encoding/unstable-base32-stream` + `@std/encoding/unstable-base64-stream` + `@std/encoding/unstable-hex-stream` | `encoding/mod.ts`, `encoding/unstable_base32_stream.ts`, `encoding/unstable_base64_stream.ts`, `encoding/unstable_hex_stream.ts` | 28 |
| `$std/encoding/ascii85` | `@std/encoding/ascii85` | `encoding/ascii85.ts` | 6 |
| `$std/encoding/base32` | `@std/encoding/base32` | `encoding/base32.ts` | 3 |
| `$std/encoding/base32-stream` | `@std/encoding/unstable-base32-stream` | `encoding/unstable_base32_stream.ts` | 3 |
| `$std/encoding/base58` | `@std/encoding/base58` | `encoding/base58.ts` | 3 |
| `$std/encoding/base64` | `@std/encoding/base64` | `encoding/base64.ts` | 3 |
| `$std/encoding/base64-stream` | `@std/encoding/unstable-base64-stream` | `encoding/unstable_base64_stream.ts` | 3 |
| `$std/encoding/base64url` | `@std/encoding/base64url` | `encoding/base64url.ts` | 3 |
| `$std/encoding/hex` | `@std/encoding/hex` | `encoding/hex.ts` | 3 |
| `$std/encoding/hex-stream` | `@std/encoding/unstable-hex-stream` | `encoding/unstable_hex_stream.ts` | 3 |
| `$std/encoding/varint` | `@std/encoding/varint` | `encoding/varint.ts` | 7 |

## `$std/encoding`

28 个导出符号：

- **`Ascii85Standard`** (type)
  - `export type Ascii85Standard = "Adobe" \| "btoa" \| "RFC 1924" \| "Z85"`
  - Supported ascii85 standards for EncodeAscii85Options and DecodeAscii85Options.
- **`Base32DecoderStream`** (class)
  - `export class Base32DecoderStream<T extends "string" \| "bytes"> extends TransformStream< T extends "bytes" ? Uint8Array_ : string, Uint8Array_ >`
  - Transforms a base32 stream into a Uint8Array<ArrayBuffer> stream.
- **`Base32EncoderStream`** (class)
  - `export class Base32EncoderStream<T extends "string" \| "bytes"> extends TransformStream< Uint8Array_, T extends "bytes" ? Uint8Array_ : string >`
  - Transforms a Uint8Array<ArrayBuffer> stream into a base32 stream.
- **`Base64DecoderStream`** (class)
  - `export class Base64DecoderStream<T extends "string" \| "bytes"> extends TransformStream< T extends "bytes" ? Uint8Array_ : string, Uint8Array_ >`
  - Transforms a base64 stream into a Uint8Array<ArrayBuffer> stream.
- **`Base64EncoderStream`** (class)
  - `export class Base64EncoderStream<T extends "string" \| "bytes"> extends TransformStream< Uint8Array_, T extends "bytes" ? Uint8Array_ : string >`
  - Transforms a Uint8Array<ArrayBuffer> stream into a base64 stream.
- **`decodeAscii85`** (function)
  - `export function decodeAscii85( ascii85: string, options: DecodeAscii85Options = {}, ): Uint8Array_`
  - Decodes a ascii85-encoded string.
- **`DecodeAscii85Options`** (type)
  - `export type DecodeAscii85Options = Omit<EncodeAscii85Options, "delimiter">`
  - Options for decodeAscii85.
- **`decodeBase32`** (function)
  - `export function decodeBase32(b32: string): Uint8Array_`
  - Decodes a base32-encoded string.
- **`decodeBase58`** (function)
  - `export function decodeBase58(b58: string): Uint8Array_`
  - Decodes a base58-encoded string.
- **`decodeBase64`** (function)
  - `export function decodeBase64(b64: string): Uint8Array_`
  - Decodes a base64-encoded string.
- **`decodeBase64Url`** (function)
  - `export function decodeBase64Url(b64url: string): Uint8Array_`
  - Decodes a given base64url-encoded string.
- **`decodeHex`** (function)
  - `export function decodeHex(src: string): Uint8Array_`
  - Decodes the given hex-encoded string. If the input is malformed, an error is thrown.
- **`decodeVarint`** (function)
  - `export function decodeVarint(buf: Uint8Array, offset = 0): [bigint, number]`
  - Given a non empty buf, starting at offset (default: 0), begin decoding bytes as Varint encoded bytes, for a maximum of 10 bytes (offset + 10). The returned tuple is of the decoded varint 32-bit numbe…
- **`decodeVarint32`** (function)
  - `export function decodeVarint32(buf: Uint8Array, offset = 0): [number, number]`
  - Given a buf, starting at offset (default: 0), begin decoding bytes as Varint encoded bytes, for a maximum of 5 bytes (offset + 5). The returned tuple is of the decoded varint 32-bit number, and the n…
- **`encodeAscii85`** (function)
  - `export function encodeAscii85( data: ArrayBuffer \| Uint8Array \| string, options: EncodeAscii85Options = {}, ): string`
  - Converts data into an ascii85-encoded string.
- **`EncodeAscii85Options`** (interface)
  - `export interface EncodeAscii85Options`
  - Options for encodeAscii85.
- **`encodeBase32`** (function)
  - `export function encodeBase32(data: ArrayBuffer \| Uint8Array \| string): string`
  - Converts data into a base32-encoded string.
- **`encodeBase58`** (function)
  - `export function encodeBase58(data: ArrayBuffer \| Uint8Array \| string): string`
  - Converts data into a base58-encoded string.
- **`encodeBase64`** (function)
  - `export function encodeBase64(data: ArrayBuffer \| Uint8Array \| string): string`
  - Converts data into a base64-encoded string.
- **`encodeBase64Url`** (function)
  - `export function encodeBase64Url( data: ArrayBuffer \| Uint8Array \| string, ): string`
  - Convert data into a base64url-encoded string.
- **`encodeHex`** (function)
  - `export function encodeHex(src: string \| Uint8Array \| ArrayBuffer): string`
  - Converts data into a hex-encoded string.
- **`encodeVarint`** (function)
  - `export function encodeVarint( num: bigint \| number, buf: Uint8Array = new Uint8Array(MaxVarintLen64), offset = 0, ): [Uint8Array_, number]`
  - Takes unsigned number num and converts it into a Varint encoded Uint8Array, returning a tuple consisting of a Uint8Array slice of the encoded Varint, and an offset where the Varint encoded bytes end…
- **`HexDecoderStream`** (class)
  - `export class HexDecoderStream<T extends "string" \| "bytes"> extends TransformStream< T extends "bytes" ? Uint8Array_ : string, Uint8Array_ >`
  - Transforms a hexadecimal stream into a Uint8Array<ArrayBuffer> stream.
- **`HexEncoderStream`** (class)
  - `export class HexEncoderStream<T extends "string" \| "bytes"> extends TransformStream< Uint8Array_, T extends "bytes" ? Uint8Array_ : string >`
  - Transforms a Uint8Array<ArrayBuffer> stream into a hexadecimal stream.
- **`MaxUint64`** (const)
  - `export const MaxUint64`
  - The maximum value of an unsigned 64-bit integer. Equivalent to 2n**64n - 1n
- **`MaxVarintLen32`** (const)
  - `export const MaxVarintLen32`
  - The maximum length, in bytes, of a Varint encoded 32-bit integer.
- **`MaxVarintLen64`** (const)
  - `export const MaxVarintLen64`
  - The maximum length, in bytes, of a Varint encoded 64-bit integer.
- **`Uint8Array_`** (re-export)

## `$std/encoding/ascii85`

- **`Ascii85Standard`** (type)
  - `export type Ascii85Standard = "Adobe" \| "btoa" \| "RFC 1924" \| "Z85"`
  - Supported ascii85 standards for EncodeAscii85Options and DecodeAscii85Options.
- **`decodeAscii85`** (function)
  - `export function decodeAscii85( ascii85: string, options: DecodeAscii85Options = {}, ): Uint8Array_`
  - Decodes a ascii85-encoded string.
- **`DecodeAscii85Options`** (type)
  - `export type DecodeAscii85Options = Omit<EncodeAscii85Options, "delimiter">`
  - Options for decodeAscii85.
- **`encodeAscii85`** (function)
  - `export function encodeAscii85( data: ArrayBuffer \| Uint8Array \| string, options: EncodeAscii85Options = {}, ): string`
  - Converts data into an ascii85-encoded string.
- **`EncodeAscii85Options`** (interface)
  - `export interface EncodeAscii85Options`
  - Options for encodeAscii85.
- **`Uint8Array_`** (re-export)

## `$std/encoding/base32`

- **`decodeBase32`** (function)
  - `export function decodeBase32(b32: string): Uint8Array_`
  - Decodes a base32-encoded string.
- **`encodeBase32`** (function)
  - `export function encodeBase32(data: ArrayBuffer \| Uint8Array \| string): string`
  - Converts data into a base32-encoded string.
- **`Uint8Array_`** (re-export)

## `$std/encoding/base32-stream`

> ⚠️ 上游为不稳定模块 `@std/encoding/unstable-base32-stream`，在 $std 中以稳定名字 `encoding/base32-stream` 提供。

- **`Base32DecoderStream`** (class)
  - `export class Base32DecoderStream<T extends "string" \| "bytes"> extends TransformStream< T extends "bytes" ? Uint8Array_ : string, Uint8Array_ >`
  - Transforms a base32 stream into a Uint8Array<ArrayBuffer> stream.
- **`Base32EncoderStream`** (class)
  - `export class Base32EncoderStream<T extends "string" \| "bytes"> extends TransformStream< Uint8Array_, T extends "bytes" ? Uint8Array_ : string >`
  - Transforms a Uint8Array<ArrayBuffer> stream into a base32 stream.
- **`Uint8Array_`** (re-export)

## `$std/encoding/base58`

- **`decodeBase58`** (function)
  - `export function decodeBase58(b58: string): Uint8Array_`
  - Decodes a base58-encoded string.
- **`encodeBase58`** (function)
  - `export function encodeBase58(data: ArrayBuffer \| Uint8Array \| string): string`
  - Converts data into a base58-encoded string.
- **`Uint8Array_`** (re-export)

## `$std/encoding/base64`

- **`decodeBase64`** (function)
  - `export function decodeBase64(b64: string): Uint8Array_`
  - Decodes a base64-encoded string.
- **`encodeBase64`** (function)
  - `export function encodeBase64(data: ArrayBuffer \| Uint8Array \| string): string`
  - Converts data into a base64-encoded string.
- **`Uint8Array_`** (re-export)

## `$std/encoding/base64-stream`

> ⚠️ 上游为不稳定模块 `@std/encoding/unstable-base64-stream`，在 $std 中以稳定名字 `encoding/base64-stream` 提供。

- **`Base64DecoderStream`** (class)
  - `export class Base64DecoderStream<T extends "string" \| "bytes"> extends TransformStream< T extends "bytes" ? Uint8Array_ : string, Uint8Array_ >`
  - Transforms a base64 stream into a Uint8Array<ArrayBuffer> stream.
- **`Base64EncoderStream`** (class)
  - `export class Base64EncoderStream<T extends "string" \| "bytes"> extends TransformStream< Uint8Array_, T extends "bytes" ? Uint8Array_ : string >`
  - Transforms a Uint8Array<ArrayBuffer> stream into a base64 stream.
- **`Uint8Array_`** (re-export)

## `$std/encoding/base64url`

- **`decodeBase64Url`** (function)
  - `export function decodeBase64Url(b64url: string): Uint8Array_`
  - Decodes a given base64url-encoded string.
- **`encodeBase64Url`** (function)
  - `export function encodeBase64Url( data: ArrayBuffer \| Uint8Array \| string, ): string`
  - Convert data into a base64url-encoded string.
- **`Uint8Array_`** (re-export)

## `$std/encoding/hex`

- **`decodeHex`** (function)
  - `export function decodeHex(src: string): Uint8Array_`
  - Decodes the given hex-encoded string. If the input is malformed, an error is thrown.
- **`encodeHex`** (function)
  - `export function encodeHex(src: string \| Uint8Array \| ArrayBuffer): string`
  - Converts data into a hex-encoded string.
- **`Uint8Array_`** (re-export)

## `$std/encoding/hex-stream`

> ⚠️ 上游为不稳定模块 `@std/encoding/unstable-hex-stream`，在 $std 中以稳定名字 `encoding/hex-stream` 提供。

- **`HexDecoderStream`** (class)
  - `export class HexDecoderStream<T extends "string" \| "bytes"> extends TransformStream< T extends "bytes" ? Uint8Array_ : string, Uint8Array_ >`
  - Transforms a hexadecimal stream into a Uint8Array<ArrayBuffer> stream.
- **`HexEncoderStream`** (class)
  - `export class HexEncoderStream<T extends "string" \| "bytes"> extends TransformStream< Uint8Array_, T extends "bytes" ? Uint8Array_ : string >`
  - Transforms a Uint8Array<ArrayBuffer> stream into a hexadecimal stream.
- **`Uint8Array_`** (re-export)

## `$std/encoding/varint`

- **`decodeVarint`** (function)
  - `export function decodeVarint(buf: Uint8Array, offset = 0): [bigint, number]`
  - Given a non empty buf, starting at offset (default: 0), begin decoding bytes as Varint encoded bytes, for a maximum of 10 bytes (offset + 10). The returned tuple is of the decoded varint 32-bit numbe…
- **`decodeVarint32`** (function)
  - `export function decodeVarint32(buf: Uint8Array, offset = 0): [number, number]`
  - Given a buf, starting at offset (default: 0), begin decoding bytes as Varint encoded bytes, for a maximum of 5 bytes (offset + 5). The returned tuple is of the decoded varint 32-bit number, and the n…
- **`encodeVarint`** (function)
  - `export function encodeVarint( num: bigint \| number, buf: Uint8Array = new Uint8Array(MaxVarintLen64), offset = 0, ): [Uint8Array_, number]`
  - Takes unsigned number num and converts it into a Varint encoded Uint8Array, returning a tuple consisting of a Uint8Array slice of the encoded Varint, and an offset where the Varint encoded bytes end…
- **`MaxUint64`** (const)
  - `export const MaxUint64`
  - The maximum value of an unsigned 64-bit integer. Equivalent to 2n**64n - 1n
- **`MaxVarintLen32`** (const)
  - `export const MaxVarintLen32`
  - The maximum length, in bytes, of a Varint encoded 32-bit integer.
- **`MaxVarintLen64`** (const)
  - `export const MaxVarintLen64`
  - The maximum length, in bytes, of a Varint encoded 64-bit integer.
- **`Uint8Array_`** (re-export)
