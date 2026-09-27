# `$std/async` — @std/async@1.5.1

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/async
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Provide helpers with asynchronous tasks, like delay, debounce, retry, or pooledMap.

导入：`import {...} from "$std/async";`　别名：`jsr:@g9wp/std@^0.1.5/async`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/async` | `@std/async` + `@std/async/unstable-throttle` + `@std/async/unstable-wait-for` + `@std/async/unstable-semaphore` + `@std/async/unstable-circuit-breaker` + `@std/async/unstable-pool-settled` | `async/mod.ts`, `async/unstable_throttle.ts`, `async/unstable_wait_for.ts`, `async/unstable_semaphore.ts`, `async/unstable_circuit_breaker.ts`, `async/unstable_pool_settled.ts` | 43 |
| `$std/async/abortable` | `@std/async/abortable` | `async/abortable.ts` | 1 |
| `$std/async/all-keyed` | `@std/async/all-keyed` | `async/all_keyed.ts` | 4 |
| `$std/async/channel` | `@std/async/channel` | `async/channel.ts` | 6 |
| `$std/async/circuit-breaker` | `@std/async/unstable-circuit-breaker` | `async/unstable_circuit_breaker.ts` | 5 |
| `$std/async/deadline` | `@std/async/deadline` | `async/deadline.ts` | 2 |
| `$std/async/debounce` | `@std/async/debounce` | `async/debounce.ts` | 3 |
| `$std/async/delay` | `@std/async/delay` | `async/delay.ts` | 2 |
| `$std/async/lazy` | `@std/async/lazy` | `async/lazy.ts` | 2 |
| `$std/async/mux-async-iterator` | `@std/async/mux-async-iterator` | `async/mux_async_iterator.ts` | 1 |
| `$std/async/poll` | `@std/async/poll` | `async/poll.ts` | 2 |
| `$std/async/pool` | `@std/async/pool` | `async/pool.ts` | 1 |
| `$std/async/pool-settled` | `@std/async/unstable-pool-settled` | `async/unstable_pool_settled.ts` | 2 |
| `$std/async/retry` | `@std/async/retry` | `async/retry.ts` | 3 |
| `$std/async/semaphore` | `@std/async/unstable-semaphore` | `async/unstable_semaphore.ts` | 1 |
| `$std/async/tee` | `@std/async/tee` | `async/tee.ts` | 3 |
| `$std/async/throttle` | `@std/async/unstable-throttle` | `async/unstable_throttle.ts` | 3 |
| `$std/async/wait-for` | `@std/async/unstable-wait-for` | `async/unstable_wait_for.ts` | 2 |

## `$std/async`

43 个导出符号：

- **`abortable`** (function)
  - `export function abortable<T>(p: Promise<T>, signal: AbortSignal): Promise<T>`
  - Make a Promise abortable with the given signal.
- **`allKeyed`** (function)
  - `export function allKeyed<T extends Record<PropertyKey, unknown>>( record: PromiseRecord<T>, ): Promise<T>`
  - Resolves all values in a record of promises in parallel, returning a promise that resolves to a record with the same keys and resolved values.
- **`allSettledKeyed`** (function)
  - `export function allSettledKeyed<T extends Record<PropertyKey, unknown>>( record: PromiseRecord<T>, ): Promise<SettledRecord<T>>`
  - Resolves all values in a record of promises in parallel, returning a promise that resolves to a record with the same keys and PromiseSettledResult objects as values.
- **`Channel`** (class)
  - `export class Channel<T> implements AsyncIterable<T>, Disposable, AsyncDisposable`
  - An async channel for communicating between concurrent tasks with optional bounded buffering and backpressure.
- **`ChannelClosedError`** (class)
  - `export class ChannelClosedError extends Error`
  - Error thrown when operating on a closed channel. When thrown from Channel.send, the value property carries the unsent value for recovery.
- **`ChannelOptions`** (interface)
  - `export interface ChannelOptions`
  - Options for the Channel constructor.
- **`ChannelReceiveOptions`** (interface)
  - `export interface ChannelReceiveOptions`
  - Options for Channel.receive.
- **`ChannelReceiveResult`** (type)
  - `export type ChannelReceiveResult<T> = \| … }`
  - Result of a non-blocking Channel.tryReceive call. Discriminate on the state field:
- **`ChannelSendOptions`** (interface)
  - `export interface ChannelSendOptions`
  - Options for Channel.send.
- **`CircuitBreaker`** (class)
  - `export class CircuitBreaker<T = unknown>`
  - A circuit breaker that wraps async operations to prevent cascading failures.
- **`CircuitBreakerExecuteOptions`** (interface)
  - `export interface CircuitBreakerExecuteOptions`
  - Options for CircuitBreaker.execute.
- **`CircuitBreakerOpenError`** (class)
  - `export class CircuitBreakerOpenError extends Error`
  - Error thrown when CircuitBreaker is open and rejects a request.
- **`CircuitBreakerOptions`** (interface)
  - `export interface CircuitBreakerOptions<T>`
  - Options for CircuitBreaker.
- **`CircuitState`** (type)
  - `export type CircuitState = "closed" \| "open" \| "half_open"`
  - Circuit breaker states following the standard pattern. - "closed": Normal operation, requests pass through - "open": Failing, all requests rejected immediately - "half_open": Testing recovery, limite…
- **`deadline`** (async function)
  - `export async function deadline<T>( p: Promise<T>, ms: number, options: DeadlineOptions = {}, ): Promise<T>`
  - Create a promise which will be rejected with DOMException when a given delay is exceeded.
- **`DeadlineOptions`** (interface)
  - `export interface DeadlineOptions`
  - Options for deadline.
- **`debounce`** (function)
  - `export function debounce<T extends Array<any>>( fn: (this: DebouncedFunction<T>, ...args: T) => void, wait: number, options?: DebounceOptions, ): DebouncedFunction<T>`
  - Creates a debounced function that delays the given func by a given wait time in milliseconds. If the method is called again before the timeout expires, the previous call will be aborted.
- **`DebouncedFunction`** (interface)
  - `export interface DebouncedFunction<T extends Array<unknown>>`
  - A debounced function whose execution is delayed by a given wait time in milliseconds. If the function is called again before the timeout expires, the previous call will be aborted.
- **`DebounceOptions`** (interface)
  - `export interface DebounceOptions`
  - Options for debounce.
- **`delay`** (function)
  - `export function delay(ms: number, options: DelayOptions = {}): Promise<void>`
  - Resolve a Promise after a given amount of milliseconds.
- **`DelayOptions`** (interface)
  - `export interface DelayOptions`
  - Options for delay.
- **`Lazy`** (class)
  - `export class Lazy<T>`
  - A lazy value that is initialized at most once, with built-in deduplication of concurrent callers. Prevents the common race where two concurrent get() calls both trigger the initializer; only one init…
- **`LazyGetOptions`** (interface)
  - `export interface LazyGetOptions`
  - Options for Lazy.prototype.get.
- **`MuxAsyncIterator`** (class)
  - `export class MuxAsyncIterator<T> implements AsyncIterable<T>`
  - Multiplexes multiple async iterators into a single stream. It currently makes an assumption that the final result (the value returned and not yielded from the iterator) does not matter; if there is a…
- **`poll`** (async function)
  - `export async function poll<T>( fn: () => T, isDone: (result: Awaited<T>) => boolean, options: PollOptions = {}, ): Promise<Awaited<T>>`
  - Repeatedly calls a function until a condition is met, then returns the result.
- **`PollOptions`** (interface)
  - `export interface PollOptions`
  - Options for poll.
- **`pooledMap`** (function)
  - `export function pooledMap<T, R>( poolLimit: number, array: Iterable<T> \| AsyncIterable<T>, iteratorFn: (data: T) => Promise<R>, ): AsyncIterableIterator<R>`
  - pooledMap transforms values from an (async) iterable into another async iterable. The transforms are done concurrently, with a max concurrency defined by the poolLimit.
- **`pooledMapSettled`** (function)
  - `export function pooledMapSettled<T, R>( array: Iterable<T> \| AsyncIterable<T>, iteratorFn: (data: T) => R \| Promise<R>, options: PooledMapSettledOptions, ): AsyncIterableIterator<PromiseSettledResult<R>>`
  - Like pooledMap, but does not fail fast. Every item is processed regardless of earlier failures. Results are yielded as PromiseSettledResult objects in input order.
- **`PooledMapSettledOptions`** (interface)
  - `export interface PooledMapSettledOptions`
  - Options for pooledMapSettled.
- **`PromiseRecord`** (type)
  - `export type PromiseRecord<T extends Record<PropertyKey, unknown>> = … }`
  - A record type where values can be promise-like (thenables) or plain values.
- **`retry`** (async function)
  - `export async function retry<T>( fn: (() => Promise<T>) \| (() => T), options?: RetryOptions, ): Promise<T>`
  - Calls the given (possibly asynchronous) function up to maxAttempts times. Retries as long as the given function throws. If the attempts are exhausted, throws a RetryError with cause set to the inner…
- **`RetryError`** (class)
  - `export class RetryError extends Error`
  - Error thrown in retry once the maximum number of failed attempts has been reached.
- **`RetryOptions`** (interface)
  - `export interface RetryOptions`
  - Options for retry.
- **`Semaphore`** (class)
  - `export class Semaphore`
  - A counting semaphore for limiting concurrent access to a resource.
- **`SettledRecord`** (type)
  - `export type SettledRecord<T extends Record<PropertyKey, unknown>> = … }`
  - A record type where values are PromiseSettledResult objects.
- **`tee`** (function)
  - `export function tee<T, N extends number = 2>( iterable: AsyncIterable<T>, n: N = 2 as N, ): Tuple<AsyncIterable<T>, N>`
  - Branches the given async iterable into the n branches.
- **`throttle`** (function)
  - `export function throttle<T extends Array<any>>( fn: (this: ThrottledFunction<T>, ...args: T) => void, timeframe: number \| ((previousDuration: number) => number), options?: ThrottleOptions, ): ThrottledFunction<T>`
  - Creates a throttled function that prevents the given func from being called more than once within a given timeframe in milliseconds.
- **`ThrottledFunction`** (interface)
  - `export interface ThrottledFunction<T extends Array<unknown>>`
  - A throttled function that will be executed at most once during the specified timeframe in milliseconds.
- **`ThrottleOptions`** (type)
  - `export type ThrottleOptions = … }`
  - Options for throttle
- **`Tuple`** (type) 🚫@internal
  - `export type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : TupleOf<T, N, []> : never`
  - Utility for representing n-tuple. Used in tee.
- **`TupleOf`** (type) 🚫@internal
  - `export type TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : TupleOf<T, N, [T, ...R]>`
  - Utility for representing n-tuple of. Used in Tuple.
- **`waitFor`** (function)
  - `export function waitFor( predicate: () => boolean \| Promise<boolean>, ms: number, options: WaitForOptions = {}, ): Promise<void>`
  - Resolve a Promise after a given predicate becomes true or the timeout amount of milliseconds has been reached.
- **`WaitForOptions`** (interface)
  - `export interface WaitForOptions`
  - Options for waitFor.

## `$std/async/abortable`

- **`abortable`** (function)
  - `export function abortable<T>(p: Promise<T>, signal: AbortSignal): Promise<T>`
  - Make a Promise abortable with the given signal.

## `$std/async/all-keyed`

- **`allKeyed`** (function)
  - `export function allKeyed<T extends Record<PropertyKey, unknown>>( record: PromiseRecord<T>, ): Promise<T>`
  - Resolves all values in a record of promises in parallel, returning a promise that resolves to a record with the same keys and resolved values.
- **`allSettledKeyed`** (function)
  - `export function allSettledKeyed<T extends Record<PropertyKey, unknown>>( record: PromiseRecord<T>, ): Promise<SettledRecord<T>>`
  - Resolves all values in a record of promises in parallel, returning a promise that resolves to a record with the same keys and PromiseSettledResult objects as values.
- **`PromiseRecord`** (type)
  - `export type PromiseRecord<T extends Record<PropertyKey, unknown>> = … }`
  - A record type where values can be promise-like (thenables) or plain values.
- **`SettledRecord`** (type)
  - `export type SettledRecord<T extends Record<PropertyKey, unknown>> = … }`
  - A record type where values are PromiseSettledResult objects.

## `$std/async/channel`

- **`Channel`** (class)
  - `export class Channel<T> implements AsyncIterable<T>, Disposable, AsyncDisposable`
  - An async channel for communicating between concurrent tasks with optional bounded buffering and backpressure.
- **`ChannelClosedError`** (class)
  - `export class ChannelClosedError extends Error`
  - Error thrown when operating on a closed channel. When thrown from Channel.send, the value property carries the unsent value for recovery.
- **`ChannelOptions`** (interface)
  - `export interface ChannelOptions`
  - Options for the Channel constructor.
- **`ChannelReceiveOptions`** (interface)
  - `export interface ChannelReceiveOptions`
  - Options for Channel.receive.
- **`ChannelReceiveResult`** (type)
  - `export type ChannelReceiveResult<T> = \| … }`
  - Result of a non-blocking Channel.tryReceive call. Discriminate on the state field:
- **`ChannelSendOptions`** (interface)
  - `export interface ChannelSendOptions`
  - Options for Channel.send.

## `$std/async/circuit-breaker`

> ⚠️ 上游为不稳定模块 `@std/async/unstable-circuit-breaker`，在 $std 中以稳定名字 `async/circuit-breaker` 提供。

- **`CircuitBreaker`** (class)
  - `export class CircuitBreaker<T = unknown>`
  - A circuit breaker that wraps async operations to prevent cascading failures.
- **`CircuitBreakerExecuteOptions`** (interface)
  - `export interface CircuitBreakerExecuteOptions`
  - Options for CircuitBreaker.execute.
- **`CircuitBreakerOpenError`** (class)
  - `export class CircuitBreakerOpenError extends Error`
  - Error thrown when CircuitBreaker is open and rejects a request.
- **`CircuitBreakerOptions`** (interface)
  - `export interface CircuitBreakerOptions<T>`
  - Options for CircuitBreaker.
- **`CircuitState`** (type)
  - `export type CircuitState = "closed" \| "open" \| "half_open"`
  - Circuit breaker states following the standard pattern. - "closed": Normal operation, requests pass through - "open": Failing, all requests rejected immediately - "half_open": Testing recovery, limite…

## `$std/async/deadline`

- **`deadline`** (async function)
  - `export async function deadline<T>( p: Promise<T>, ms: number, options: DeadlineOptions = {}, ): Promise<T>`
  - Create a promise which will be rejected with DOMException when a given delay is exceeded.
- **`DeadlineOptions`** (interface)
  - `export interface DeadlineOptions`
  - Options for deadline.

## `$std/async/debounce`

- **`debounce`** (function)
  - `export function debounce<T extends Array<any>>( fn: (this: DebouncedFunction<T>, ...args: T) => void, wait: number, options?: DebounceOptions, ): DebouncedFunction<T>`
  - Creates a debounced function that delays the given func by a given wait time in milliseconds. If the method is called again before the timeout expires, the previous call will be aborted.
- **`DebouncedFunction`** (interface)
  - `export interface DebouncedFunction<T extends Array<unknown>>`
  - A debounced function whose execution is delayed by a given wait time in milliseconds. If the function is called again before the timeout expires, the previous call will be aborted.
- **`DebounceOptions`** (interface)
  - `export interface DebounceOptions`
  - Options for debounce.

## `$std/async/delay`

- **`delay`** (function)
  - `export function delay(ms: number, options: DelayOptions = {}): Promise<void>`
  - Resolve a Promise after a given amount of milliseconds.
- **`DelayOptions`** (interface)
  - `export interface DelayOptions`
  - Options for delay.

## `$std/async/lazy`

- **`Lazy`** (class)
  - `export class Lazy<T>`
  - A lazy value that is initialized at most once, with built-in deduplication of concurrent callers. Prevents the common race where two concurrent get() calls both trigger the initializer; only one init…
- **`LazyGetOptions`** (interface)
  - `export interface LazyGetOptions`
  - Options for Lazy.prototype.get.

## `$std/async/mux-async-iterator`

- **`MuxAsyncIterator`** (class)
  - `export class MuxAsyncIterator<T> implements AsyncIterable<T>`
  - Multiplexes multiple async iterators into a single stream. It currently makes an assumption that the final result (the value returned and not yielded from the iterator) does not matter; if there is a…

## `$std/async/poll`

- **`poll`** (async function)
  - `export async function poll<T>( fn: () => T, isDone: (result: Awaited<T>) => boolean, options: PollOptions = {}, ): Promise<Awaited<T>>`
  - Repeatedly calls a function until a condition is met, then returns the result.
- **`PollOptions`** (interface)
  - `export interface PollOptions`
  - Options for poll.

## `$std/async/pool`

- **`pooledMap`** (function)
  - `export function pooledMap<T, R>( poolLimit: number, array: Iterable<T> \| AsyncIterable<T>, iteratorFn: (data: T) => Promise<R>, ): AsyncIterableIterator<R>`
  - pooledMap transforms values from an (async) iterable into another async iterable. The transforms are done concurrently, with a max concurrency defined by the poolLimit.

## `$std/async/pool-settled`

> ⚠️ 上游为不稳定模块 `@std/async/unstable-pool-settled`，在 $std 中以稳定名字 `async/pool-settled` 提供。

- **`pooledMapSettled`** (function)
  - `export function pooledMapSettled<T, R>( array: Iterable<T> \| AsyncIterable<T>, iteratorFn: (data: T) => R \| Promise<R>, options: PooledMapSettledOptions, ): AsyncIterableIterator<PromiseSettledResult<R>>`
  - Like pooledMap, but does not fail fast. Every item is processed regardless of earlier failures. Results are yielded as PromiseSettledResult objects in input order.
- **`PooledMapSettledOptions`** (interface)
  - `export interface PooledMapSettledOptions`
  - Options for pooledMapSettled.

## `$std/async/retry`

- **`retry`** (async function)
  - `export async function retry<T>( fn: (() => Promise<T>) \| (() => T), options?: RetryOptions, ): Promise<T>`
  - Calls the given (possibly asynchronous) function up to maxAttempts times. Retries as long as the given function throws. If the attempts are exhausted, throws a RetryError with cause set to the inner…
- **`RetryError`** (class)
  - `export class RetryError extends Error`
  - Error thrown in retry once the maximum number of failed attempts has been reached.
- **`RetryOptions`** (interface)
  - `export interface RetryOptions`
  - Options for retry.

## `$std/async/semaphore`

> ⚠️ 上游为不稳定模块 `@std/async/unstable-semaphore`，在 $std 中以稳定名字 `async/semaphore` 提供。

- **`Semaphore`** (class)
  - `export class Semaphore`
  - A counting semaphore for limiting concurrent access to a resource.

## `$std/async/tee`

- **`tee`** (function)
  - `export function tee<T, N extends number = 2>( iterable: AsyncIterable<T>, n: N = 2 as N, ): Tuple<AsyncIterable<T>, N>`
  - Branches the given async iterable into the n branches.
- **`Tuple`** (type) 🚫@internal
  - `export type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : TupleOf<T, N, []> : never`
  - Utility for representing n-tuple. Used in tee.
- **`TupleOf`** (type) 🚫@internal
  - `export type TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : TupleOf<T, N, [T, ...R]>`
  - Utility for representing n-tuple of. Used in Tuple.

## `$std/async/throttle`

> ⚠️ 上游为不稳定模块 `@std/async/unstable-throttle`，在 $std 中以稳定名字 `async/throttle` 提供。

- **`throttle`** (function)
  - `export function throttle<T extends Array<any>>( fn: (this: ThrottledFunction<T>, ...args: T) => void, timeframe: number \| ((previousDuration: number) => number), options?: ThrottleOptions, ): ThrottledFunction<T>`
  - Creates a throttled function that prevents the given func from being called more than once within a given timeframe in milliseconds.
- **`ThrottledFunction`** (interface)
  - `export interface ThrottledFunction<T extends Array<unknown>>`
  - A throttled function that will be executed at most once during the specified timeframe in milliseconds.
- **`ThrottleOptions`** (type)
  - `export type ThrottleOptions = … }`
  - Options for throttle

## `$std/async/wait-for`

> ⚠️ 上游为不稳定模块 `@std/async/unstable-wait-for`，在 $std 中以稳定名字 `async/wait-for` 提供。

- **`waitFor`** (function)
  - `export function waitFor( predicate: () => boolean \| Promise<boolean>, ms: number, options: WaitForOptions = {}, ): Promise<void>`
  - Resolve a Promise after a given predicate becomes true or the timeout amount of milliseconds has been reached.
- **`WaitForOptions`** (interface)
  - `export interface WaitForOptions`
  - Options for waitFor.
