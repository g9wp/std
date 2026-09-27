# `$std/cbor` — @std/cbor@0.1.10

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/cbor
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Concise Binary Object Representation (CBOR) is a binary data serialization format optimized for compactness and efficiency. It is designed to encode a wide range of data types, including integers, st…

导入：`import {...} from "$std/cbor";`　别名：`jsr:@g9wp/std@^0.1.5/cbor`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/cbor` | `@std/cbor` | `cbor/mod.ts` | 17 |
| `$std/cbor/array-encoder-stream` | `@std/cbor/array-encoder-stream` | `cbor/array_encoder_stream.ts` | 1 |
| `$std/cbor/byte-encoder-stream` | `@std/cbor/byte-encoder-stream` | `cbor/byte_encoder_stream.ts` | 1 |
| `$std/cbor/decode-cbor` | `@std/cbor/decode-cbor` | `cbor/decode_cbor.ts` | 1 |
| `$std/cbor/decode-cbor-sequence` | `@std/cbor/decode-cbor-sequence` | `cbor/decode_cbor_sequence.ts` | 1 |
| `$std/cbor/encode-cbor` | `@std/cbor/encode-cbor` | `cbor/encode_cbor.ts` | 1 |
| `$std/cbor/encode-cbor-sequence` | `@std/cbor/encode-cbor-sequence` | `cbor/encode_cbor_sequence.ts` | 1 |
| `$std/cbor/map-encoder-stream` | `@std/cbor/map-encoder-stream` | `cbor/map_encoder_stream.ts` | 1 |
| `$std/cbor/sequence-decoder-stream` | `@std/cbor/sequence-decoder-stream` | `cbor/sequence_decoder_stream.ts` | 1 |
| `$std/cbor/sequence-encoder-stream` | `@std/cbor/sequence-encoder-stream` | `cbor/sequence_encoder_stream.ts` | 1 |
| `$std/cbor/tag` | `@std/cbor/tag` | `cbor/tag.ts` | 1 |
| `$std/cbor/text-encoder-stream` | `@std/cbor/text-encoder-stream` | `cbor/text_encoder_stream.ts` | 1 |
| `$std/cbor/types` | `@std/cbor/types` | `cbor/types.ts` | 6 |

## `$std/cbor`

17 个导出符号：

- **`CborArrayEncoderStream`** (class)
  - `export class CborArrayEncoderStream implements TransformStream<CborStreamInput, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<CborStreamInput> into CBOR "Indefinite Length Array". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rf…
- **`CborByteEncoderStream`** (class)
  - `export class CborByteEncoderStream implements TransformStream<Uint8Array, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<Uint8Array> into CBOR "Indefinite Length Byte String". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/r…
- **`CborMapEncoderStream`** (class)
  - `export class CborMapEncoderStream implements TransformStream<CborMapStreamInput, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<CborMapStreamInput> into CBOR "Indefinite Length Map". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/r…
- **`CborMapStreamInput`** (type)
  - `export type CborMapStreamInput = [string, CborStreamInput]`
  - Specifies the structure of input for the CborMapEncoderStream.
- **`CborMapStreamOutput`** (type)
  - `export type CborMapStreamOutput = [string, CborStreamOutput]`
  - Specifies the structure of the output for the CborMapDecodedStream.
- **`CborPrimitiveType`** (type)
  - `export type CborPrimitiveType = \| undefined \| null \| boolean \| number \| bigint \| string \| Uint8Array \| Date`
  - This type specifies the primitive types that the implementation can encode/decode into/from.
- **`CborSequenceDecoderStream`** (class)
  - `export class CborSequenceDecoderStream implements TransformStream<Uint8Array, CborStreamOutput>`
  - A TransformStream that decodes a CBOR-sequence-encoded ReadableStream<Uint8Array> into the JavaScript equivalent values represented as ReadableStream<CborStreamOutput>. [RFC 8949 - Concise Binary Obj…
- **`CborSequenceEncoderStream`** (class)
  - `export class CborSequenceEncoderStream implements TransformStream<CborStreamInput, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<CborStreamInput> into CBOR format sequence. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc8949)
- **`CborStreamInput`** (type)
  - `export type CborStreamInput = \| CborPrimitiveType \| CborTag<CborStreamInput> \| CborStreamInput[] \| … }`
  - Specifies the encodable value types for the CborSequenceEncoderStream and CborArrayEncoderStream.
- **`CborStreamOutput`** (type)
  - `export type CborStreamOutput = \| CborPrimitiveType \| CborTag<CborStreamOutput> \| CborByteDecodedStream \| CborTextDecodedStream \| CborArrayDecodedStream \| CborMapDecodedStream`
  - Specifies the decodable value types for the CborSequenceDecoderStream and CborMapDecodedStream.
- **`CborTag`** (class)
  - `export class CborTag<T extends CborType \| CborStreamInput \| CborStreamOutput>`
  - Represents a CBOR tag, which pairs a tag number with content, used to convey additional semantic information in CBOR-encoded data. [CBOR Tags](https://www.iana.org/assignments/cbor-tags/cbor-tags.xht…
- **`CborTextEncoderStream`** (class)
  - `export class CborTextEncoderStream implements TransformStream<string, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<string> into CBOR "Indefinite Length Text String". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc89…
- **`CborType`** (type)
  - `export type CborType = \| CborPrimitiveType \| CborTag<CborType> \| Map<CborType, CborType> \| CborType[] \| … }`
  - This type specifies the encodable and decodable values for encodeCbor, decodeCbor, encodeCborSequence, and decodeCborSequence.
- **`decodeCbor`** (function)
  - `export function decodeCbor(input: Uint8Array): CborType`
  - Decodes a CBOR-encoded Uint8Array into the JavaScript equivalent values represented as a CborType. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc89…
- **`decodeCborSequence`** (function)
  - `export function decodeCborSequence(input: Uint8Array): CborType[]`
  - Decodes a CBOR-sequence-encoded Uint8Array into the JavaScript equivalent values represented as a CBorType array. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org…
- **`encodeCbor`** (function)
  - `export function encodeCbor(value: CborType): Uint8Array`
  - Encodes a CborType value into a CBOR format represented as a Uint8Array. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc8949)
- **`encodeCborSequence`** (function)
  - `export function encodeCborSequence(values: CborType[]): Uint8Array`
  - Encodes an array of CborType values into a CBOR format sequence represented as a Uint8Array. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc8949)

## `$std/cbor/array-encoder-stream`

- **`CborArrayEncoderStream`** (class)
  - `export class CborArrayEncoderStream implements TransformStream<CborStreamInput, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<CborStreamInput> into CBOR "Indefinite Length Array". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rf…

## `$std/cbor/byte-encoder-stream`

- **`CborByteEncoderStream`** (class)
  - `export class CborByteEncoderStream implements TransformStream<Uint8Array, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<Uint8Array> into CBOR "Indefinite Length Byte String". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/r…

## `$std/cbor/decode-cbor`

- **`decodeCbor`** (function)
  - `export function decodeCbor(input: Uint8Array): CborType`
  - Decodes a CBOR-encoded Uint8Array into the JavaScript equivalent values represented as a CborType. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc89…

## `$std/cbor/decode-cbor-sequence`

- **`decodeCborSequence`** (function)
  - `export function decodeCborSequence(input: Uint8Array): CborType[]`
  - Decodes a CBOR-sequence-encoded Uint8Array into the JavaScript equivalent values represented as a CBorType array. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org…

## `$std/cbor/encode-cbor`

- **`encodeCbor`** (function)
  - `export function encodeCbor(value: CborType): Uint8Array`
  - Encodes a CborType value into a CBOR format represented as a Uint8Array. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc8949)

## `$std/cbor/encode-cbor-sequence`

- **`encodeCborSequence`** (function)
  - `export function encodeCborSequence(values: CborType[]): Uint8Array`
  - Encodes an array of CborType values into a CBOR format sequence represented as a Uint8Array. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc8949)

## `$std/cbor/map-encoder-stream`

- **`CborMapEncoderStream`** (class)
  - `export class CborMapEncoderStream implements TransformStream<CborMapStreamInput, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<CborMapStreamInput> into CBOR "Indefinite Length Map". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/r…

## `$std/cbor/sequence-decoder-stream`

- **`CborSequenceDecoderStream`** (class)
  - `export class CborSequenceDecoderStream implements TransformStream<Uint8Array, CborStreamOutput>`
  - A TransformStream that decodes a CBOR-sequence-encoded ReadableStream<Uint8Array> into the JavaScript equivalent values represented as ReadableStream<CborStreamOutput>. [RFC 8949 - Concise Binary Obj…

## `$std/cbor/sequence-encoder-stream`

- **`CborSequenceEncoderStream`** (class)
  - `export class CborSequenceEncoderStream implements TransformStream<CborStreamInput, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<CborStreamInput> into CBOR format sequence. [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc8949)

## `$std/cbor/tag`

- **`CborTag`** (class)
  - `export class CborTag<T extends CborType \| CborStreamInput \| CborStreamOutput>`
  - Represents a CBOR tag, which pairs a tag number with content, used to convey additional semantic information in CBOR-encoded data. [CBOR Tags](https://www.iana.org/assignments/cbor-tags/cbor-tags.xht…

## `$std/cbor/text-encoder-stream`

- **`CborTextEncoderStream`** (class)
  - `export class CborTextEncoderStream implements TransformStream<string, Uint8Array>`
  - A TransformStream that encodes a ReadableStream<string> into CBOR "Indefinite Length Text String". [RFC 8949 - Concise Binary Object Representation (CBOR)](https://datatracker.ietf.org/doc/html/rfc89…

## `$std/cbor/types`

- **`CborMapStreamInput`** (type)
  - `export type CborMapStreamInput = [string, CborStreamInput]`
  - Specifies the structure of input for the CborMapEncoderStream.
- **`CborMapStreamOutput`** (type)
  - `export type CborMapStreamOutput = [string, CborStreamOutput]`
  - Specifies the structure of the output for the CborMapDecodedStream.
- **`CborPrimitiveType`** (type)
  - `export type CborPrimitiveType = \| undefined \| null \| boolean \| number \| bigint \| string \| Uint8Array \| Date`
  - This type specifies the primitive types that the implementation can encode/decode into/from.
- **`CborStreamInput`** (type)
  - `export type CborStreamInput = \| CborPrimitiveType \| CborTag<CborStreamInput> \| CborStreamInput[] \| … }`
  - Specifies the encodable value types for the CborSequenceEncoderStream and CborArrayEncoderStream.
- **`CborStreamOutput`** (type)
  - `export type CborStreamOutput = \| CborPrimitiveType \| CborTag<CborStreamOutput> \| CborByteDecodedStream \| CborTextDecodedStream \| CborArrayDecodedStream \| CborMapDecodedStream`
  - Specifies the decodable value types for the CborSequenceDecoderStream and CborMapDecodedStream.
- **`CborType`** (type)
  - `export type CborType = \| CborPrimitiveType \| CborTag<CborType> \| Map<CborType, CborType> \| CborType[] \| … }`
  - This type specifies the encodable and decodable values for encodeCbor, decodeCbor, encodeCborSequence, and decodeCborSequence.
