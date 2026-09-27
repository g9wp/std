# `$std/testing` — @std/testing@1.0.21

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/testing
     需要精确签名时以 `deno doc` 或源码为准。 -->

导入：`import {...} from "$std/testing";`　别名：`jsr:@g9wp/std@^0.1.5/testing`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/testing/bdd` | `@std/testing/bdd` | `testing/bdd.ts` | 16 |
| `$std/testing/mock` | `@std/testing/mock` | `testing/mock.ts` | 25 |
| `$std/testing/snapshot` | `@std/testing/snapshot` | `testing/snapshot.ts` | 5 |
| `$std/testing/stub` | `@std/testing/unstable-stub` | `testing/unstable_stub.ts` | 2 |
| `$std/testing/stub-property` | `@std/testing/unstable-stub-property` | `testing/unstable_stub_property.ts` | 1 |
| `$std/testing/time` | `@std/testing/time` | `testing/time.ts` | 4 |
| `$std/testing/types` | `@std/testing/types` | `testing/types.ts` | 19 |

## `$std/testing/bdd`

- **`after`** (function) ⚠️已废弃
  - `export function after<T>( fn: (this: T) => void \| Promise<void>, )`
  - Alias of afterAll.
- **`afterAll`** (function) ⚠️已废弃
  - `export function afterAll<T>( fn: (this: T) => void \| Promise<void>, )`
  - Run some shared teardown after all of the tests in the suite.
- **`afterEach`** (function) ⚠️已废弃
  - `export function afterEach<T>( fn: (this: T) => void \| Promise<void>, )`
  - Run some shared teardown after each test in the suite.
- **`before`** (function) ⚠️已废弃
  - `export function before<T>( fn: (this: T) => void \| Promise<void>, )`
  - Alias of beforeAll
- **`beforeAll`** (function) ⚠️已废弃
  - `export function beforeAll<T>( fn: (this: T) => void \| Promise<void>, )`
  - Run some shared setup before all of the tests in the group. Useful for async setup in describe blocks. Outside them, top-level initialization code should be used instead.
- **`beforeEach`** (function) ⚠️已废弃
  - `export function beforeEach<T>( fn: (this: T) => void \| Promise<void>, )`
  - Run some shared setup before each test in the suite.
- **`describe`** (interface) ⚠️已废弃
  - `export interface describe`
  - Registers a test suite.
- **`describe`** (function) ⚠️已废弃
  - `export function describe<T>( ...args: DescribeArgs<T> ): TestSuite<T>`
  - Registers a test suite.
- **`DescribeArgs`** (type) ⚠️已废弃
  - `export type DescribeArgs<T> = \| [options: DescribeDefinition<T>] \| [name: string] \| [ name: string, options: Omit<DescribeDefinition<T>, "name">, ] \| [name: string, fn: () => void \| undefined] \| [fn: () => void \| undefi…`
  - The arguments for a DescribeFunction.
- **`DescribeDefinition`** (re-export)
- **`it`** (interface) ⚠️已废弃
  - `export interface it`
  - Registers an individual test case.
- **`it`** (function) ⚠️已废弃
  - `export function it<T>(...args: ItArgs<T>)`
  - Registers an individual test case.
- **`ItArgs`** (type) ⚠️已废弃
  - `export type ItArgs<T> = \| [options: ItDefinition<T>] \| [ name: string, options: Omit<ItDefinition<T>, "name">, ] \| [ name: string, fn: (this: T, t: Deno.TestContext) => void \| Promise<void>, ] \| [fn: (this: T, t: Deno.T…`
  - The arguments for an ItFunction.
- **`ItDefinition`** (re-export)
- **`test`** (function) ⚠️已废弃
  - `export function test<T>(...args: ItArgs<T>)`
  - Alias of it
- **`TestSuite`** (re-export)

## `$std/testing/mock`

- **`assertSpyCall`** (function)
  - `export function assertSpyCall< Self, Args extends unknown[], Return, >( spy: SpyLike<Self, Args, Return>, callIndex: number, expected?: ExpectedSpyCall<Self, Args, Return>, )`
  - Asserts that a spy is called as expected.
- **`assertSpyCallArg`** (function)
  - `export function assertSpyCallArg< Self, Args extends unknown[], Return, ExpectedArg, >( spy: SpyLike<Self, Args, Return>, callIndex: number, argIndex: number, expected: ExpectedArg, ): ExpectedArg`
  - Asserts that a spy is called with a specific arg as expected.
- **`assertSpyCallArgs`** (function)
  - `export function assertSpyCallArgs< Self, Args extends unknown[], Return, ExpectedArgs extends unknown[], >( spy: SpyLike<Self, Args, Return>, callIndex: number, expected: ExpectedArgs, ): ExpectedArgs`
  - Asserts that an spy is called with a specific range of args as expected. If a start and end index is not provided, the expected will be compared against all args. If a start is provided without an en…
- **`assertSpyCallAsync`** (async function)
  - `export async function assertSpyCallAsync< Self, Args extends unknown[], Return, >( spy: SpyLike<Self, Args, Promise<Return>>, callIndex: number, expected?: ExpectedSpyCall<Self, Args, Promise<Return> \| Return>, )`
  - Asserts that an async spy is called as expected.
- **`assertSpyCalls`** (function)
  - `export function assertSpyCalls< Self, Args extends unknown[], Return, >( spy: SpyLike<Self, Args, Return>, expectedCalls: number, )`
  - Asserts that a spy is called as much as expected and no more.
- **`ConstructorSpy`** (interface)
  - `export interface ConstructorSpy< Self = any, Args extends unknown[] = any[], > { new (...args: Args): Self; original: new (...args: Args) => Self; calls: SpyCall<Self, Args, Self>[]; restored: boolean; restore(): void;…`
  - A constructor wrapper that records all calls made to it.
- **`ExpectedSpyCall`** (interface)
  - `export interface ExpectedSpyCall< Self = any, Args extends unknown[] = any[], Return = any, > { args?: [...Args, ...unknown[]]; self?: Self; returned?: Return; error?: { Class?: new (...args: any[]) => Error; msgInclude…`
  - Call information recorded by a spy.
- **`GetParametersFromProp`** (type) 🚫@internal
  - `export type GetParametersFromProp< Self, Prop extends keyof Self, > = Self[Prop] extends (...args: infer Args) => unknown ? Args : unknown[]; export type GetReturnFromProp< Self, Prop extends keyof Self, > = Self[Prop]…`
  - Utility for extracting the arguments type from a property
- **`GetReturnFromProp`** (type) 🚫@internal
  - `export type GetReturnFromProp< Self, Prop extends keyof Self, > = Self[Prop] extends (...args: any[]) => infer Return ? Return : unknown; export type SpyLike< Self = any, Args extends unknown[] = any[], Return = any, >…`
  - Utility for extracting the return type from a property
- **`MethodSpy`** (interface)
  - `export interface MethodSpy< Self = any, Args extends unknown[] = any[], Return = any, > extends Spy<Self, Args, Return>, Disposable {} function functionSpy< Self, Args extends unknown[], Return, >(func?: (this: Self, ..…`
  - An instance method wrapper that records all calls made to it.
- **`MockError`** (class)
  - `export class MockError extends Error`
  - An error related to spying on a function or instance method.
- **`mockSession`** (function)
  - `export function mockSession(): number`
  - Creates a session that tracks all mocks created before it's restored. If a callback is provided, it restores all mocks created within it.
- **`mockSessionAsync`** (function)
  - `export function mockSessionAsync< Self, Args extends unknown[], Return, >( func: (this: Self, ...args: Args) => Promise<Return>, ): (this: Self, ...args: Args) => Promise<Return> { return async function (this: Self, ...…`
  - Creates an async session that tracks all mocks created before the promise resolves.
- **`resolvesNext`** (function)
  - `export function resolvesNext< Return, Self = any, Args extends unknown[] = any[], >( iterable: \| Iterable<Return \| Error \| Promise<Return \| Error>> \| AsyncIterable<Return \| Error \| Promise<Return \| Error>>, ): (this: Se…`
  - Creates a function that resolves the awaited iterable values. Any awaited iterable values that are errors will be thrown.
- **`restore`** (function)
  - `export function restore(id?: number)`
  - Restores all mocks registered in the current session that have not already been restored. If an id is provided, it will restore all mocks registered in the session associed with that id that have not…
- **`returnsArg`** (function)
  - `export function returnsArg< Arg, Self = any, >( idx: number, ): (this: Self, ...args: Arg[]) => Arg \| undefined { return function (...args: Arg[]): Arg \| undefined { return args[idx]; }; } export function returnsArgs< A…`
  - Creates a function that returns one of its arguments.
- **`returnsArgs`** (function)
  - `export function returnsArgs< Args extends unknown[], Self = any, >( start = 0, end?: number, ): (this: Self, ...args: Args) => Args { return function (this: Self, ...args: Args): Args { return args.slice(start, end) as…`
  - Creates a function that returns its arguments or a subset of them. If end is specified, it will return arguments up to but not including the end.
- **`returnsNext`** (function)
  - `export function returnsNext< Return, Self = any, Args extends unknown[] = any[], >( values: Iterable<Return \| Error>, ): (this: Self, ...args: Args) => Return { const gen = (function* returnsValue()`
  - Creates a function that returns the iterable values. Any iterable values that are errors will be thrown.
- **`returnsThis`** (function)
  - `export function returnsThis< Self = any, Args extends unknown[] = any[], >(): (this: Self, ...args: Args) => Self { return function (this: Self): Self { return this; }; } export function returnsArg< Arg, Self = any, >(…`
  - Creates a function that returns the instance the method was called on.
- **`spy`** (function)
  - `export function spy< Self = any, Args extends unknown[] = any[], Return = undefined, >(): Spy<Self, Args, Return>`
  - Creates a spy function.
- **`Spy`** (interface)
  - `export interface Spy< Self = any, Args extends unknown[] = any[], Return = any, > { (this: Self, ...args: Args): Return; original: (this: Self, ...args: Args) => Return; calls: SpyCall<Self, Args, Return>[]; restored: b…`
  - A function or instance method wrapper that records all calls made to it.
- **`SpyCall`** (interface)
  - `export interface SpyCall< Self = any, Args extends unknown[] = any[], Return = any, > { args: Args; returned?: Return; error?: Error; self?: Self; } export interface Spy< Self = any, Args extends unknown[] = any[], Retu…`
  - Call information recorded by a spy.
- **`SpyLike`** (type)
  - `export type SpyLike< Self = any, Args extends unknown[] = any[], Return = any, > = Spy<Self, Args, Return> \| ConstructorSpy<Self, Args>`
  - SpyLink object type.
- **`stub`** (function)
  - `export function stub< Self, Prop extends keyof Self, >( self: Self, property: Prop, ): Stub<Self, GetParametersFromProp<Self, Prop>, GetReturnFromProp<Self, Prop>>`
  - Replaces an instance method with a Stub with empty implementation.
- **`Stub`** (interface)
  - `export interface Stub< Self = any, Args extends unknown[] = any[], Return = any, > extends MethodSpy<Self, Args, Return> { fake: (this: Self, ...args: Args) => Return; } /** * Replaces an instance method with a Stub wit…`
  - An instance method replacement that records all calls made to it.

## `$std/testing/snapshot`

- **`assertSnapshot`** (async function) ⚠️已废弃
  - `export async function assertSnapshot<T>( context: Deno.TestContext, actual: T, options: SnapshotOptions<T>, ): Promise<void>`
  - Make an assertion that actual matches a snapshot. If the snapshot and actual do not match, then throw.
- **`createAssertSnapshot`** (function) ⚠️已废弃
  - `export function createAssertSnapshot<T>( options: SnapshotOptions<T>, baseAssertSnapshot: typeof assertSnapshot = assertSnapshot, ): typeof assertSnapshot`
  - Create assertSnapshot function with the given options.
- **`serialize`** (re-export)
- **`SnapshotMode`** (type) ⚠️已废弃
  - `export type SnapshotMode = "assert" \| "update"`
  - The mode of snapshot testing.
- **`SnapshotOptions`** (type) ⚠️已废弃
  - `export type SnapshotOptions<T = unknown> = … }`
  - The options for assertSnapshot.

## `$std/testing/stub`

> ⚠️ 上游为不稳定模块 `@std/testing/unstable-stub`，在 $std 中以稳定名字 `testing/stub` 提供。

- **`stub`** (function)
  - `export function stub< Self, Prop extends keyof Self, >( self: Self, property: Prop, ): Stub<Self, GetParametersFromProp<Self, Prop>, GetReturnFromProp<Self, Prop>>`
  - Replaces an instance method with a Stub with empty implementation.
- **`Stub`** (interface)
  - `export interface Stub< Self = any, Args extends unknown[] = any[], Return = any, > extends MethodSpy<Self, Args, Return> { fake: (this: Self, ...args: Args) => Return; } /** * Replaces an instance method with a Stub wit…`
  - An instance method replacement that records all calls made to it.

## `$std/testing/stub-property`

> ⚠️ 上游为不稳定模块 `@std/testing/unstable-stub-property`，在 $std 中以稳定名字 `testing/stub-property` 提供。

- **`stubProperty`** (function)
  - `export function stubProperty<Self, Prop extends keyof Self>( self: Self, property: Prop, value: Self[Prop], ): Disposable`
  - Stubs a property on an object, retaining the attributes of the original property descriptor as far as possible.

## `$std/testing/time`

- **`DelayOptions`** (re-export)
- **`FakeTime`** (class)
  - `export class FakeTime`
  - Overrides the real Date object and timer functions with fake ones that can be controlled through the fake time instance.
- **`FakeTimeOptions`** (interface)
  - `export interface FakeTimeOptions`
  - The option for FakeTime
- **`TimeError`** (class)
  - `export class TimeError extends Error`
  - Represents an error when trying to execute an invalid operation on fake time, given the state fake time is in.

## `$std/testing/types`

- **`AnyBrand`** (type) 🚫@internal
  - `export type AnyBrand = … }`
  - The utility type to represent any type.
- **`AnyToBrand`** (type) 🚫@internal
  - `export type AnyToBrand<T> = IsAny<T> extends true ? AnyBrand : T`
  - The utility type to convert any to AnyBrand.
- **`Assert`** (type)
  - `export type Assert<T extends boolean, Expected extends T> = never`
  - Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
- **`AssertFalse`** (type)
  - `export type AssertFalse<T extends false> = never`
  - Asserts at compile time that the provided type argument's type resolves to false.
- **`AssertTrue`** (type)
  - `export type AssertTrue<T extends true> = never`
  - Asserts at compile time that the provided type argument's type resolves to true.
- **`assertType`** (function)
  - `export function assertType<T extends boolean>( expectTrue: T, )`
  - Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
- **`DeepPrepareIsExact`** (type) 🚫@internal
  - `export type DeepPrepareIsExact<T, VisitedTypes = never> = … }`
  - @internal
- **`DeepPrepareIsExactProp`** (type) 🚫@internal
  - `export type DeepPrepareIsExactProp<Prop, Parent, VisitedTypes> = Prop extends VisitedTypes ? Prop : DeepPrepareIsExact<Prop, VisitedTypes \| Parent>`
  - @internal
- **`FlatType`** (type) 🚫@internal
  - `export type FlatType<T> = T extends Record<PropertyKey, unknown> ? … }`
  - The utility type to flatten record types.
- **`Has`** (type)
  - `export type Has<T, U> = IsAny<T> extends true ? true : IsAny<U> extends true ? false : Extract<T, U> extends never ? false : true`
  - Checks if type T has the specified type U.
- **`IsAny`** (type)
  - `export type IsAny<T> = 0 extends (1 & T) ? true : false`
  - Checks if type T is the any type.
- **`IsExact`** (type)
  - `export type IsExact<T, U> = ParametersAndReturnTypeMatches< FlatType<AnyToBrand<T>>, FlatType<AnyToBrand<U>> > extends true ? ParametersAndReturnTypeMatches< FlatType<DeepPrepareIsExact<T>>, FlatType<DeepPrepareIsExact<…`
  - Checks if type T exactly matches type U.
- **`IsNever`** (type)
  - `export type IsNever<T> = [T] extends [never] ? true : false`
  - Checks if type T is the never type.
- **`IsNullable`** (type)
  - `export type IsNullable<T> = Extract<T, null \| undefined> extends never ? false : true`
  - Checks if type T is possibly null or undefined.
- **`IsUnknown`** (type)
  - `export type IsUnknown<T> = unknown extends T ? ([T] extends [null] ? false : true) : false`
  - Checks if type T is the unknown type.
- **`Matches`** (type) 🚫@internal
  - `export type Matches<T, U> = T extends U ? U extends T ? true : false : false`
  - The internal utility type to match the given types.
- **`NotHas`** (type)
  - `export type NotHas<T, U> = Has<T, U> extends false ? true : false`
  - Checks if type T does not have the specified type U.
- **`ParametersAndReturnTypeMatches`** (type) 🚫@internal
  - `export type ParametersAndReturnTypeMatches<T, U> = Matches< <X>(_: T) => X extends T ? 1 : 2, <X>(_: U) => X extends U ? 1 : 2 >; export type TupleMatches<T, U> = Matches<[T], [U]>; export type Matches<T, U> = T extends…`
  - The internal utility type to match the given types as return types.
- **`TupleMatches`** (type) 🚫@internal
  - `export type TupleMatches<T, U> = Matches<[T], [U]>`
  - The internal utility type to match the given types as tuples.
