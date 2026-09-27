# `$std/streams` — @std/streams@1.2.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/streams
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for working with the Streams API.

导入：`import {...} from "$std/streams";`　别名：`jsr:@g9wp/std@^0.1.5/streams`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/streams` | `@std/streams` + `@std/streams/unstable-abort-stream` + `@std/streams/unstable-capped-delimiter-stream` + `@std/streams/unstable-fixed-chunk-stream` + `@std/streams/unstable-to-byte-stream` + `@std/streams/unstable-to-lines` | `streams/mod.ts`, `streams/unstable_abort_stream.ts`, `streams/unstable_capped_delimiter_stream.ts`, `streams/unstable_fixed_chunk_stream.ts`, `streams/unstable_to_byte_stream.ts`, `streams/unstable_to_lines.ts` | 31 |
| `$std/streams/abort-stream` | `@std/streams/unstable-abort-stream` | `streams/unstable_abort_stream.ts` | 1 |
| `$std/streams/batch-stream` | `@std/streams/batch-stream` | `streams/batch_stream.ts` | 1 |
| `$std/streams/buffer` | `@std/streams/buffer` | `streams/buffer.ts` | 2 |
| `$std/streams/byte-slice-stream` | `@std/streams/byte-slice-stream` | `streams/byte_slice_stream.ts` | 1 |
| `$std/streams/capped-delimiter-stream` | `@std/streams/unstable-capped-delimiter-stream` | `streams/unstable_capped_delimiter_stream.ts` | 3 |
| `$std/streams/concat-readable-streams` | `@std/streams/concat-readable-streams` | `streams/concat_readable_streams.ts` | 1 |
| `$std/streams/delimiter-stream` | `@std/streams/delimiter-stream` | `streams/delimiter_stream.ts` | 3 |
| `$std/streams/early-zip-readable-streams` | `@std/streams/early-zip-readable-streams` | `streams/early_zip_readable_streams.ts` | 1 |
| `$std/streams/fixed-chunk-stream` | `@std/streams/unstable-fixed-chunk-stream` | `streams/unstable_fixed_chunk_stream.ts` | 1 |
| `$std/streams/limited-bytes-transform-stream` | `@std/streams/limited-bytes-transform-stream` | `streams/limited_bytes_transform_stream.ts` | 2 |
| `$std/streams/limited-transform-stream` | `@std/streams/limited-transform-stream` | `streams/limited_transform_stream.ts` | 2 |
| `$std/streams/merge-readable-streams` | `@std/streams/merge-readable-streams` | `streams/merge_readable_streams.ts` | 1 |
| `$std/streams/text-delimiter-stream` | `@std/streams/text-delimiter-stream` | `streams/text_delimiter_stream.ts` | 1 |
| `$std/streams/text-line-stream` | `@std/streams/text-line-stream` | `streams/text_line_stream.ts` | 2 |
| `$std/streams/to-array-buffer` | `@std/streams/to-array-buffer` | `streams/to_array_buffer.ts` | 1 |
| `$std/streams/to-blob` | `@std/streams/to-blob` | `streams/to_blob.ts` | 1 |
| `$std/streams/to-byte-stream` | `@std/streams/unstable-to-byte-stream` | `streams/unstable_to_byte_stream.ts` | 1 |
| `$std/streams/to-bytes` | `@std/streams/to-bytes` | `streams/to_bytes.ts` | 1 |
| `$std/streams/to-json` | `@std/streams/to-json` | `streams/to_json.ts` | 1 |
| `$std/streams/to-lines` | `@std/streams/unstable-to-lines` | `streams/unstable_to_lines.ts` | 1 |
| `$std/streams/to-text` | `@std/streams/to-text` | `streams/to_text.ts` | 1 |
| `$std/streams/to-transform-stream` | `@std/streams/to-transform-stream` | `streams/to_transform_stream.ts` | 1 |
| `$std/streams/zip-readable-streams` | `@std/streams/zip-readable-streams` | `streams/zip_readable_streams.ts` | 1 |

## `$std/streams`

31 个导出符号：

- **`AbortStream`** (class) ⚠️已废弃
  - `export class AbortStream<T> extends TransformStream<T, T>`
  - A transform stream that accepts a AbortSignal to easily abort a stream pipeThrough.
- **`BatchStream`** (class)
  - `export class BatchStream<T> extends TransformStream<T, T[]>`
  - A TransformStream that groups input chunks into fixed-size batches. Emits a T[] once size input chunks have been collected and flushes any final non-empty partial batch when the input closes.
- **`Buffer`** (class)
  - `export class Buffer`
  - A variable-sized buffer of bytes with readable and writable getters that allows you to work with Web Streams API.
- **`BufferBytesOptions`** (interface)
  - `export interface BufferBytesOptions`
  - Options for Buffer.bytes.
- **`ByteSliceStream`** (class)
  - `export class ByteSliceStream extends TransformStream<Uint8Array, Uint8Array>`
  - A transform stream that only transforms from the zero-indexed start and end bytes (both inclusive).
- **`CappedDelimiterEntry`** (interface)
  - `export interface CappedDelimiterEntry`
  - Represents an entry in a CappedDelimiterStream.
- **`CappedDelimiterOptions`** (interface)
  - `export interface CappedDelimiterOptions`
  - The options for the CappedDelimiterStream.
- **`CappedDelimiterStream`** (class)
  - `export class CappedDelimiterStream implements TransformStream<Uint8Array, CappedDelimiterEntry>`
  - CappedDelimiterStream is a TransformStream that splits a ReadableStream<Uint8Array> by a provided delimiter, returning CappedDelimiterEntry objects. Each entry's match property indicates whether the…
- **`concatReadableStreams`** (function)
  - `export function concatReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Concatenates multiple ReadableStreams into a single ordered ReadableStream.
- **`DelimiterDisposition`** (type)
  - `export type DelimiterDisposition = \| "suffix" \| "prefix" \| "discard"`
  - Disposition of the delimiter for DelimiterStreamOptions.
- **`DelimiterStream`** (class)
  - `export class DelimiterStream extends TransformStream<Uint8Array, Uint8Array>`
  - Divide a stream into chunks delimited by a given byte sequence.
- **`DelimiterStreamOptions`** (interface)
  - `export interface DelimiterStreamOptions`
  - Options for DelimiterStream.
- **`earlyZipReadableStreams`** (function)
  - `export function earlyZipReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Merge multiple streams into a single one, taking order into account, and each stream will wait for a chunk to enqueue before the next stream can append another chunk.
- **`FixedChunkStream`** (class)
  - `export class FixedChunkStream extends TransformStream<Uint8Array, Uint8Array>`
  - A transform stream that resize Uint8Array chunks into perfectly size chunks with the exception of the last chunk.
- **`LimitedBytesTransformStream`** (class)
  - `export class LimitedBytesTransformStream extends TransformStream<Uint8Array, Uint8Array>`
  - A TransformStream that will only read & enqueue chunks until the total amount of enqueued data exceeds size. The last chunk that would exceed the limit will NOT be enqueued, in which case a RangeErro…
- **`LimitedBytesTransformStreamOptions`** (interface)
  - `export interface LimitedBytesTransformStreamOptions`
  - Options for LimitedBytesTransformStream.
- **`LimitedTransformStream`** (class)
  - `export class LimitedTransformStream<T> extends TransformStream<T, T>`
  - A TransformStream that will only read & enqueue size amount of chunks.
- **`LimitedTransformStreamOptions`** (interface)
  - `export interface LimitedTransformStreamOptions`
  - Options for LimitedTransformStream
- **`mergeReadableStreams`** (function)
  - `export function mergeReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Merge multiple streams into a single one, not taking order into account. If a stream ends before other ones, the other will continue adding data, and the finished one will not add any more data.
- **`TextDelimiterStream`** (class)
  - `export class TextDelimiterStream extends TransformStream<string, string>`
  - Transform a stream string into a stream where each chunk is divided by a given delimiter.
- **`TextLineStream`** (class)
  - `export class TextLineStream extends TransformStream<string, string>`
  - Transform a stream into a stream where each chunk is divided by a newline, be it \n or \r\n. \r can be enabled via the allowCR option.
- **`TextLineStreamOptions`** (interface)
  - `export interface TextLineStreamOptions`
  - Options for TextLineStream.
- **`toArrayBuffer`** (async function)
  - `export async function toArrayBuffer( readableStream: ReadableStream<Uint8Array>, ): Promise<ArrayBuffer>`
  - Converts a ReadableStream of Uint8Arrays to an ArrayBuffer. Works the same as Response.arrayBuffer.
- **`toBlob`** (async function)
  - `export async function toBlob( stream: ReadableStream<Uint8Array>, ): Promise<Blob>`
  - Converts a ReadableStream of Uint8Arrays to a Blob. Works the same as Response.blob.
- **`toBytes`** (function)
  - `export function toBytes( stream: ReadableStream<Uint8Array>, ): Promise<Uint8Array>`
  - Converts a ReadableStream of Uint8Arrays to a Uint8Array. Works the same as Response.bytes.
- **`toByteStream`** (function)
  - `export function toByteStream( readable: ReadableStream<Uint8Array>, ): ReadableStream<Uint8Array>`
  - The function takes a ReadableStream<Uint8Array> and wraps it in a BYOB stream if it doesn't already support it.
- **`toJson`** (function)
  - `export function toJson( stream: ReadableStream<string> \| ReadableStream<Uint8Array>, ): Promise<unknown>`
  - Converts a https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON-formatted ReadableSteam of strings or Uint8Arrays to an object. Works the same as Response.json and Re…
- **`toLines`** (function)
  - `export function toLines( readable: ReadableStream<Uint8Array>, options?: StreamPipeOptions, ): ReadableStream<string>`
  - Converts a ReadableStream of Uint8Arrays into one of lines delimited by \n or \r\n. Trims the last line if empty.
- **`toText`** (async function)
  - `export async function toText( stream: ReadableStream<string> \| ReadableStream<Uint8Array>, ): Promise<string>`
  - Converts a ReadableSteam of strings or Uint8Arrays to a single string. Works the same as Response.text and Request.text, but also extends to support streams of strings.
- **`toTransformStream`** (function)
  - `export function toTransformStream<I, O>( transformer: (src: ReadableStream<I>) => Iterable<O> \| AsyncIterable<O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>, ): TransformStream<I, O>`
  - Convert the generator function into a TransformStream.
- **`zipReadableStreams`** (function)
  - `export function zipReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Merge multiple streams into a single one, taking order into account, and each stream will wait for a chunk to enqueue before the next stream can append another chunk.

## `$std/streams/abort-stream`

> ⚠️ 上游为不稳定模块 `@std/streams/unstable-abort-stream`，在 $std 中以稳定名字 `streams/abort-stream` 提供。

- **`AbortStream`** (class) ⚠️已废弃
  - `export class AbortStream<T> extends TransformStream<T, T>`
  - A transform stream that accepts a AbortSignal to easily abort a stream pipeThrough.

## `$std/streams/batch-stream`

- **`BatchStream`** (class)
  - `export class BatchStream<T> extends TransformStream<T, T[]>`
  - A TransformStream that groups input chunks into fixed-size batches. Emits a T[] once size input chunks have been collected and flushes any final non-empty partial batch when the input closes.

## `$std/streams/buffer`

- **`Buffer`** (class)
  - `export class Buffer`
  - A variable-sized buffer of bytes with readable and writable getters that allows you to work with Web Streams API.
- **`BufferBytesOptions`** (interface)
  - `export interface BufferBytesOptions`
  - Options for Buffer.bytes.

## `$std/streams/byte-slice-stream`

- **`ByteSliceStream`** (class)
  - `export class ByteSliceStream extends TransformStream<Uint8Array, Uint8Array>`
  - A transform stream that only transforms from the zero-indexed start and end bytes (both inclusive).

## `$std/streams/capped-delimiter-stream`

> ⚠️ 上游为不稳定模块 `@std/streams/unstable-capped-delimiter-stream`，在 $std 中以稳定名字 `streams/capped-delimiter-stream` 提供。

- **`CappedDelimiterEntry`** (interface)
  - `export interface CappedDelimiterEntry`
  - Represents an entry in a CappedDelimiterStream.
- **`CappedDelimiterOptions`** (interface)
  - `export interface CappedDelimiterOptions`
  - The options for the CappedDelimiterStream.
- **`CappedDelimiterStream`** (class)
  - `export class CappedDelimiterStream implements TransformStream<Uint8Array, CappedDelimiterEntry>`
  - CappedDelimiterStream is a TransformStream that splits a ReadableStream<Uint8Array> by a provided delimiter, returning CappedDelimiterEntry objects. Each entry's match property indicates whether the…

## `$std/streams/concat-readable-streams`

- **`concatReadableStreams`** (function)
  - `export function concatReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Concatenates multiple ReadableStreams into a single ordered ReadableStream.

## `$std/streams/delimiter-stream`

- **`DelimiterDisposition`** (type)
  - `export type DelimiterDisposition = \| "suffix" \| "prefix" \| "discard"`
  - Disposition of the delimiter for DelimiterStreamOptions.
- **`DelimiterStream`** (class)
  - `export class DelimiterStream extends TransformStream<Uint8Array, Uint8Array>`
  - Divide a stream into chunks delimited by a given byte sequence.
- **`DelimiterStreamOptions`** (interface)
  - `export interface DelimiterStreamOptions`
  - Options for DelimiterStream.

## `$std/streams/early-zip-readable-streams`

- **`earlyZipReadableStreams`** (function)
  - `export function earlyZipReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Merge multiple streams into a single one, taking order into account, and each stream will wait for a chunk to enqueue before the next stream can append another chunk.

## `$std/streams/fixed-chunk-stream`

> ⚠️ 上游为不稳定模块 `@std/streams/unstable-fixed-chunk-stream`，在 $std 中以稳定名字 `streams/fixed-chunk-stream` 提供。

- **`FixedChunkStream`** (class)
  - `export class FixedChunkStream extends TransformStream<Uint8Array, Uint8Array>`
  - A transform stream that resize Uint8Array chunks into perfectly size chunks with the exception of the last chunk.

## `$std/streams/limited-bytes-transform-stream`

- **`LimitedBytesTransformStream`** (class)
  - `export class LimitedBytesTransformStream extends TransformStream<Uint8Array, Uint8Array>`
  - A TransformStream that will only read & enqueue chunks until the total amount of enqueued data exceeds size. The last chunk that would exceed the limit will NOT be enqueued, in which case a RangeErro…
- **`LimitedBytesTransformStreamOptions`** (interface)
  - `export interface LimitedBytesTransformStreamOptions`
  - Options for LimitedBytesTransformStream.

## `$std/streams/limited-transform-stream`

- **`LimitedTransformStream`** (class)
  - `export class LimitedTransformStream<T> extends TransformStream<T, T>`
  - A TransformStream that will only read & enqueue size amount of chunks.
- **`LimitedTransformStreamOptions`** (interface)
  - `export interface LimitedTransformStreamOptions`
  - Options for LimitedTransformStream

## `$std/streams/merge-readable-streams`

- **`mergeReadableStreams`** (function)
  - `export function mergeReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Merge multiple streams into a single one, not taking order into account. If a stream ends before other ones, the other will continue adding data, and the finished one will not add any more data.

## `$std/streams/text-delimiter-stream`

- **`TextDelimiterStream`** (class)
  - `export class TextDelimiterStream extends TransformStream<string, string>`
  - Transform a stream string into a stream where each chunk is divided by a given delimiter.

## `$std/streams/text-line-stream`

- **`TextLineStream`** (class)
  - `export class TextLineStream extends TransformStream<string, string>`
  - Transform a stream into a stream where each chunk is divided by a newline, be it \n or \r\n. \r can be enabled via the allowCR option.
- **`TextLineStreamOptions`** (interface)
  - `export interface TextLineStreamOptions`
  - Options for TextLineStream.

## `$std/streams/to-array-buffer`

- **`toArrayBuffer`** (async function)
  - `export async function toArrayBuffer( readableStream: ReadableStream<Uint8Array>, ): Promise<ArrayBuffer>`
  - Converts a ReadableStream of Uint8Arrays to an ArrayBuffer. Works the same as Response.arrayBuffer.

## `$std/streams/to-blob`

- **`toBlob`** (async function)
  - `export async function toBlob( stream: ReadableStream<Uint8Array>, ): Promise<Blob>`
  - Converts a ReadableStream of Uint8Arrays to a Blob. Works the same as Response.blob.

## `$std/streams/to-byte-stream`

> ⚠️ 上游为不稳定模块 `@std/streams/unstable-to-byte-stream`，在 $std 中以稳定名字 `streams/to-byte-stream` 提供。

- **`toByteStream`** (function)
  - `export function toByteStream( readable: ReadableStream<Uint8Array>, ): ReadableStream<Uint8Array>`
  - The function takes a ReadableStream<Uint8Array> and wraps it in a BYOB stream if it doesn't already support it.

## `$std/streams/to-bytes`

- **`toBytes`** (function)
  - `export function toBytes( stream: ReadableStream<Uint8Array>, ): Promise<Uint8Array>`
  - Converts a ReadableStream of Uint8Arrays to a Uint8Array. Works the same as Response.bytes.

## `$std/streams/to-json`

- **`toJson`** (function)
  - `export function toJson( stream: ReadableStream<string> \| ReadableStream<Uint8Array>, ): Promise<unknown>`
  - Converts a https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON-formatted ReadableSteam of strings or Uint8Arrays to an object. Works the same as Response.json and Re…

## `$std/streams/to-lines`

> ⚠️ 上游为不稳定模块 `@std/streams/unstable-to-lines`，在 $std 中以稳定名字 `streams/to-lines` 提供。

- **`toLines`** (function)
  - `export function toLines( readable: ReadableStream<Uint8Array>, options?: StreamPipeOptions, ): ReadableStream<string>`
  - Converts a ReadableStream of Uint8Arrays into one of lines delimited by \n or \r\n. Trims the last line if empty.

## `$std/streams/to-text`

- **`toText`** (async function)
  - `export async function toText( stream: ReadableStream<string> \| ReadableStream<Uint8Array>, ): Promise<string>`
  - Converts a ReadableSteam of strings or Uint8Arrays to a single string. Works the same as Response.text and Request.text, but also extends to support streams of strings.

## `$std/streams/to-transform-stream`

- **`toTransformStream`** (function)
  - `export function toTransformStream<I, O>( transformer: (src: ReadableStream<I>) => Iterable<O> \| AsyncIterable<O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>, ): TransformStream<I, O>`
  - Convert the generator function into a TransformStream.

## `$std/streams/zip-readable-streams`

- **`zipReadableStreams`** (function)
  - `export function zipReadableStreams<T>( ...streams: ReadableStream<T>[] ): ReadableStream<T>`
  - Merge multiple streams into a single one, taking order into account, and each stream will wait for a chunk to enqueue before the next stream can append another chunk.
