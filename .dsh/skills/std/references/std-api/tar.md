# `$std/tar` — @std/tar@0.1.10

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/tar
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Streaming utilities for working with tar archives.

导入：`import {...} from "$std/tar";`　别名：`jsr:@g9wp/std@^0.1.5/tar`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/tar` | `@std/tar` | `tar/mod.ts` | 14 |
| `$std/tar/tar-stream` | `@std/tar/tar-stream` | `tar/tar_stream.ts` | 10 |
| `$std/tar/untar-stream` | `@std/tar/untar-stream` | `tar/untar_stream.ts` | 4 |

## `$std/tar`

14 个导出符号：

- **`assertValidLinkname`** (function)
  - `export function assertValidLinkname(linkname: string): void`
  - Asserts that the linkname provided is valid for a TarStream.
- **`assertValidPath`** (function)
  - `export function assertValidPath(path: string): void`
  - Asserts that the path provided is valid for a TarStream.
- **`assertValidTarStreamOptions`** (function)
  - `export function assertValidTarStreamOptions(options: TarStreamOptions): void`
  - Asserts that the options provided are valid for a TarStream.
- **`OldStyleFormat`** (interface)
  - `export interface OldStyleFormat`
  - The original tar archive header format.
- **`PosixUstarFormat`** (interface)
  - `export interface PosixUstarFormat`
  - The POSIX ustar archive header format.
- **`TarStream`** (class)
  - `export class TarStream implements TransformStream<TarStreamInput, Uint8Array_>`
  - ### Overview A TransformStream to create a tar archive. Tar archives allow for storing multiple files in a single file (called an archive, or sometimes a tarball). These archives typically have a sin…
- **`TarStreamDir`** (interface)
  - `export interface TarStreamDir`
  - The interface required to provide a directory.
- **`TarStreamEntry`** (interface)
  - `export interface TarStreamEntry`
  - The structure of an entry extracted from a Tar archive.
- **`TarStreamFile`** (interface)
  - `export interface TarStreamFile`
  - The interface required to provide a file.
- **`TarStreamInput`** (type)
  - `export type TarStreamInput = TarStreamFile \| TarStreamDir \| TarStreamSymlink`
  - A union type merging all the TarStream interfaces that can be piped into the TarStream class.
- **`TarStreamOptions`** (interface)
  - `export interface TarStreamOptions`
  - The options that can go along with a file or directory.
- **`TarStreamSymlink`** (interface)
  - `export interface TarStreamSymlink`
  - The interface required to provide a symbolic link.
- **`Uint8Array_`** (re-export)
- **`UntarStream`** (class)
  - `export class UntarStream implements TransformStream<Uint8Array, TarStreamEntry>`
  - ### Overview A TransformStream to expand a tar archive. Tar archives allow for storing multiple files in a single file (called an archive, or sometimes a tarball).

## `$std/tar/tar-stream`

- **`assertValidLinkname`** (function)
  - `export function assertValidLinkname(linkname: string): void`
  - Asserts that the linkname provided is valid for a TarStream.
- **`assertValidPath`** (function)
  - `export function assertValidPath(path: string): void`
  - Asserts that the path provided is valid for a TarStream.
- **`assertValidTarStreamOptions`** (function)
  - `export function assertValidTarStreamOptions(options: TarStreamOptions): void`
  - Asserts that the options provided are valid for a TarStream.
- **`TarStream`** (class)
  - `export class TarStream implements TransformStream<TarStreamInput, Uint8Array_>`
  - ### Overview A TransformStream to create a tar archive. Tar archives allow for storing multiple files in a single file (called an archive, or sometimes a tarball). These archives typically have a sin…
- **`TarStreamDir`** (interface)
  - `export interface TarStreamDir`
  - The interface required to provide a directory.
- **`TarStreamFile`** (interface)
  - `export interface TarStreamFile`
  - The interface required to provide a file.
- **`TarStreamInput`** (type)
  - `export type TarStreamInput = TarStreamFile \| TarStreamDir \| TarStreamSymlink`
  - A union type merging all the TarStream interfaces that can be piped into the TarStream class.
- **`TarStreamOptions`** (interface)
  - `export interface TarStreamOptions`
  - The options that can go along with a file or directory.
- **`TarStreamSymlink`** (interface)
  - `export interface TarStreamSymlink`
  - The interface required to provide a symbolic link.
- **`Uint8Array_`** (re-export)

## `$std/tar/untar-stream`

- **`OldStyleFormat`** (interface)
  - `export interface OldStyleFormat`
  - The original tar archive header format.
- **`PosixUstarFormat`** (interface)
  - `export interface PosixUstarFormat`
  - The POSIX ustar archive header format.
- **`TarStreamEntry`** (interface)
  - `export interface TarStreamEntry`
  - The structure of an entry extracted from a Tar archive.
- **`UntarStream`** (class)
  - `export class UntarStream implements TransformStream<Uint8Array, TarStreamEntry>`
  - ### Overview A TransformStream to expand a tar archive. Tar archives allow for storing multiple files in a single file (called an archive, or sometimes a tarball).
