# `$std/data-structures` — @std/data-structures@1.1.3

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/data_structures
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Data structures for use in algorithms and other data manipulation.

导入：`import {...} from "$std/data-structures";`　别名：`jsr:@g9wp/std@^0.1.5/data-structures`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/data-structures` | `@std/data-structures` + `@std/data-structures/unstable-bidirectional-map` + `@std/data-structures/unstable-2d-array` + `@std/data-structures/unstable-rolling-counter` + `@std/data-structures/unstable-indexed-heap` + `@std/data-structures/unstable-multimap` | `data_structures/mod.ts`, `data_structures/unstable_bidirectional_map.ts`, `data_structures/unstable_2d_array.ts`, `data_structures/unstable_rolling_counter.ts`, `data_structures/unstable_indexed_heap.ts`, `data_structures/unstable_multimap.ts` | 16 |
| `$std/data-structures/2d-array` | `@std/data-structures/unstable-2d-array` | `data_structures/unstable_2d_array.ts` | 1 |
| `$std/data-structures/bidirectional-map` | `@std/data-structures/unstable-bidirectional-map` | `data_structures/unstable_bidirectional_map.ts` | 1 |
| `$std/data-structures/binary-heap` | `@std/data-structures/binary-heap` | `data_structures/binary_heap.ts` | 1 |
| `$std/data-structures/binary-search-tree` | `@std/data-structures/binary-search-tree` | `data_structures/binary_search_tree.ts` | 1 |
| `$std/data-structures/comparators` | `@std/data-structures/comparators` | `data_structures/comparators.ts` | 2 |
| `$std/data-structures/deque` | `@std/data-structures/deque` | `data_structures/deque.ts` | 2 |
| `$std/data-structures/indexed-heap` | `@std/data-structures/unstable-indexed-heap` | `data_structures/unstable_indexed_heap.ts` | 3 |
| `$std/data-structures/multimap` | `@std/data-structures/unstable-multimap` | `data_structures/unstable_multimap.ts` | 1 |
| `$std/data-structures/red-black-tree` | `@std/data-structures/red-black-tree` | `data_structures/red_black_tree.ts` | 1 |
| `$std/data-structures/rolling-counter` | `@std/data-structures/unstable-rolling-counter` | `data_structures/unstable_rolling_counter.ts` | 3 |

## `$std/data-structures`

16 个导出符号：

- **`ascend`** (function)
  - `export function ascend<T>(a: T, b: T): -1 \| 0 \| 1`
  - Compare two values in ascending order using JavaScript's built in comparison operators.
- **`BidirectionalMap`** (class)
  - `export class BidirectionalMap<K, V> extends Map<K, V>`
  - An extension of Map that allows lookup by both key and value.
- **`BinaryHeap`** (class)
  - `export class BinaryHeap<T> implements Iterable<T>`
  - A priority queue implemented with a binary heap. The heap is in descending order by default, using JavaScript's built-in comparison operators to sort the values.
- **`BinarySearchTree`** (class)
  - `export class BinarySearchTree<T> implements Iterable<T>`
  - An unbalanced binary search tree. The values are in ascending order by default, using JavaScript's built-in comparison operators to sort the values.
- **`D2Array`** (class)
  - `export class D2Array<T> implements Iterable<T[]>`
  - A 2d array. Unlike a normal array, it does not grow dynamically, and needs to be manually resized with the resize method. It can never have the width or height be 0.
- **`Deque`** (class)
  - `export class Deque<T> implements Iterable<T>, ReadonlyDeque<T>`
  - A double-ended queue backed by a ring buffer. Pushing, popping, and indexed access stay fast as the deque grows.
- **`descend`** (function)
  - `export function descend<T>(a: T, b: T): -1 \| 0 \| 1`
  - Compare two values in descending order using JavaScript's built in comparison operators.
- **`HeapEntry`** (interface)
  - `export interface HeapEntry<K, P = number>`
  - A key-priority pair returned by IndexedHeap methods.
- **`IndexedHeap`** (class)
  - `export class IndexedHeap<K, P = number> implements Iterable<HeapEntry<K, P>>`
  - A priority queue that supports looking up, removing, and re-prioritizing entries by key. Each entry is a unique (key, priority) pair. The entry with the smallest priority (under the comparator) is al…
- **`MultiMap`** (class)
  - `export class MultiMap<K, V> implements Iterable<[K, V]>`
  - A map that associates each key with an ordered list of values.
- **`ReadonlyDeque`** (type)
  - `export type ReadonlyDeque<T> = Pick< Deque<T>, \| "length" \| "isEmpty" \| "peekFront" \| "peekBack" \| "at" \| "includes" \| "find" \| "findIndex" \| "toArray" \| typeof Symbol.iterator \| "reversed" \| typeof Symbol.toStringTag >`
  - Read-only view of a Deque. Strips all mutation methods, following the ReadonlyArray / ReadonlyMap / ReadonlySet pattern. A Deque<T> is directly assignable to ReadonlyDeque<T>.
- **`ReadonlyIndexedHeap`** (type)
  - `export type ReadonlyIndexedHeap<K, P = number> = Pick< IndexedHeap<K, P>, \| "peek" \| "peekKey" \| "peekPriority" \| "has" \| "getPriority" \| "size" \| "isEmpty" \| "toArray" \| typeof Symbol.iterator >`
  - Read-only view of an IndexedHeap. Exposes query and iteration methods, hiding all methods that modify the heap. Follows the same pattern as ReadonlyMap and ReadonlySet.
- **`ReadonlyRollingCounter`** (type)
  - `export type ReadonlyRollingCounter = Pick< RollingCounter, \| "current" \| "total" \| "segmentCount" \| "at" \| "toArray" \| "toJSON" \| typeof Symbol.iterator \| typeof Symbol.toStringTag >`
  - Read-only view of a RollingCounter. Strips all mutation methods, following the ReadonlyArray / ReadonlyMap / ReadonlySet pattern. A RollingCounter is directly assignable to ReadonlyRollingCounter.
- **`RedBlackTree`** (class)
  - `export class RedBlackTree<T> extends BinarySearchTree<T>`
  - A red-black tree. This is a kind of self-balancing binary search tree, extending BinarySearchTree. The values are in ascending order by default, using JavaScript's built-in comparison operators to so…
- **`RollingCounter`** (class)
  - `export class RollingCounter implements Iterable<number>, ReadonlyRollingCounter`
  - A fixed-size rolling counter.
- **`RollingCounterSnapshot`** (interface)
  - `export interface RollingCounterSnapshot`
  - A serializable snapshot of a RollingCounter's state.

## `$std/data-structures/2d-array`

> ⚠️ 上游为不稳定模块 `@std/data-structures/unstable-2d-array`，在 $std 中以稳定名字 `data-structures/2d-array` 提供。

- **`D2Array`** (class)
  - `export class D2Array<T> implements Iterable<T[]>`
  - A 2d array. Unlike a normal array, it does not grow dynamically, and needs to be manually resized with the resize method. It can never have the width or height be 0.

## `$std/data-structures/bidirectional-map`

> ⚠️ 上游为不稳定模块 `@std/data-structures/unstable-bidirectional-map`，在 $std 中以稳定名字 `data-structures/bidirectional-map` 提供。

- **`BidirectionalMap`** (class)
  - `export class BidirectionalMap<K, V> extends Map<K, V>`
  - An extension of Map that allows lookup by both key and value.

## `$std/data-structures/binary-heap`

- **`BinaryHeap`** (class)
  - `export class BinaryHeap<T> implements Iterable<T>`
  - A priority queue implemented with a binary heap. The heap is in descending order by default, using JavaScript's built-in comparison operators to sort the values.

## `$std/data-structures/binary-search-tree`

- **`BinarySearchTree`** (class)
  - `export class BinarySearchTree<T> implements Iterable<T>`
  - An unbalanced binary search tree. The values are in ascending order by default, using JavaScript's built-in comparison operators to sort the values.

## `$std/data-structures/comparators`

- **`ascend`** (function)
  - `export function ascend<T>(a: T, b: T): -1 \| 0 \| 1`
  - Compare two values in ascending order using JavaScript's built in comparison operators.
- **`descend`** (function)
  - `export function descend<T>(a: T, b: T): -1 \| 0 \| 1`
  - Compare two values in descending order using JavaScript's built in comparison operators.

## `$std/data-structures/deque`

- **`Deque`** (class)
  - `export class Deque<T> implements Iterable<T>, ReadonlyDeque<T>`
  - A double-ended queue backed by a ring buffer. Pushing, popping, and indexed access stay fast as the deque grows.
- **`ReadonlyDeque`** (type)
  - `export type ReadonlyDeque<T> = Pick< Deque<T>, \| "length" \| "isEmpty" \| "peekFront" \| "peekBack" \| "at" \| "includes" \| "find" \| "findIndex" \| "toArray" \| typeof Symbol.iterator \| "reversed" \| typeof Symbol.toStringTag >`
  - Read-only view of a Deque. Strips all mutation methods, following the ReadonlyArray / ReadonlyMap / ReadonlySet pattern. A Deque<T> is directly assignable to ReadonlyDeque<T>.

## `$std/data-structures/indexed-heap`

> ⚠️ 上游为不稳定模块 `@std/data-structures/unstable-indexed-heap`，在 $std 中以稳定名字 `data-structures/indexed-heap` 提供。

- **`HeapEntry`** (interface)
  - `export interface HeapEntry<K, P = number>`
  - A key-priority pair returned by IndexedHeap methods.
- **`IndexedHeap`** (class)
  - `export class IndexedHeap<K, P = number> implements Iterable<HeapEntry<K, P>>`
  - A priority queue that supports looking up, removing, and re-prioritizing entries by key. Each entry is a unique (key, priority) pair. The entry with the smallest priority (under the comparator) is al…
- **`ReadonlyIndexedHeap`** (type)
  - `export type ReadonlyIndexedHeap<K, P = number> = Pick< IndexedHeap<K, P>, \| "peek" \| "peekKey" \| "peekPriority" \| "has" \| "getPriority" \| "size" \| "isEmpty" \| "toArray" \| typeof Symbol.iterator >`
  - Read-only view of an IndexedHeap. Exposes query and iteration methods, hiding all methods that modify the heap. Follows the same pattern as ReadonlyMap and ReadonlySet.

## `$std/data-structures/multimap`

> ⚠️ 上游为不稳定模块 `@std/data-structures/unstable-multimap`，在 $std 中以稳定名字 `data-structures/multimap` 提供。

- **`MultiMap`** (class)
  - `export class MultiMap<K, V> implements Iterable<[K, V]>`
  - A map that associates each key with an ordered list of values.

## `$std/data-structures/red-black-tree`

- **`RedBlackTree`** (class)
  - `export class RedBlackTree<T> extends BinarySearchTree<T>`
  - A red-black tree. This is a kind of self-balancing binary search tree, extending BinarySearchTree. The values are in ascending order by default, using JavaScript's built-in comparison operators to so…

## `$std/data-structures/rolling-counter`

> ⚠️ 上游为不稳定模块 `@std/data-structures/unstable-rolling-counter`，在 $std 中以稳定名字 `data-structures/rolling-counter` 提供。

- **`ReadonlyRollingCounter`** (type)
  - `export type ReadonlyRollingCounter = Pick< RollingCounter, \| "current" \| "total" \| "segmentCount" \| "at" \| "toArray" \| "toJSON" \| typeof Symbol.iterator \| typeof Symbol.toStringTag >`
  - Read-only view of a RollingCounter. Strips all mutation methods, following the ReadonlyArray / ReadonlyMap / ReadonlySet pattern. A RollingCounter is directly assignable to ReadonlyRollingCounter.
- **`RollingCounter`** (class)
  - `export class RollingCounter implements Iterable<number>, ReadonlyRollingCounter`
  - A fixed-size rolling counter.
- **`RollingCounterSnapshot`** (interface)
  - `export interface RollingCounterSnapshot`
  - A serializable snapshot of a RollingCounter's state.
