# `$std/bytes` — @std/bytes@1.0.6

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/bytes
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Helper functions for working with Uint8Array byte slices.

导入：`import {...} from "$std/bytes";`　别名：`jsr:@g9wp/std@^0.1.5/bytes`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/bytes` | `@std/bytes` | `bytes/mod.ts` | 10 |
| `$std/bytes/concat` | `@std/bytes/concat` | `bytes/concat.ts` | 2 |
| `$std/bytes/copy` | `@std/bytes/copy` | `bytes/copy.ts` | 1 |
| `$std/bytes/ends-with` | `@std/bytes/ends-with` | `bytes/ends_with.ts` | 1 |
| `$std/bytes/equals` | `@std/bytes/equals` | `bytes/equals.ts` | 1 |
| `$std/bytes/includes-needle` | `@std/bytes/includes-needle` | `bytes/includes_needle.ts` | 1 |
| `$std/bytes/index-of-needle` | `@std/bytes/index-of-needle` | `bytes/index_of_needle.ts` | 1 |
| `$std/bytes/last-index-of-needle` | `@std/bytes/last-index-of-needle` | `bytes/last_index_of_needle.ts` | 1 |
| `$std/bytes/repeat` | `@std/bytes/repeat` | `bytes/repeat.ts` | 2 |
| `$std/bytes/starts-with` | `@std/bytes/starts-with` | `bytes/starts_with.ts` | 1 |

## `$std/bytes`

10 个导出符号：

- **`concat`** (function)
  - `export function concat(buffers: readonly Uint8Array[]): Uint8Array_`
  - Concatenate an array of byte slices into a single slice.
- **`copy`** (function)
  - `export function copy(src: Uint8Array, dst: Uint8Array, offset = 0): number`
  - Copy bytes from the source array to the destination array and returns the number of bytes copied.
- **`endsWith`** (function)
  - `export function endsWith(source: Uint8Array, suffix: Uint8Array): boolean`
  - Returns true if the suffix array appears at the end of the source array, false otherwise.
- **`equals`** (function)
  - `export function equals(a: Uint8Array, b: Uint8Array): boolean`
  - Check whether byte slices are equal to each other.
- **`includesNeedle`** (function)
  - `export function includesNeedle( source: Uint8Array, needle: Uint8Array, start = 0, ): boolean`
  - Determines whether the source array contains the needle array.
- **`indexOfNeedle`** (function)
  - `export function indexOfNeedle( source: Uint8Array, needle: Uint8Array, start = 0, ): number`
  - Returns the index of the first occurrence of the needle array in the source array, or -1 if it is not present.
- **`lastIndexOfNeedle`** (function)
  - `export function lastIndexOfNeedle( source: Uint8Array, needle: Uint8Array, start: number = source.length - 1, ): number`
  - Returns the index of the last occurrence of the needle array in the source array, or -1 if it is not present.
- **`repeat`** (function)
  - `export function repeat(source: Uint8Array, count: number): Uint8Array_`
  - Returns a new byte slice composed of count repetitions of the source array.
- **`startsWith`** (function)
  - `export function startsWith(source: Uint8Array, prefix: Uint8Array): boolean`
  - Returns true if the prefix array appears at the start of the source array, false otherwise.
- **`Uint8Array_`** (re-export)

## `$std/bytes/concat`

- **`concat`** (function)
  - `export function concat(buffers: readonly Uint8Array[]): Uint8Array_`
  - Concatenate an array of byte slices into a single slice.
- **`Uint8Array_`** (re-export)

## `$std/bytes/copy`

- **`copy`** (function)
  - `export function copy(src: Uint8Array, dst: Uint8Array, offset = 0): number`
  - Copy bytes from the source array to the destination array and returns the number of bytes copied.

## `$std/bytes/ends-with`

- **`endsWith`** (function)
  - `export function endsWith(source: Uint8Array, suffix: Uint8Array): boolean`
  - Returns true if the suffix array appears at the end of the source array, false otherwise.

## `$std/bytes/equals`

- **`equals`** (function)
  - `export function equals(a: Uint8Array, b: Uint8Array): boolean`
  - Check whether byte slices are equal to each other.

## `$std/bytes/includes-needle`

- **`includesNeedle`** (function)
  - `export function includesNeedle( source: Uint8Array, needle: Uint8Array, start = 0, ): boolean`
  - Determines whether the source array contains the needle array.

## `$std/bytes/index-of-needle`

- **`indexOfNeedle`** (function)
  - `export function indexOfNeedle( source: Uint8Array, needle: Uint8Array, start = 0, ): number`
  - Returns the index of the first occurrence of the needle array in the source array, or -1 if it is not present.

## `$std/bytes/last-index-of-needle`

- **`lastIndexOfNeedle`** (function)
  - `export function lastIndexOfNeedle( source: Uint8Array, needle: Uint8Array, start: number = source.length - 1, ): number`
  - Returns the index of the last occurrence of the needle array in the source array, or -1 if it is not present.

## `$std/bytes/repeat`

- **`repeat`** (function)
  - `export function repeat(source: Uint8Array, count: number): Uint8Array_`
  - Returns a new byte slice composed of count repetitions of the source array.
- **`Uint8Array_`** (re-export)

## `$std/bytes/starts-with`

- **`startsWith`** (function)
  - `export function startsWith(source: Uint8Array, prefix: Uint8Array): boolean`
  - Returns true if the prefix array appears at the start of the source array, false otherwise.
