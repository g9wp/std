# `$std/io` — @std/io@0.225.3

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/io
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for working with Deno's readers, writers, and web streams.

导入：`import {...} from "$std/io";`　别名：`jsr:@g9wp/std@^0.1.5/io`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/io` | `@std/io` | `io/mod.ts` | 23 |
| `$std/io/buffer` | `@std/io/buffer` | `io/buffer.ts` | 1 |
| `$std/io/copy` | `@std/io/copy` | `io/copy.ts` | 1 |
| `$std/io/iterate-reader` | `@std/io/iterate-reader` | `io/iterate_reader.ts` | 4 |
| `$std/io/read-all` | `@std/io/read-all` | `io/read_all.ts` | 2 |
| `$std/io/reader-from-stream-reader` | `@std/io/reader-from-stream-reader` | `io/reader_from_stream_reader.ts` | 1 |
| `$std/io/to-readable-stream` | `@std/io/to-readable-stream` | `io/to_readable_stream.ts` | 2 |
| `$std/io/to-writable-stream` | `@std/io/to-writable-stream` | `io/to_writable_stream.ts` | 2 |
| `$std/io/types` | `@std/io/types` | `io/types.ts` | 8 |
| `$std/io/write-all` | `@std/io/write-all` | `io/write_all.ts` | 4 |

## `$std/io`

23 个导出符号：

- **`Buffer`** (class)
  - `export class Buffer implements Writer, WriterSync, Reader, ReaderSync`
  - A variable-sized buffer of bytes with read() and write() methods.
- **`Closer`** (interface)
  - `export interface Closer`
  - An abstract interface which when implemented provides an interface to close files/resources that were previously opened.
- **`copy`** (async function)
  - `export async function copy( src: Reader, dst: Writer, options?: { bufSize?: number; }, ): Promise<number>`
  - Copies from src to dst until either EOF (null) is read from src or an error occurs. It resolves to the number of bytes copied or rejects with the first error encountered while copying.
- **`iterateReader`** (async generator)
  - `export async function* iterateReader( reader: Reader, options?: { bufSize?: number; }, ): AsyncIterableIterator<Uint8Array>`
  - Turns a Reader into an async iterator.
- **`iterateReaderSync`** (generator)
  - `export function* iterateReaderSync( reader: ReaderSync, options?: { bufSize?: number; }, ): IterableIterator<Uint8Array>`
  - Turns a ReaderSync into an iterator.
- **`readAll`** (async function)
  - `export async function readAll(reader: Reader): Promise<Uint8Array>`
  - Read Reader r until EOF (null) and resolve to the content as Uint8Array.
- **`readAllSync`** (function)
  - `export function readAllSync(reader: ReaderSync): Uint8Array`
  - Synchronously reads ReaderSync r until EOF (null) and returns the content as Uint8Array.
- **`Reader`** (re-export)
- **`Reader`** (interface)
  - `export interface Reader`
  - An abstract interface which when implemented provides an interface to read bytes into an array buffer asynchronously.
- **`readerFromStreamReader`** (function)
  - `export function readerFromStreamReader( streamReader: ReadableStreamDefaultReader<Uint8Array>, ): Reader`
  - Create a Reader from a ReadableStreamDefaultReader.
- **`ReaderSync`** (re-export)
- **`ReaderSync`** (interface)
  - `export interface ReaderSync`
  - An abstract interface which when implemented provides an interface to read bytes into an array buffer synchronously.
- **`Seeker`** (interface)
  - `export interface Seeker`
  - An abstract interface which when implemented provides an interface to seek within an open file/resource asynchronously.
- **`SeekerSync`** (interface)
  - `export interface SeekerSync`
  - An abstract interface which when implemented provides an interface to seek within an open file/resource synchronously.
- **`SeekMode`** (enum)
  - `export enum SeekMode`
  - A enum which defines the seek mode for IO related APIs that support seeking.
- **`toReadableStream`** (function)
  - `export function toReadableStream( reader: Reader \| (Reader & Closer), options?: ToReadableStreamOptions, ): ReadableStream<Uint8Array>`
  - Create a ReadableStream of Uint8Arrays from a Reader.
- **`ToReadableStreamOptions`** (interface)
  - `export interface ToReadableStreamOptions`
  - Options for toReadableStream.
- **`toWritableStream`** (function)
  - `export function toWritableStream( writer: Writer, options?: toWritableStreamOptions, ): WritableStream<Uint8Array>`
  - Create a WritableStream from a Writer.
- **`toWritableStreamOptions`** (interface)
  - `export interface toWritableStreamOptions`
  - Options for toWritableStream.
- **`writeAll`** (async function)
  - `export async function writeAll(writer: Writer, data: Uint8Array)`
  - Write all the content of the array buffer (arr) to the writer (w).
- **`writeAllSync`** (function)
  - `export function writeAllSync(writer: WriterSync, data: Uint8Array)`
  - Synchronously write all the content of the array buffer (arr) to the writer (w).
- **`Writer`** (interface)
  - `export interface Writer`
  - An abstract interface which when implemented provides an interface to write bytes from an array buffer to a file/resource asynchronously.
- **`WriterSync`** (interface)
  - `export interface WriterSync`
  - An abstract interface which when implemented provides an interface to write bytes from an array buffer to a file/resource synchronously.

## `$std/io/buffer`

- **`Buffer`** (class)
  - `export class Buffer implements Writer, WriterSync, Reader, ReaderSync`
  - A variable-sized buffer of bytes with read() and write() methods.

## `$std/io/copy`

- **`copy`** (async function)
  - `export async function copy( src: Reader, dst: Writer, options?: { bufSize?: number; }, ): Promise<number>`
  - Copies from src to dst until either EOF (null) is read from src or an error occurs. It resolves to the number of bytes copied or rejects with the first error encountered while copying.

## `$std/io/iterate-reader`

- **`iterateReader`** (async generator)
  - `export async function* iterateReader( reader: Reader, options?: { bufSize?: number; }, ): AsyncIterableIterator<Uint8Array>`
  - Turns a Reader into an async iterator.
- **`iterateReaderSync`** (generator)
  - `export function* iterateReaderSync( reader: ReaderSync, options?: { bufSize?: number; }, ): IterableIterator<Uint8Array>`
  - Turns a ReaderSync into an iterator.
- **`Reader`** (re-export)
- **`ReaderSync`** (re-export)

## `$std/io/read-all`

- **`readAll`** (async function)
  - `export async function readAll(reader: Reader): Promise<Uint8Array>`
  - Read Reader r until EOF (null) and resolve to the content as Uint8Array.
- **`readAllSync`** (function)
  - `export function readAllSync(reader: ReaderSync): Uint8Array`
  - Synchronously reads ReaderSync r until EOF (null) and returns the content as Uint8Array.

## `$std/io/reader-from-stream-reader`

- **`readerFromStreamReader`** (function)
  - `export function readerFromStreamReader( streamReader: ReadableStreamDefaultReader<Uint8Array>, ): Reader`
  - Create a Reader from a ReadableStreamDefaultReader.

## `$std/io/to-readable-stream`

- **`toReadableStream`** (function)
  - `export function toReadableStream( reader: Reader \| (Reader & Closer), options?: ToReadableStreamOptions, ): ReadableStream<Uint8Array>`
  - Create a ReadableStream of Uint8Arrays from a Reader.
- **`ToReadableStreamOptions`** (interface)
  - `export interface ToReadableStreamOptions`
  - Options for toReadableStream.

## `$std/io/to-writable-stream`

- **`toWritableStream`** (function)
  - `export function toWritableStream( writer: Writer, options?: toWritableStreamOptions, ): WritableStream<Uint8Array>`
  - Create a WritableStream from a Writer.
- **`toWritableStreamOptions`** (interface)
  - `export interface toWritableStreamOptions`
  - Options for toWritableStream.

## `$std/io/types`

- **`Closer`** (interface)
  - `export interface Closer`
  - An abstract interface which when implemented provides an interface to close files/resources that were previously opened.
- **`Reader`** (interface)
  - `export interface Reader`
  - An abstract interface which when implemented provides an interface to read bytes into an array buffer asynchronously.
- **`ReaderSync`** (interface)
  - `export interface ReaderSync`
  - An abstract interface which when implemented provides an interface to read bytes into an array buffer synchronously.
- **`Seeker`** (interface)
  - `export interface Seeker`
  - An abstract interface which when implemented provides an interface to seek within an open file/resource asynchronously.
- **`SeekerSync`** (interface)
  - `export interface SeekerSync`
  - An abstract interface which when implemented provides an interface to seek within an open file/resource synchronously.
- **`SeekMode`** (enum)
  - `export enum SeekMode`
  - A enum which defines the seek mode for IO related APIs that support seeking.
- **`Writer`** (interface)
  - `export interface Writer`
  - An abstract interface which when implemented provides an interface to write bytes from an array buffer to a file/resource asynchronously.
- **`WriterSync`** (interface)
  - `export interface WriterSync`
  - An abstract interface which when implemented provides an interface to write bytes from an array buffer to a file/resource synchronously.

## `$std/io/write-all`

- **`writeAll`** (async function)
  - `export async function writeAll(writer: Writer, data: Uint8Array)`
  - Write all the content of the array buffer (arr) to the writer (w).
- **`writeAllSync`** (function)
  - `export function writeAllSync(writer: WriterSync, data: Uint8Array)`
  - Synchronously write all the content of the array buffer (arr) to the writer (w).
- **`Writer`** (interface)
  - `export interface Writer`
  - An abstract interface which when implemented provides an interface to write bytes from an array buffer to a file/resource asynchronously.
- **`WriterSync`** (interface)
  - `export interface WriterSync`
  - An abstract interface which when implemented provides an interface to write bytes from an array buffer to a file/resource synchronously.
