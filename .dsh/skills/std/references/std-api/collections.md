# `$std/collections` — @std/collections@1.4.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/collections
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Pure functions for common tasks around collection types like arrays and objects.

导入：`import {...} from "$std/collections";`　别名：`jsr:@g9wp/std@^0.1.5/collections`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/collections` | `@std/collections` + `@std/collections/unstable-binary-search` + `@std/collections/unstable-cycle` | `collections/mod.ts`, `collections/unstable_binary_search.ts`, `collections/unstable_cycle.ts` | 72 |
| `$std/collections/aggregate-groups` | `@std/collections/aggregate-groups` | `collections/aggregate_groups.ts` | 1 |
| `$std/collections/associate-by` | `@std/collections/associate-by` | `collections/associate_by.ts` | 1 |
| `$std/collections/associate-with` | `@std/collections/associate-with` | `collections/associate_with.ts` | 1 |
| `$std/collections/binary-search` | `@std/collections/unstable-binary-search` | `collections/unstable_binary_search.ts` | 1 |
| `$std/collections/chunk` | `@std/collections/chunk` | `collections/chunk.ts` | 1 |
| `$std/collections/cycle` | `@std/collections/unstable-cycle` | `collections/unstable_cycle.ts` | 1 |
| `$std/collections/deep-merge` | `@std/collections/deep-merge` | `collections/deep_merge.ts` | 18 |
| `$std/collections/distinct` | `@std/collections/distinct` | `collections/distinct.ts` | 1 |
| `$std/collections/distinct-by` | `@std/collections/distinct-by` | `collections/distinct_by.ts` | 1 |
| `$std/collections/drop-last-while` | `@std/collections/drop-last-while` | `collections/drop_last_while.ts` | 1 |
| `$std/collections/drop-while` | `@std/collections/drop-while` | `collections/drop_while.ts` | 1 |
| `$std/collections/filter-entries` | `@std/collections/filter-entries` | `collections/filter_entries.ts` | 1 |
| `$std/collections/filter-keys` | `@std/collections/filter-keys` | `collections/filter_keys.ts` | 1 |
| `$std/collections/filter-values` | `@std/collections/filter-values` | `collections/filter_values.ts` | 1 |
| `$std/collections/find-single` | `@std/collections/find-single` | `collections/find_single.ts` | 1 |
| `$std/collections/first-not-nullish-of` | `@std/collections/first-not-nullish-of` | `collections/first_not_nullish_of.ts` | 1 |
| `$std/collections/includes-value` | `@std/collections/includes-value` | `collections/includes_value.ts` | 1 |
| `$std/collections/interleave` | `@std/collections/interleave` | `collections/interleave.ts` | 1 |
| `$std/collections/intersect` | `@std/collections/intersect` | `collections/intersect.ts` | 1 |
| `$std/collections/invert` | `@std/collections/invert` | `collections/invert.ts` | 2 |
| `$std/collections/invert-by` | `@std/collections/invert-by` | `collections/invert_by.ts` | 2 |
| `$std/collections/join-to-string` | `@std/collections/join-to-string` | `collections/join_to_string.ts` | 2 |
| `$std/collections/map-entries` | `@std/collections/map-entries` | `collections/map_entries.ts` | 1 |
| `$std/collections/map-keys` | `@std/collections/map-keys` | `collections/map_keys.ts` | 1 |
| `$std/collections/map-not-nullish` | `@std/collections/map-not-nullish` | `collections/map_not_nullish.ts` | 1 |
| `$std/collections/map-values` | `@std/collections/map-values` | `collections/map_values.ts` | 1 |
| `$std/collections/max-by` | `@std/collections/max-by` | `collections/max_by.ts` | 1 |
| `$std/collections/max-of` | `@std/collections/max-of` | `collections/max_of.ts` | 1 |
| `$std/collections/max-with` | `@std/collections/max-with` | `collections/max_with.ts` | 1 |
| `$std/collections/min-by` | `@std/collections/min-by` | `collections/min_by.ts` | 1 |
| `$std/collections/min-of` | `@std/collections/min-of` | `collections/min_of.ts` | 1 |
| `$std/collections/min-with` | `@std/collections/min-with` | `collections/min_with.ts` | 1 |
| `$std/collections/omit` | `@std/collections/omit` | `collections/omit.ts` | 1 |
| `$std/collections/partition` | `@std/collections/partition` | `collections/partition.ts` | 1 |
| `$std/collections/partition-entries` | `@std/collections/partition-entries` | `collections/partition_entries.ts` | 1 |
| `$std/collections/permutations` | `@std/collections/permutations` | `collections/permutations.ts` | 1 |
| `$std/collections/pick` | `@std/collections/pick` | `collections/pick.ts` | 1 |
| `$std/collections/reduce-groups` | `@std/collections/reduce-groups` | `collections/reduce_groups.ts` | 1 |
| `$std/collections/running-reduce` | `@std/collections/running-reduce` | `collections/running_reduce.ts` | 1 |
| `$std/collections/sample` | `@std/collections/sample` | `collections/sample.ts` | 1 |
| `$std/collections/sliding-windows` | `@std/collections/sliding-windows` | `collections/sliding_windows.ts` | 2 |
| `$std/collections/sort-by` | `@std/collections/sort-by` | `collections/sort_by.ts` | 3 |
| `$std/collections/sum-of` | `@std/collections/sum-of` | `collections/sum_of.ts` | 1 |
| `$std/collections/take-last-while` | `@std/collections/take-last-while` | `collections/take_last_while.ts` | 1 |
| `$std/collections/take-while` | `@std/collections/take-while` | `collections/take_while.ts` | 1 |
| `$std/collections/union` | `@std/collections/union` | `collections/union.ts` | 1 |
| `$std/collections/unzip` | `@std/collections/unzip` | `collections/unzip.ts` | 1 |
| `$std/collections/without-all` | `@std/collections/without-all` | `collections/without_all.ts` | 1 |
| `$std/collections/zip` | `@std/collections/zip` | `collections/zip.ts` | 1 |

## `$std/collections`

72 个导出符号：

- **`aggregateGroups`** (function)
  - `export function aggregateGroups<T, A>( record: Readonly<Record<string, ReadonlyArray<T>>>, aggregator: (current: T, key: string, first: boolean, accumulator?: A) => A, ): Record<string, A>`
  - Applies the given aggregator to each group in the given grouping, returning the results together with the respective group keys
- **`ArrayValueType`** (type)
  - `export type ArrayValueType<T> = T extends Array<infer V> ? V : never`
  - Get array values type
- **`associateBy`** (function)
  - `export function associateBy<T>( array: Iterable<T>, selector: (el: T) => string, ): Record<string, T>`
  - Creates a record by associating each element of the input array with a key generated by the selector function.
- **`associateWith`** (function)
  - `export function associateWith<T>( array: Iterable<string>, selector: (key: string) => T, ): Record<string, T>`
  - Associates each string element of an array with a value returned by a selector function.
- **`binarySearch`** (function)
  - `export function binarySearch< T extends ArrayLike<number> \| ArrayLike<bigint> \| ArrayLike<string>, >( haystack: T, needle: T[number], ): number`
  - Binary search within a sorted array, allowing for non-exact matches.
- **`chunk`** (function)
  - `export function chunk<T>( iterable: Iterable<T>, size: number, ): T[][]`
  - Splits the given array into an array of chunks of the given size and returns them.
- **`cycle`** (generator)
  - `export function* cycle<T>(iterable: Iterable<T>): Generator<T>`
  - Creates an iterator that cycles indefinitely over the provided iterable.
- **`deepMerge`** (function)
  - `export function deepMerge< T extends Record<PropertyKey, unknown>, >( record: Partial<Readonly<T>>, other: Partial<Readonly<T>>, options?: Readonly<DeepMergeOptions>, ): T`
  - Merges the two given records, recursively merging any nested records with the second collection overriding the first in case of conflict.
- **`DeepMerge`** (type)
  - `export type DeepMerge< T, U, Options = Record<string, MergingStrategy>, > = [T, U] extends [Record<PropertyKey, unknown>, Record<PropertyKey, unknown>] ? Merge<T, U, Options> : T \| U`
  - Merge deeply two objects
- **`DeepMergeOptions`** (type)
  - `export type DeepMergeOptions = … }`
  - Options for deepMerge.
- **`distinct`** (function)
  - `export function distinct<T>(array: Iterable<T>): T[]`
  - Returns all distinct elements in the given array, preserving order by first occurrence.
- **`distinctBy`** (function)
  - `export function distinctBy<T, D>( array: Iterable<T>, discriminator: (el: T, index: number) => D, ): T[]`
  - Returns all elements in the given array that produce a unique value using the given discriminator, with the first matching occurrence retained.
- **`dropLastWhile`** (function)
  - `export function dropLastWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns an array that drops all elements in the given iterable until the last element that does not match the given predicate.
- **`dropWhile`** (function)
  - `export function dropWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns an array that drops all elements in the given iterable until the first element that does not match the given predicate.
- **`ExpandRecursively`** (type)
  - `export type ExpandRecursively<T> = T extends Record<PropertyKey, unknown> ? T extends infer O ? … }`
  - Force intellisense to expand the typing to hide merging typings
- **`filterEntries`** (function)
  - `export function filterEntries<T>( record: Readonly<Record<string, T>>, predicate: (entry: [string, T]) => boolean, ): Record<string, T>`
  - Returns a new record with all entries of the given record except the ones that do not match the given predicate.
- **`filterKeys`** (function)
  - `export function filterKeys<T>( record: Readonly<Record<string, T>>, predicate: (key: string) => boolean, ): Record<string, T>`
  - Returns a new record with all entries of the given record except the ones that have a key that does not match the given predicate.
- **`filterValues`** (function)
  - `export function filterValues<T>( record: Readonly<Record<string, T>>, predicate: (value: T) => boolean, ): Record<string, T>`
  - Returns a new record with all entries of the given record except the ones that have a value that does not match the given predicate.
- **`findSingle`** (function)
  - `export function findSingle<T>( array: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T \| undefined`
  - Returns an element if and only if that element is the only one matching the given condition. Returns undefined otherwise.
- **`firstNotNullishOf`** (function)
  - `export function firstNotNullishOf<T, O>( array: Iterable<T>, selector: (item: T, index: number) => O \| undefined \| null, ): NonNullable<O> \| undefined`
  - Applies the given selector to elements in the given array until a value is produced that is neither null nor undefined and returns that value. Returns undefined if no such value is produced.
- **`includesValue`** (function)
  - `export function includesValue<T>( record: Readonly<Record<string, T>>, value: T, ): boolean`
  - Returns true if the given value is part of the given object, otherwise it returns false.
- **`interleave`** (function)
  - `export function interleave<T extends unknown[]>( ...iterables: { [K in keyof T]: Iterable<T[K]> } ): T[number][]`
  - Returns all elements from the given iterables in round-robin order. Unlike zip, which stops at the shortest iterable and returns tuples, interleave continues until all input iterables are exhausted a…
- **`intersect`** (function)
  - `export function intersect<T>(...iterables: Iterable<T>[]): T[]`
  - Returns all distinct elements that appear at least once in each of the given iterables.
- **`invert`** (function)
  - `export function invert<T extends Record<PropertyKey, PropertyKey>>( record: Readonly<T>, ): InvertResult<T>`
  - Composes a new record with all keys and values inverted.
- **`invertBy`** (function)
  - `export function invertBy< R extends Record<PropertyKey, PropertyKey>, T extends (key: PropertyKey)`
  - Composes a new record with all keys and values inverted.
- **`InvertByResult`** (type)
  - `export type InvertByResult< T extends Record<PropertyKey, PropertyKey>, K extends keyof T, > = Record<PropertyKey, K[]>`
  - Return type for invertBy.
- **`InvertResult`** (type)
  - `export type InvertResult<T extends Record<PropertyKey, PropertyKey>> = … }`
  - Return type for invert.
- **`joinToString`** (function)
  - `export function joinToString<T>( array: Iterable<T>, selector: (el: T, index: number) => string, options: Readonly<JoinToStringOptions> = {}, ): string`
  - Transforms the elements in the given array to strings using the given selector. Joins the produced strings into one using the given separator and applying the given prefix and suffix to the whole str…
- **`JoinToStringOptions`** (type)
  - `export type JoinToStringOptions = … }`
  - Options for joinToString.
- **`mapEntries`** (function)
  - `export function mapEntries<T, O>( record: Readonly<Record<string, T>>, transformer: (entry: [string, T]) => [string, O], ): Record<string, O>`
  - Applies the given transformer to all entries in the given record and returns a new record containing the results.
- **`mapKeys`** (function)
  - `export function mapKeys<T>( record: Readonly<Record<string, T>>, transformer: (key: string) => string, ): Record<string, T>`
  - Applies the given transformer to all keys in the given record's entries and returns a new record containing the transformed entries.
- **`MapKeyType`** (type)
  - `export type MapKeyType<T> = T extends Map<infer K, unknown> ? K : never`
  - Get map values types
- **`mapNotNullish`** (function)
  - `export function mapNotNullish<T, O>( array: Iterable<T>, transformer: (el: T, index: number) => O, ): NonNullable<O>[]`
  - Returns a new array, containing all elements in the given array transformed using the given transformer, except the ones that were transformed to null or undefined.
- **`mapValues`** (function)
  - `export function mapValues<T, O, K extends string>( record: Readonly<Record<K, T>>, transformer: (value: T, key: K) => O, ): Record<K, O>`
  - Applies the given transformer to all values in the given record and returns a new record containing the resulting keys associated to the last value that produced them.
- **`MapValueType`** (type)
  - `export type MapValueType<T> = T extends Map<unknown, infer V> ? V : never`
  - Get map values types
- **`maxBy`** (function)
  - `export function maxBy<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): T \| undefined`
  - Returns the first element that is the largest value of the given function or undefined if there are no elements.
- **`maxOf`** (function)
  - `export function maxOf<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): number \| undefined`
  - Applies the given selector to all elements of the provided collection and returns the max value of all elements. If an empty array is provided the function will return undefined.
- **`maxWith`** (function)
  - `export function maxWith<T>( array: Iterable<T>, comparator: (a: T, b: T) => number, ): T \| undefined`
  - Returns the first element having the largest value according to the provided comparator or undefined if there are no elements.
- **`Merge`** (type)
  - `export type Merge< T, U, Options, X = & MergeRightOmitComplexes<T, U> & MergeAllRecords<T, U, Options> & (Options extends { sets: "replace" } ? PartialByType<U, Set<unknown>> : MergeAllSets<T, U>) & (Options extends { a…`
  - Merge two objects
- **`MergeAllArrays`** (type)
  - `export type MergeAllArrays< T, U, X = PartialByType<T, Array<unknown>>, Y = PartialByType<U, Array<unknown>>, Z = { [K in keyof X & keyof Y]: Array< ArrayValueType<X[K]> \| ArrayValueType<Y[K]> >; }, > = Z`
  - Merge all arrays types definitions from keys present in both objects
- **`MergeAllMaps`** (type)
  - `export type MergeAllMaps< T, U, X = PartialByType<T, Map<unknown, unknown>>, Y = PartialByType<U, Map<unknown, unknown>>, Z = { [K in keyof X & keyof Y]: Map< MapKeyType<X[K]> \| MapKeyType<Y[K]>, MapValueType<X[K]> \| Ma…`
  - Merge all maps types definitions from keys present in both objects
- **`MergeAllRecords`** (type)
  - `export type MergeAllRecords< T, U, Options, X = PartialByType<T, Record<PropertyKey, unknown>>, Y = PartialByType<U, Record<PropertyKey, unknown>>, Z = { [K in keyof X & keyof Y]: DeepMerge<X[K], Y[K], Options>; }, > = Z`
  - Merge all records types definitions from keys present in both objects
- **`MergeAllSets`** (type)
  - `export type MergeAllSets< T, U, X = PartialByType<T, Set<unknown>>, Y = PartialByType<U, Set<unknown>>, Z = { [K in keyof X & keyof Y]: Set<SetValueType<X[K]> \| SetValueType<Y[K]>>; }, > = Z`
  - Merge all sets types definitions from keys present in both objects
- **`MergeRightOmitComplexes`** (type)
  - `export type MergeRightOmitComplexes< T, U, X = ObjectXorKeys<T, U> & OmitComplexes<{ [K in keyof U]: U[K] }>, > = X`
  - Merge two objects, with left precedence
- **`MergingStrategy`** (type)
  - `export type MergingStrategy = "replace" \| "merge"`
  - Merging strategy
- **`minBy`** (function)
  - `export function minBy<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): T \| undefined`
  - Returns the first element that is the smallest value of the given function or undefined if there are no elements.
- **`minOf`** (function)
  - `export function minOf<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): number \| undefined`
  - Applies the given selector to all elements of the given collection and returns the min value of all elements. If an empty array is provided the function will return undefined.
- **`minWith`** (function)
  - `export function minWith<T>( array: Iterable<T>, comparator: (a: T, b: T) => number, ): T \| undefined`
  - Returns the first element having the smallest value according to the provided comparator or undefined if there are no elements.
- **`ObjectXorKeys`** (type)
  - `export type ObjectXorKeys< T, U, X = Omit<T, keyof U> & Omit<U, keyof T>, Y = { [K in keyof X]: X[K] }, > = Y`
  - Object with keys in either T or U but not in both
- **`omit`** (function)
  - `export function omit<T extends object, K extends keyof T>( obj: Readonly<T>, keys: readonly K[], ): Omit<T, K>`
  - Creates a new object by excluding the specified keys from the provided object.
- **`OmitComplexes`** (type)
  - `export type OmitComplexes<T> = Omit< T, keyof PartialByType< T, \| Map<unknown, unknown> \| Set<unknown> \| Array<unknown> \| Record<PropertyKey, unknown> > >`
  - Exclude map, sets and array from type
- **`Order`** (type)
  - `export type Order = "asc" \| "desc"`
  - Order option for SortByOptions.
- **`PartialByType`** (type)
  - `export type PartialByType<T, U> = … }`
  - Filter of keys matching a given type
- **`partition`** (function)
  - `export function partition<T, U extends T>( array: Iterable<T>, predicate: (el: T) => el is U, ): [U[], Exclude<T, U>[]]`
  - Returns a tuple of two arrays with the first one containing all elements in the given array that match the given predicate and the second one containing all that do not.
- **`partitionEntries`** (function)
  - `export function partitionEntries<T>( record: Readonly<Record<string, T>>, predicate: (entry: [string, T]) => boolean, ): [match: Record<string, T>, rest: Record<string, T>]`
  - Returns a tuple of two records with the first one containing all entries of the given record that match the given predicate and the second one containing all that do not.
- **`permutations`** (function)
  - `export function permutations<T>(inputArray: Iterable<T>): T[][]`
  - Builds all possible orders of all elements in the given array. Ignores equality of elements, meaning this will always return the same number of permutations for a given length of input.
- **`pick`** (function)
  - `export function pick<T extends object, const K extends keyof T>( obj: Readonly<T>, keys: readonly K[], ): Pick<T, K>`
  - Creates a new object by including the specified keys from the provided object.
- **`reduceGroups`** (function)
  - `export function reduceGroups<T, A>( record: Readonly<Record<string, ReadonlyArray<T>>>, reducer: (accumulator: A, current: T) => A, initialValue: A, ): Record<string, A>`
  - Applies the given reducer to each group in the given grouping, returning the results together with the respective group keys.
- **`runningReduce`** (function)
  - `export function runningReduce<T, O>( array: readonly T[], reducer: (accumulator: O, current: T, currentIndex: number) => O, initialValue: O, ): O[]`
  - Calls the given reducer on each element of the given collection, passing its result as the accumulator to the next respective call, starting with the given initialValue. Returns all intermediate accu…
- **`sample`** (function)
  - `export function sample<T>(iterable: Iterable<T>): T \| undefined`
  - Returns a random element from the given iterable.
- **`SetValueType`** (type)
  - `export type SetValueType<T> = T extends Set<infer V> ? V : never`
  - Get set values type
- **`slidingWindows`** (function)
  - `export function slidingWindows<T>( iterable: Iterable<T>, size: number, options: SlidingWindowsOptions = {}, ): T[][]`
  - Generates sliding views of the given iterable of the given size and returns an array containing all of them.
- **`SlidingWindowsOptions`** (interface)
  - `export interface SlidingWindowsOptions`
  - Options for slidingWindows.
- **`sortBy`** (function)
  - `export function sortBy<T>( iterator: Iterable<T>, selector: \| ((el: T, index: number) => number) \| ((el: T, index: number) => string) \| ((el: T, index: number) => bigint) \| ((el: T, index: number) => Date), options?: So…`
  - Returns all elements in the given collection, sorted by their result using the given selector. The selector function is called only once for each element. Ascending or descending order can be specifi…
- **`SortByOptions`** (type)
  - `export type SortByOptions = … }`
  - Options for sortBy.
- **`sumOf`** (function)
  - `export function sumOf<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): number`
  - Applies the given selector to all elements in the given collection and calculates the sum of the results.
- **`takeLastWhile`** (function)
  - `export function takeLastWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns all elements in the given iterable after the last element that does not match the given predicate.
- **`takeWhile`** (function)
  - `export function takeWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns all elements in the given collection until the first element that does not match the given predicate.
- **`union`** (function)
  - `export function union<T>(...arrays: Iterable<T>[]): T[]`
  - Returns all distinct elements that appear in any of the given arrays.
- **`unzip`** (function)
  - `export function unzip<T, U>(pairs: readonly [T, U][]): [T[], U[]]`
  - Builds two separate arrays from the given array of 2-tuples, with the first returned array holding all first tuple elements and the second one holding all the second elements.
- **`withoutAll`** (function)
  - `export function withoutAll<T>(iterable: Iterable<T>, values: Iterable<T>): T[]`
  - Returns an array excluding all given values from an iterable.
- **`zip`** (function)
  - `export function zip<T extends unknown[]>( ...iterables: { [K in keyof T]: Iterable<T[K]> } ): T[]`
  - Builds N-tuples of elements from the given N iterables with matching indices, stopping when the shortest iterable is exhausted.

## `$std/collections/aggregate-groups`

- **`aggregateGroups`** (function)
  - `export function aggregateGroups<T, A>( record: Readonly<Record<string, ReadonlyArray<T>>>, aggregator: (current: T, key: string, first: boolean, accumulator?: A) => A, ): Record<string, A>`
  - Applies the given aggregator to each group in the given grouping, returning the results together with the respective group keys

## `$std/collections/associate-by`

- **`associateBy`** (function)
  - `export function associateBy<T>( array: Iterable<T>, selector: (el: T) => string, ): Record<string, T>`
  - Creates a record by associating each element of the input array with a key generated by the selector function.

## `$std/collections/associate-with`

- **`associateWith`** (function)
  - `export function associateWith<T>( array: Iterable<string>, selector: (key: string) => T, ): Record<string, T>`
  - Associates each string element of an array with a value returned by a selector function.

## `$std/collections/binary-search`

> ⚠️ 上游为不稳定模块 `@std/collections/unstable-binary-search`，在 $std 中以稳定名字 `collections/binary-search` 提供。

- **`binarySearch`** (function)
  - `export function binarySearch< T extends ArrayLike<number> \| ArrayLike<bigint> \| ArrayLike<string>, >( haystack: T, needle: T[number], ): number`
  - Binary search within a sorted array, allowing for non-exact matches.

## `$std/collections/chunk`

- **`chunk`** (function)
  - `export function chunk<T>( iterable: Iterable<T>, size: number, ): T[][]`
  - Splits the given array into an array of chunks of the given size and returns them.

## `$std/collections/cycle`

> ⚠️ 上游为不稳定模块 `@std/collections/unstable-cycle`，在 $std 中以稳定名字 `collections/cycle` 提供。

- **`cycle`** (generator)
  - `export function* cycle<T>(iterable: Iterable<T>): Generator<T>`
  - Creates an iterator that cycles indefinitely over the provided iterable.

## `$std/collections/deep-merge`

- **`ArrayValueType`** (type)
  - `export type ArrayValueType<T> = T extends Array<infer V> ? V : never`
  - Get array values type
- **`deepMerge`** (function)
  - `export function deepMerge< T extends Record<PropertyKey, unknown>, >( record: Partial<Readonly<T>>, other: Partial<Readonly<T>>, options?: Readonly<DeepMergeOptions>, ): T`
  - Merges the two given records, recursively merging any nested records with the second collection overriding the first in case of conflict.
- **`DeepMerge`** (type)
  - `export type DeepMerge< T, U, Options = Record<string, MergingStrategy>, > = [T, U] extends [Record<PropertyKey, unknown>, Record<PropertyKey, unknown>] ? Merge<T, U, Options> : T \| U`
  - Merge deeply two objects
- **`DeepMergeOptions`** (type)
  - `export type DeepMergeOptions = … }`
  - Options for deepMerge.
- **`ExpandRecursively`** (type)
  - `export type ExpandRecursively<T> = T extends Record<PropertyKey, unknown> ? T extends infer O ? … }`
  - Force intellisense to expand the typing to hide merging typings
- **`MapKeyType`** (type)
  - `export type MapKeyType<T> = T extends Map<infer K, unknown> ? K : never`
  - Get map values types
- **`MapValueType`** (type)
  - `export type MapValueType<T> = T extends Map<unknown, infer V> ? V : never`
  - Get map values types
- **`Merge`** (type)
  - `export type Merge< T, U, Options, X = & MergeRightOmitComplexes<T, U> & MergeAllRecords<T, U, Options> & (Options extends { sets: "replace" } ? PartialByType<U, Set<unknown>> : MergeAllSets<T, U>) & (Options extends { a…`
  - Merge two objects
- **`MergeAllArrays`** (type)
  - `export type MergeAllArrays< T, U, X = PartialByType<T, Array<unknown>>, Y = PartialByType<U, Array<unknown>>, Z = { [K in keyof X & keyof Y]: Array< ArrayValueType<X[K]> \| ArrayValueType<Y[K]> >; }, > = Z`
  - Merge all arrays types definitions from keys present in both objects
- **`MergeAllMaps`** (type)
  - `export type MergeAllMaps< T, U, X = PartialByType<T, Map<unknown, unknown>>, Y = PartialByType<U, Map<unknown, unknown>>, Z = { [K in keyof X & keyof Y]: Map< MapKeyType<X[K]> \| MapKeyType<Y[K]>, MapValueType<X[K]> \| Ma…`
  - Merge all maps types definitions from keys present in both objects
- **`MergeAllRecords`** (type)
  - `export type MergeAllRecords< T, U, Options, X = PartialByType<T, Record<PropertyKey, unknown>>, Y = PartialByType<U, Record<PropertyKey, unknown>>, Z = { [K in keyof X & keyof Y]: DeepMerge<X[K], Y[K], Options>; }, > = Z`
  - Merge all records types definitions from keys present in both objects
- **`MergeAllSets`** (type)
  - `export type MergeAllSets< T, U, X = PartialByType<T, Set<unknown>>, Y = PartialByType<U, Set<unknown>>, Z = { [K in keyof X & keyof Y]: Set<SetValueType<X[K]> \| SetValueType<Y[K]>>; }, > = Z`
  - Merge all sets types definitions from keys present in both objects
- **`MergeRightOmitComplexes`** (type)
  - `export type MergeRightOmitComplexes< T, U, X = ObjectXorKeys<T, U> & OmitComplexes<{ [K in keyof U]: U[K] }>, > = X`
  - Merge two objects, with left precedence
- **`MergingStrategy`** (type)
  - `export type MergingStrategy = "replace" \| "merge"`
  - Merging strategy
- **`ObjectXorKeys`** (type)
  - `export type ObjectXorKeys< T, U, X = Omit<T, keyof U> & Omit<U, keyof T>, Y = { [K in keyof X]: X[K] }, > = Y`
  - Object with keys in either T or U but not in both
- **`OmitComplexes`** (type)
  - `export type OmitComplexes<T> = Omit< T, keyof PartialByType< T, \| Map<unknown, unknown> \| Set<unknown> \| Array<unknown> \| Record<PropertyKey, unknown> > >`
  - Exclude map, sets and array from type
- **`PartialByType`** (type)
  - `export type PartialByType<T, U> = … }`
  - Filter of keys matching a given type
- **`SetValueType`** (type)
  - `export type SetValueType<T> = T extends Set<infer V> ? V : never`
  - Get set values type

## `$std/collections/distinct`

- **`distinct`** (function)
  - `export function distinct<T>(array: Iterable<T>): T[]`
  - Returns all distinct elements in the given array, preserving order by first occurrence.

## `$std/collections/distinct-by`

- **`distinctBy`** (function)
  - `export function distinctBy<T, D>( array: Iterable<T>, discriminator: (el: T, index: number) => D, ): T[]`
  - Returns all elements in the given array that produce a unique value using the given discriminator, with the first matching occurrence retained.

## `$std/collections/drop-last-while`

- **`dropLastWhile`** (function)
  - `export function dropLastWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns an array that drops all elements in the given iterable until the last element that does not match the given predicate.

## `$std/collections/drop-while`

- **`dropWhile`** (function)
  - `export function dropWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns an array that drops all elements in the given iterable until the first element that does not match the given predicate.

## `$std/collections/filter-entries`

- **`filterEntries`** (function)
  - `export function filterEntries<T>( record: Readonly<Record<string, T>>, predicate: (entry: [string, T]) => boolean, ): Record<string, T>`
  - Returns a new record with all entries of the given record except the ones that do not match the given predicate.

## `$std/collections/filter-keys`

- **`filterKeys`** (function)
  - `export function filterKeys<T>( record: Readonly<Record<string, T>>, predicate: (key: string) => boolean, ): Record<string, T>`
  - Returns a new record with all entries of the given record except the ones that have a key that does not match the given predicate.

## `$std/collections/filter-values`

- **`filterValues`** (function)
  - `export function filterValues<T>( record: Readonly<Record<string, T>>, predicate: (value: T) => boolean, ): Record<string, T>`
  - Returns a new record with all entries of the given record except the ones that have a value that does not match the given predicate.

## `$std/collections/find-single`

- **`findSingle`** (function)
  - `export function findSingle<T>( array: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T \| undefined`
  - Returns an element if and only if that element is the only one matching the given condition. Returns undefined otherwise.

## `$std/collections/first-not-nullish-of`

- **`firstNotNullishOf`** (function)
  - `export function firstNotNullishOf<T, O>( array: Iterable<T>, selector: (item: T, index: number) => O \| undefined \| null, ): NonNullable<O> \| undefined`
  - Applies the given selector to elements in the given array until a value is produced that is neither null nor undefined and returns that value. Returns undefined if no such value is produced.

## `$std/collections/includes-value`

- **`includesValue`** (function)
  - `export function includesValue<T>( record: Readonly<Record<string, T>>, value: T, ): boolean`
  - Returns true if the given value is part of the given object, otherwise it returns false.

## `$std/collections/interleave`

- **`interleave`** (function)
  - `export function interleave<T extends unknown[]>( ...iterables: { [K in keyof T]: Iterable<T[K]> } ): T[number][]`
  - Returns all elements from the given iterables in round-robin order. Unlike zip, which stops at the shortest iterable and returns tuples, interleave continues until all input iterables are exhausted a…

## `$std/collections/intersect`

- **`intersect`** (function)
  - `export function intersect<T>(...iterables: Iterable<T>[]): T[]`
  - Returns all distinct elements that appear at least once in each of the given iterables.

## `$std/collections/invert`

- **`invert`** (function)
  - `export function invert<T extends Record<PropertyKey, PropertyKey>>( record: Readonly<T>, ): InvertResult<T>`
  - Composes a new record with all keys and values inverted.
- **`InvertResult`** (type)
  - `export type InvertResult<T extends Record<PropertyKey, PropertyKey>> = … }`
  - Return type for invert.

## `$std/collections/invert-by`

- **`invertBy`** (function)
  - `export function invertBy< R extends Record<PropertyKey, PropertyKey>, T extends (key: PropertyKey)`
  - Composes a new record with all keys and values inverted.
- **`InvertByResult`** (type)
  - `export type InvertByResult< T extends Record<PropertyKey, PropertyKey>, K extends keyof T, > = Record<PropertyKey, K[]>`
  - Return type for invertBy.

## `$std/collections/join-to-string`

- **`joinToString`** (function)
  - `export function joinToString<T>( array: Iterable<T>, selector: (el: T, index: number) => string, options: Readonly<JoinToStringOptions> = {}, ): string`
  - Transforms the elements in the given array to strings using the given selector. Joins the produced strings into one using the given separator and applying the given prefix and suffix to the whole str…
- **`JoinToStringOptions`** (type)
  - `export type JoinToStringOptions = … }`
  - Options for joinToString.

## `$std/collections/map-entries`

- **`mapEntries`** (function)
  - `export function mapEntries<T, O>( record: Readonly<Record<string, T>>, transformer: (entry: [string, T]) => [string, O], ): Record<string, O>`
  - Applies the given transformer to all entries in the given record and returns a new record containing the results.

## `$std/collections/map-keys`

- **`mapKeys`** (function)
  - `export function mapKeys<T>( record: Readonly<Record<string, T>>, transformer: (key: string) => string, ): Record<string, T>`
  - Applies the given transformer to all keys in the given record's entries and returns a new record containing the transformed entries.

## `$std/collections/map-not-nullish`

- **`mapNotNullish`** (function)
  - `export function mapNotNullish<T, O>( array: Iterable<T>, transformer: (el: T, index: number) => O, ): NonNullable<O>[]`
  - Returns a new array, containing all elements in the given array transformed using the given transformer, except the ones that were transformed to null or undefined.

## `$std/collections/map-values`

- **`mapValues`** (function)
  - `export function mapValues<T, O, K extends string>( record: Readonly<Record<K, T>>, transformer: (value: T, key: K) => O, ): Record<K, O>`
  - Applies the given transformer to all values in the given record and returns a new record containing the resulting keys associated to the last value that produced them.

## `$std/collections/max-by`

- **`maxBy`** (function)
  - `export function maxBy<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): T \| undefined`
  - Returns the first element that is the largest value of the given function or undefined if there are no elements.

## `$std/collections/max-of`

- **`maxOf`** (function)
  - `export function maxOf<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): number \| undefined`
  - Applies the given selector to all elements of the provided collection and returns the max value of all elements. If an empty array is provided the function will return undefined.

## `$std/collections/max-with`

- **`maxWith`** (function)
  - `export function maxWith<T>( array: Iterable<T>, comparator: (a: T, b: T) => number, ): T \| undefined`
  - Returns the first element having the largest value according to the provided comparator or undefined if there are no elements.

## `$std/collections/min-by`

- **`minBy`** (function)
  - `export function minBy<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): T \| undefined`
  - Returns the first element that is the smallest value of the given function or undefined if there are no elements.

## `$std/collections/min-of`

- **`minOf`** (function)
  - `export function minOf<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): number \| undefined`
  - Applies the given selector to all elements of the given collection and returns the min value of all elements. If an empty array is provided the function will return undefined.

## `$std/collections/min-with`

- **`minWith`** (function)
  - `export function minWith<T>( array: Iterable<T>, comparator: (a: T, b: T) => number, ): T \| undefined`
  - Returns the first element having the smallest value according to the provided comparator or undefined if there are no elements.

## `$std/collections/omit`

- **`omit`** (function)
  - `export function omit<T extends object, K extends keyof T>( obj: Readonly<T>, keys: readonly K[], ): Omit<T, K>`
  - Creates a new object by excluding the specified keys from the provided object.

## `$std/collections/partition`

- **`partition`** (function)
  - `export function partition<T, U extends T>( array: Iterable<T>, predicate: (el: T) => el is U, ): [U[], Exclude<T, U>[]]`
  - Returns a tuple of two arrays with the first one containing all elements in the given array that match the given predicate and the second one containing all that do not.

## `$std/collections/partition-entries`

- **`partitionEntries`** (function)
  - `export function partitionEntries<T>( record: Readonly<Record<string, T>>, predicate: (entry: [string, T]) => boolean, ): [match: Record<string, T>, rest: Record<string, T>]`
  - Returns a tuple of two records with the first one containing all entries of the given record that match the given predicate and the second one containing all that do not.

## `$std/collections/permutations`

- **`permutations`** (function)
  - `export function permutations<T>(inputArray: Iterable<T>): T[][]`
  - Builds all possible orders of all elements in the given array. Ignores equality of elements, meaning this will always return the same number of permutations for a given length of input.

## `$std/collections/pick`

- **`pick`** (function)
  - `export function pick<T extends object, const K extends keyof T>( obj: Readonly<T>, keys: readonly K[], ): Pick<T, K>`
  - Creates a new object by including the specified keys from the provided object.

## `$std/collections/reduce-groups`

- **`reduceGroups`** (function)
  - `export function reduceGroups<T, A>( record: Readonly<Record<string, ReadonlyArray<T>>>, reducer: (accumulator: A, current: T) => A, initialValue: A, ): Record<string, A>`
  - Applies the given reducer to each group in the given grouping, returning the results together with the respective group keys.

## `$std/collections/running-reduce`

- **`runningReduce`** (function)
  - `export function runningReduce<T, O>( array: readonly T[], reducer: (accumulator: O, current: T, currentIndex: number) => O, initialValue: O, ): O[]`
  - Calls the given reducer on each element of the given collection, passing its result as the accumulator to the next respective call, starting with the given initialValue. Returns all intermediate accu…

## `$std/collections/sample`

- **`sample`** (function)
  - `export function sample<T>(iterable: Iterable<T>): T \| undefined`
  - Returns a random element from the given iterable.

## `$std/collections/sliding-windows`

- **`slidingWindows`** (function)
  - `export function slidingWindows<T>( iterable: Iterable<T>, size: number, options: SlidingWindowsOptions = {}, ): T[][]`
  - Generates sliding views of the given iterable of the given size and returns an array containing all of them.
- **`SlidingWindowsOptions`** (interface)
  - `export interface SlidingWindowsOptions`
  - Options for slidingWindows.

## `$std/collections/sort-by`

- **`Order`** (type)
  - `export type Order = "asc" \| "desc"`
  - Order option for SortByOptions.
- **`sortBy`** (function)
  - `export function sortBy<T>( iterator: Iterable<T>, selector: \| ((el: T, index: number) => number) \| ((el: T, index: number) => string) \| ((el: T, index: number) => bigint) \| ((el: T, index: number) => Date), options?: So…`
  - Returns all elements in the given collection, sorted by their result using the given selector. The selector function is called only once for each element. Ascending or descending order can be specifi…
- **`SortByOptions`** (type)
  - `export type SortByOptions = … }`
  - Options for sortBy.

## `$std/collections/sum-of`

- **`sumOf`** (function)
  - `export function sumOf<T>( array: Iterable<T>, selector: (el: T, index: number) => number, ): number`
  - Applies the given selector to all elements in the given collection and calculates the sum of the results.

## `$std/collections/take-last-while`

- **`takeLastWhile`** (function)
  - `export function takeLastWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns all elements in the given iterable after the last element that does not match the given predicate.

## `$std/collections/take-while`

- **`takeWhile`** (function)
  - `export function takeWhile<T>( iterable: Iterable<T>, predicate: (el: T, index: number) => boolean, ): T[]`
  - Returns all elements in the given collection until the first element that does not match the given predicate.

## `$std/collections/union`

- **`union`** (function)
  - `export function union<T>(...arrays: Iterable<T>[]): T[]`
  - Returns all distinct elements that appear in any of the given arrays.

## `$std/collections/unzip`

- **`unzip`** (function)
  - `export function unzip<T, U>(pairs: readonly [T, U][]): [T[], U[]]`
  - Builds two separate arrays from the given array of 2-tuples, with the first returned array holding all first tuple elements and the second one holding all the second elements.

## `$std/collections/without-all`

- **`withoutAll`** (function)
  - `export function withoutAll<T>(iterable: Iterable<T>, values: Iterable<T>): T[]`
  - Returns an array excluding all given values from an iterable.

## `$std/collections/zip`

- **`zip`** (function)
  - `export function zip<T extends unknown[]>( ...iterables: { [K in keyof T]: Iterable<T[K]> } ): T[]`
  - Builds N-tuples of elements from the given N iterables with matching indices, stopping when the shortest iterable is exhausted.
