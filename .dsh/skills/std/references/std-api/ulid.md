# `$std/ulid` — @std/ulid@1.0.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/ulid
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for generating and working with Universally Unique Lexicographically Sortable Identifiers (ULIDs).

导入：`import {...} from "$std/ulid";`　别名：`jsr:@g9wp/std@^0.1.5/ulid`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/ulid` | `@std/ulid` | `ulid/mod.ts` | 3 |
| `$std/ulid/decode-time` | `@std/ulid/decode-time` | `ulid/decode_time.ts` | 1 |
| `$std/ulid/monotonic-ulid` | `@std/ulid/monotonic-ulid` | `ulid/monotonic_ulid.ts` | 1 |
| `$std/ulid/ulid` | `@std/ulid/ulid` | `ulid/ulid.ts` | 1 |

## `$std/ulid`

3 个导出符号：

- **`decodeTime`** (function)
  - `export function decodeTime(ulid: string): number`
  - Extracts the number of milliseconds since the Unix epoch that had passed when the ULID was generated. If the ULID is malformed, an error will be thrown.
- **`monotonicUlid`** (function)
  - `export function monotonicUlid(seedTime: number = Date.now()): string`
  - Generate a ULID that monotonically increases even for the same millisecond, optionally passing the current time. If the current time is not passed, it will default to Date.now().
- **`ulid`** (function)
  - `export function ulid(seedTime: number = Date.now()): string`
  - Generate a ULID, optionally based on a given timestamp. If the timestamp is not passed, it will default to Date.now().

## `$std/ulid/decode-time`

- **`decodeTime`** (function)
  - `export function decodeTime(ulid: string): number`
  - Extracts the number of milliseconds since the Unix epoch that had passed when the ULID was generated. If the ULID is malformed, an error will be thrown.

## `$std/ulid/monotonic-ulid`

- **`monotonicUlid`** (function)
  - `export function monotonicUlid(seedTime: number = Date.now()): string`
  - Generate a ULID that monotonically increases even for the same millisecond, optionally passing the current time. If the current time is not passed, it will default to Date.now().

## `$std/ulid/ulid`

- **`ulid`** (function)
  - `export function ulid(seedTime: number = Date.now()): string`
  - Generate a ULID, optionally based on a given timestamp. If the timestamp is not passed, it will default to Date.now().
