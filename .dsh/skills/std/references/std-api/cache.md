# `$std/cache` — @std/cache@0.2.4

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/cache
     需要精确签名时以 `deno doc` 或源码为准。 -->

> In-memory cache utilities, such as memoization and caches with different expiration policies.

导入：`import {...} from "$std/cache";`　别名：`jsr:@g9wp/std@^0.1.5/cache`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/cache` | `@std/cache` | `cache/mod.ts` | 11 |
| `$std/cache/lru-cache` | `@std/cache/lru-cache` | `cache/lru_cache.ts` | 4 |
| `$std/cache/memoize` | `@std/cache/memoize` | `cache/memoize.ts` | 4 |
| `$std/cache/ttl-cache` | `@std/cache/ttl-cache` | `cache/ttl_cache.ts` | 3 |

## `$std/cache`

11 个导出符号：

- **`LruCache`** (class)
  - `export class LruCache<K, V> extends Map<K, V> implements MemoizationCache<K, V>`
  - Least-recently-used cache.
- **`LruCacheEjectionReason`** (type)
  - `export type LruCacheEjectionReason = "evicted" \| "deleted" \| "cleared"`
  - The reason an entry was removed from the cache.
- **`LruCacheOptions`** (interface)
  - `export interface LruCacheOptions<K, V>`
  - Options for the LruCache constructor.
- **`MemoizationCache`** (re-export)
- **`MemoizationCache`** (interface)
  - `export interface MemoizationCache<K, V>`
  - A cache suitable for use with memoize.
- **`MemoizationCacheResult`** (type)
  - `export type MemoizationCacheResult<T> = \| … }`
  - The result of a memoized function, as stored in its cache.
- **`memoize`** (function)
  - `export function memoize< Fn extends (...args: never[])`
  - Cache the results of a function based on its arguments.
- **`MemoizeOptions`** (type)
  - `export type MemoizeOptions< Fn extends (...args: never[]) => unknown, Key, Cache extends MemoizationCache<Key, MemoizationCacheResult<ReturnType<Fn>>>, > = { cache?: Cache; /** * Function to get a unique cache key from…`
  - Options for memoize.
- **`TtlCache`** (class)
  - `export class TtlCache<K, V> extends Map<K, V> implements MemoizationCache<K, V>`
  - Time-to-live cache.
- **`TtlCacheOptions`** (interface)
  - `export interface TtlCacheOptions<K, V>`
  - Options for the TtlCache constructor.
- **`TtlCacheSetOptions`** (interface)
  - `export interface TtlCacheSetOptions`
  - Options for TtlCache.prototype.set.

## `$std/cache/lru-cache`

- **`LruCache`** (class)
  - `export class LruCache<K, V> extends Map<K, V> implements MemoizationCache<K, V>`
  - Least-recently-used cache.
- **`LruCacheEjectionReason`** (type)
  - `export type LruCacheEjectionReason = "evicted" \| "deleted" \| "cleared"`
  - The reason an entry was removed from the cache.
- **`LruCacheOptions`** (interface)
  - `export interface LruCacheOptions<K, V>`
  - Options for the LruCache constructor.
- **`MemoizationCache`** (re-export)

## `$std/cache/memoize`

- **`MemoizationCache`** (interface)
  - `export interface MemoizationCache<K, V>`
  - A cache suitable for use with memoize.
- **`MemoizationCacheResult`** (type)
  - `export type MemoizationCacheResult<T> = \| … }`
  - The result of a memoized function, as stored in its cache.
- **`memoize`** (function)
  - `export function memoize< Fn extends (...args: never[])`
  - Cache the results of a function based on its arguments.
- **`MemoizeOptions`** (type)
  - `export type MemoizeOptions< Fn extends (...args: never[]) => unknown, Key, Cache extends MemoizationCache<Key, MemoizationCacheResult<ReturnType<Fn>>>, > = { cache?: Cache; /** * Function to get a unique cache key from…`
  - Options for memoize.

## `$std/cache/ttl-cache`

- **`TtlCache`** (class)
  - `export class TtlCache<K, V> extends Map<K, V> implements MemoizationCache<K, V>`
  - Time-to-live cache.
- **`TtlCacheOptions`** (interface)
  - `export interface TtlCacheOptions<K, V>`
  - Options for the TtlCache constructor.
- **`TtlCacheSetOptions`** (interface)
  - `export interface TtlCacheSetOptions`
  - Options for TtlCache.prototype.set.
