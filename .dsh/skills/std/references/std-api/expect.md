# `$std/expect` — @std/expect@1.0.20

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/expect
     需要精确签名时以 `deno doc` 或源码为准。 -->

> This module provides Jest compatible expect assertion functionality.

导入：`import {...} from "$std/expect";`　别名：`jsr:@g9wp/std@^0.1.5/expect`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/expect` | `@std/expect` | `expect/mod.ts` | 6 |
| `$std/expect/expect` | `@std/expect/expect` | `expect/expect.ts` | 4 |
| `$std/expect/fn` | `@std/expect/fn` | `expect/fn.ts` | 1 |

## `$std/expect`

6 个导出符号：

- **`AnyConstructor`** (type)
  - `export type AnyConstructor = new (...args: any[]) => any; export type Tester = (a: any, b: any, customTesters: Tester[]) => void; export type Async<T> = { [K in keyof T]: T[K] extends (...args: any[]) => unknown ? (...a…`
  - A constructor that accepts any args and returns any value
- **`Async`** (type)
  - `export type Async<T> = … }`
  - converts all the methods in an interface to be async functions
- **`expect`** (function)
  - `export function expect<T extends Expected = Expected>( value: unknown, customMessage?: string, ): T`
  - **Note:** the documentation for this module is taken from [Jest](https://github.com/jestjs/jest/blob/main/website/versioned_docs/version-29.7/ExpectAPI.md) and the examples are updated for Deno.
- **`Expected`** (interface)
  - `export interface Expected<IsAsync = false>`
  - The Expected interface defines the available assertion methods.
- **`ExpectSnapshotState`** (interface)
  - `export interface ExpectSnapshotState`
  - State for snapshot testing, following Jest's expect.getState()/expect.setState() API.
- **`fn`** (function)
  - `export function fn(...stubs: Function[]): Function`
  - Creates a mock function that can be used for testing and assertions.

## `$std/expect/expect`

- **`AnyConstructor`** (type)
  - `export type AnyConstructor = new (...args: any[]) => any; export type Tester = (a: any, b: any, customTesters: Tester[]) => void; export type Async<T> = { [K in keyof T]: T[K] extends (...args: any[]) => unknown ? (...a…`
  - A constructor that accepts any args and returns any value
- **`Async`** (type)
  - `export type Async<T> = … }`
  - converts all the methods in an interface to be async functions
- **`expect`** (function)
  - `export function expect<T extends Expected = Expected>( value: unknown, customMessage?: string, ): T`
  - **Note:** the documentation for this module is taken from [Jest](https://github.com/jestjs/jest/blob/main/website/versioned_docs/version-29.7/ExpectAPI.md) and the examples are updated for Deno.
- **`Expected`** (interface)
  - `export interface Expected<IsAsync = false>`
  - The Expected interface defines the available assertion methods.

## `$std/expect/fn`

- **`fn`** (function)
  - `export function fn(...stubs: Function[]): Function`
  - Creates a mock function that can be used for testing and assertions.
