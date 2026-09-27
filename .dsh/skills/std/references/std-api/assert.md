# `$std/assert` — @std/assert@1.0.19

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/assert
     需要精确签名时以 `deno doc` 或源码为准。 -->

> A library of assertion functions. If the assertion is false an AssertionError will be thrown which will result in pretty-printed diff of the failing assertion.

导入：`import {...} from "$std/assert";`　别名：`jsr:@g9wp/std@^0.1.5/assert`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/assert` | `@std/assert` + `@std/assert/unstable-never` | `assert/mod.ts`, `assert/unstable_never.ts` | 33 |
| `$std/assert/almost-equals` | `@std/assert/almost-equals` | `assert/almost_equals.ts` | 1 |
| `$std/assert/array-includes` | `@std/assert/array-includes` | `assert/array_includes.ts` | 2 |
| `$std/assert/assert` | `@std/assert/assert` | `assert/assert.ts` | 1 |
| `$std/assert/assertion-error` | `@std/assert/assertion-error` | `assert/assertion_error.ts` | 1 |
| `$std/assert/equal` | `@std/assert/equal` | `assert/equal.ts` | 1 |
| `$std/assert/equals` | `@std/assert/equals` | `assert/equals.ts` | 1 |
| `$std/assert/exists` | `@std/assert/exists` | `assert/exists.ts` | 1 |
| `$std/assert/fail` | `@std/assert/fail` | `assert/fail.ts` | 1 |
| `$std/assert/false` | `@std/assert/false` | `assert/false.ts` | 2 |
| `$std/assert/greater` | `@std/assert/greater` | `assert/greater.ts` | 1 |
| `$std/assert/greater-or-equal` | `@std/assert/greater-or-equal` | `assert/greater_or_equal.ts` | 1 |
| `$std/assert/instance-of` | `@std/assert/instance-of` | `assert/instance_of.ts` | 3 |
| `$std/assert/is-error` | `@std/assert/is-error` | `assert/is_error.ts` | 1 |
| `$std/assert/less` | `@std/assert/less` | `assert/less.ts` | 1 |
| `$std/assert/less-or-equal` | `@std/assert/less-or-equal` | `assert/less_or_equal.ts` | 1 |
| `$std/assert/match` | `@std/assert/match` | `assert/match.ts` | 1 |
| `$std/assert/never` | `@std/assert/unstable-never` | `assert/unstable_never.ts` | 1 |
| `$std/assert/not-equals` | `@std/assert/not-equals` | `assert/not_equals.ts` | 1 |
| `$std/assert/not-instance-of` | `@std/assert/not-instance-of` | `assert/not_instance_of.ts` | 1 |
| `$std/assert/not-match` | `@std/assert/not-match` | `assert/not_match.ts` | 1 |
| `$std/assert/not-strict-equals` | `@std/assert/not-strict-equals` | `assert/not_strict_equals.ts` | 1 |
| `$std/assert/object-match` | `@std/assert/object-match` | `assert/object_match.ts` | 1 |
| `$std/assert/rejects` | `@std/assert/rejects` | `assert/rejects.ts` | 2 |
| `$std/assert/strict-equals` | `@std/assert/strict-equals` | `assert/strict_equals.ts` | 1 |
| `$std/assert/string-includes` | `@std/assert/string-includes` | `assert/string_includes.ts` | 1 |
| `$std/assert/throws` | `@std/assert/throws` | `assert/throws.ts` | 1 |
| `$std/assert/unimplemented` | `@std/assert/unimplemented` | `assert/unimplemented.ts` | 1 |
| `$std/assert/unreachable` | `@std/assert/unreachable` | `assert/unreachable.ts` | 1 |

## `$std/assert`

33 个导出符号：

- **`AnyConstructor`** (type)
  - `export type AnyConstructor = new (...args: any[]) => any; export type GetConstructorType<T extends AnyConstructor> = InstanceType<T>; export function assertInstanceOf< T extends abstract new (...args: any[]) => any, >(…`
  - Any constructor
- **`ArrayLikeArg`** (type)
  - `export type ArrayLikeArg<T> = ArrayLike<T> & object`
  - An array-like object (Array, Uint8Array, NodeList, etc.) that is not a string
- **`assert`** (function)
  - `export function assert(expr: unknown, msg = ""): asserts expr`
  - Make an assertion, an error will be thrown if expr does not have a truthy value.
- **`assertAlmostEquals`** (function)
  - `export function assertAlmostEquals( actual: number, expected: number, tolerance?: number, msg?: string, )`
  - Make an assertion that actual and expected are almost equal numbers through a given tolerance. It can be used to take into account IEEE-754 double-precision floating-point representation limitations.…
- **`assertArrayIncludes`** (function)
  - `export function assertArrayIncludes<T>( actual: ArrayLikeArg<T>, expected: ArrayLikeArg<T>, msg?: string, ): void`
  - Asserts that actual contains all values in expected, using deep equality for non-primitive values.
- **`assertEquals`** (function)
  - `export function assertEquals<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual and expected are equal, deeply. If not deeply equal, then throw.
- **`assertExists`** (function)
  - `export function assertExists<T>( actual: T, msg?: string, ): asserts actual is NonNullable<T>`
  - Make an assertion that actual is not null or undefined. If not then throw.
- **`assertFalse`** (function)
  - `export function assertFalse(expr: unknown, msg = ""): asserts expr is Falsy`
  - Make an assertion, an error will be thrown if expr has a truthy value.
- **`assertGreater`** (function)
  - `export function assertGreater<T>(actual: T, expected: T, msg?: string)`
  - Make an assertion that actual is greater than expected. If not then throw.
- **`assertGreaterOrEqual`** (function)
  - `export function assertGreaterOrEqual<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual is greater than or equal to expected. If not then throw.
- **`assertInstanceOf`** (function)
  - `export function assertInstanceOf< T extends abstract new (...args: any[])`
  - Make an assertion that obj is an instance of type. If not then throw.
- **`AssertionError`** (class)
  - `export class AssertionError extends Error`
  - Error thrown when an assertion fails.
- **`assertIsError`** (function)
  - `export function assertIsError<E extends Error = Error>( error: unknown, ErrorClass?: abstract new (...args: any[]) => E, msgMatches?: string \| RegExp, msg?: string, ): asserts error is E`
  - Make an assertion that error is an Error. If not then an error will be thrown. An error class and a string that should be included in the error message can also be asserted.
- **`assertLess`** (function)
  - `export function assertLess<T>(actual: T, expected: T, msg?: string)`
  - Make an assertion that actual is less than expected. If not then throw.
- **`assertLessOrEqual`** (function)
  - `export function assertLessOrEqual<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual is less than or equal to expected. If not then throw.
- **`assertMatch`** (function)
  - `export function assertMatch( actual: string, expected: RegExp, msg?: string, )`
  - Make an assertion that actual match RegExp expected. If not then throw.
- **`assertNever`** (function)
  - `export function assertNever(x: never, msg?: string): never`
  - Make an assertion that x is of type never. If not then throw.
- **`assertNotEquals`** (function)
  - `export function assertNotEquals<T>(actual: T, expected: T, msg?: string)`
  - Make an assertion that actual and expected are not equal, deeply. If not then throw.
- **`assertNotInstanceOf`** (function)
  - `export function assertNotInstanceOf<A, T>( actual: A, unexpectedType: abstract new (...args: any[]) => T, msg?: string, ): asserts actual is Exclude<A, T>`
  - Make an assertion that obj is not an instance of type. If so, then throw.
- **`assertNotMatch`** (function)
  - `export function assertNotMatch( actual: string, expected: RegExp, msg?: string, )`
  - Make an assertion that actual not match RegExp expected. If match then throw.
- **`assertNotStrictEquals`** (function)
  - `export function assertNotStrictEquals<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual and expected are not strictly equal, using Object.is for equality comparison. If the values are strictly equal then throw.
- **`assertObjectMatch`** (function)
  - `export function assertObjectMatch( actual: Record<PropertyKey, any>, expected: Record<PropertyKey, unknown>, msg?: string, ): void`
  - Make an assertion that expected object is a subset of actual object, deeply. If not, then throw a diff of the objects, with mismatching properties highlighted.
- **`assertRejects`** (function)
  - `export function assertRejects( fn: () => PromiseLike<unknown>, msg?: string, ): Promise<unknown>`
  - Executes a function which returns a promise, expecting it to reject.
- **`assertRejects`** (async function)
  - `export async function assertRejects<E extends Error = Error>( fn: () => PromiseLike<unknown>, errorClassOrMsg?: \| (abstract new (...args: any[]) => E) \| string, msgIncludesOrMsg?: string, msg?: string, ): Promise<E \| Er…`
- **`assertStrictEquals`** (function)
  - `export function assertStrictEquals<T>( actual: unknown, expected: T, msg?: string, ): asserts actual is T`
  - Make an assertion that actual and expected are strictly equal, using Object.is for equality comparison. If not, then throw.
- **`assertStringIncludes`** (function)
  - `export function assertStringIncludes( actual: string, expected: string, msg?: string, )`
  - Make an assertion that actual includes expected. If not then throw.
- **`assertThrows`** (function)
  - `export function assertThrows( fn: () => unknown, msg?: string, ): unknown`
  - Executes a function, expecting it to throw. If it does not, then it throws.
- **`equal`** (function)
  - `export function equal(a: unknown, b: unknown): boolean`
  - Deep equality comparison used in assertions.
- **`fail`** (function)
  - `export function fail(msg?: string): never`
  - Forcefully throws a failed assertion.
- **`Falsy`** (type)
  - `export type Falsy = false \| 0 \| 0n \| "" \| null \| undefined`
  - Assertion condition for assertFalse.
- **`GetConstructorType`** (type)
  - `export type GetConstructorType<T extends AnyConstructor> = InstanceType<T>`
  - Gets constructor type
- **`unimplemented`** (function)
  - `export function unimplemented(msg?: string): never`
  - Use this to stub out methods that will throw when invoked.
- **`unreachable`** (function)
  - `export function unreachable(msg?: string): never`
  - Use this to assert unreachable code.

## `$std/assert/almost-equals`

- **`assertAlmostEquals`** (function)
  - `export function assertAlmostEquals( actual: number, expected: number, tolerance?: number, msg?: string, )`
  - Make an assertion that actual and expected are almost equal numbers through a given tolerance. It can be used to take into account IEEE-754 double-precision floating-point representation limitations.…

## `$std/assert/array-includes`

- **`ArrayLikeArg`** (type)
  - `export type ArrayLikeArg<T> = ArrayLike<T> & object`
  - An array-like object (Array, Uint8Array, NodeList, etc.) that is not a string
- **`assertArrayIncludes`** (function)
  - `export function assertArrayIncludes<T>( actual: ArrayLikeArg<T>, expected: ArrayLikeArg<T>, msg?: string, ): void`
  - Asserts that actual contains all values in expected, using deep equality for non-primitive values.

## `$std/assert/assert`

- **`assert`** (function)
  - `export function assert(expr: unknown, msg = ""): asserts expr`
  - Make an assertion, an error will be thrown if expr does not have a truthy value.

## `$std/assert/assertion-error`

- **`AssertionError`** (class)
  - `export class AssertionError extends Error`
  - Error thrown when an assertion fails.

## `$std/assert/equal`

- **`equal`** (function)
  - `export function equal(a: unknown, b: unknown): boolean`
  - Deep equality comparison used in assertions.

## `$std/assert/equals`

- **`assertEquals`** (function)
  - `export function assertEquals<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual and expected are equal, deeply. If not deeply equal, then throw.

## `$std/assert/exists`

- **`assertExists`** (function)
  - `export function assertExists<T>( actual: T, msg?: string, ): asserts actual is NonNullable<T>`
  - Make an assertion that actual is not null or undefined. If not then throw.

## `$std/assert/fail`

- **`fail`** (function)
  - `export function fail(msg?: string): never`
  - Forcefully throws a failed assertion.

## `$std/assert/false`

- **`assertFalse`** (function)
  - `export function assertFalse(expr: unknown, msg = ""): asserts expr is Falsy`
  - Make an assertion, an error will be thrown if expr has a truthy value.
- **`Falsy`** (type)
  - `export type Falsy = false \| 0 \| 0n \| "" \| null \| undefined`
  - Assertion condition for assertFalse.

## `$std/assert/greater`

- **`assertGreater`** (function)
  - `export function assertGreater<T>(actual: T, expected: T, msg?: string)`
  - Make an assertion that actual is greater than expected. If not then throw.

## `$std/assert/greater-or-equal`

- **`assertGreaterOrEqual`** (function)
  - `export function assertGreaterOrEqual<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual is greater than or equal to expected. If not then throw.

## `$std/assert/instance-of`

- **`AnyConstructor`** (type)
  - `export type AnyConstructor = new (...args: any[]) => any; export type GetConstructorType<T extends AnyConstructor> = InstanceType<T>; export function assertInstanceOf< T extends abstract new (...args: any[]) => any, >(…`
  - Any constructor
- **`assertInstanceOf`** (function)
  - `export function assertInstanceOf< T extends abstract new (...args: any[])`
  - Make an assertion that obj is an instance of type. If not then throw.
- **`GetConstructorType`** (type)
  - `export type GetConstructorType<T extends AnyConstructor> = InstanceType<T>`
  - Gets constructor type

## `$std/assert/is-error`

- **`assertIsError`** (function)
  - `export function assertIsError<E extends Error = Error>( error: unknown, ErrorClass?: abstract new (...args: any[]) => E, msgMatches?: string \| RegExp, msg?: string, ): asserts error is E`
  - Make an assertion that error is an Error. If not then an error will be thrown. An error class and a string that should be included in the error message can also be asserted.

## `$std/assert/less`

- **`assertLess`** (function)
  - `export function assertLess<T>(actual: T, expected: T, msg?: string)`
  - Make an assertion that actual is less than expected. If not then throw.

## `$std/assert/less-or-equal`

- **`assertLessOrEqual`** (function)
  - `export function assertLessOrEqual<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual is less than or equal to expected. If not then throw.

## `$std/assert/match`

- **`assertMatch`** (function)
  - `export function assertMatch( actual: string, expected: RegExp, msg?: string, )`
  - Make an assertion that actual match RegExp expected. If not then throw.

## `$std/assert/never`

> ⚠️ 上游为不稳定模块 `@std/assert/unstable-never`，在 $std 中以稳定名字 `assert/never` 提供。

- **`assertNever`** (function)
  - `export function assertNever(x: never, msg?: string): never`
  - Make an assertion that x is of type never. If not then throw.

## `$std/assert/not-equals`

- **`assertNotEquals`** (function)
  - `export function assertNotEquals<T>(actual: T, expected: T, msg?: string)`
  - Make an assertion that actual and expected are not equal, deeply. If not then throw.

## `$std/assert/not-instance-of`

- **`assertNotInstanceOf`** (function)
  - `export function assertNotInstanceOf<A, T>( actual: A, unexpectedType: abstract new (...args: any[]) => T, msg?: string, ): asserts actual is Exclude<A, T>`
  - Make an assertion that obj is not an instance of type. If so, then throw.

## `$std/assert/not-match`

- **`assertNotMatch`** (function)
  - `export function assertNotMatch( actual: string, expected: RegExp, msg?: string, )`
  - Make an assertion that actual not match RegExp expected. If match then throw.

## `$std/assert/not-strict-equals`

- **`assertNotStrictEquals`** (function)
  - `export function assertNotStrictEquals<T>( actual: T, expected: T, msg?: string, )`
  - Make an assertion that actual and expected are not strictly equal, using Object.is for equality comparison. If the values are strictly equal then throw.

## `$std/assert/object-match`

- **`assertObjectMatch`** (function)
  - `export function assertObjectMatch( actual: Record<PropertyKey, any>, expected: Record<PropertyKey, unknown>, msg?: string, ): void`
  - Make an assertion that expected object is a subset of actual object, deeply. If not, then throw a diff of the objects, with mismatching properties highlighted.

## `$std/assert/rejects`

- **`assertRejects`** (function)
  - `export function assertRejects( fn: () => PromiseLike<unknown>, msg?: string, ): Promise<unknown>`
  - Executes a function which returns a promise, expecting it to reject.
- **`assertRejects`** (async function)
  - `export async function assertRejects<E extends Error = Error>( fn: () => PromiseLike<unknown>, errorClassOrMsg?: \| (abstract new (...args: any[]) => E) \| string, msgIncludesOrMsg?: string, msg?: string, ): Promise<E \| Er…`

## `$std/assert/strict-equals`

- **`assertStrictEquals`** (function)
  - `export function assertStrictEquals<T>( actual: unknown, expected: T, msg?: string, ): asserts actual is T`
  - Make an assertion that actual and expected are strictly equal, using Object.is for equality comparison. If not, then throw.

## `$std/assert/string-includes`

- **`assertStringIncludes`** (function)
  - `export function assertStringIncludes( actual: string, expected: string, msg?: string, )`
  - Make an assertion that actual includes expected. If not then throw.

## `$std/assert/throws`

- **`assertThrows`** (function)
  - `export function assertThrows( fn: () => unknown, msg?: string, ): unknown`
  - Executes a function, expecting it to throw. If it does not, then it throws.

## `$std/assert/unimplemented`

- **`unimplemented`** (function)
  - `export function unimplemented(msg?: string): never`
  - Use this to stub out methods that will throw when invoked.

## `$std/assert/unreachable`

- **`unreachable`** (function)
  - `export function unreachable(msg?: string): never`
  - Use this to assert unreachable code.
