# `$std/random` — @std/random@0.1.5

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/random
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for generating random numbers.

导入：`import {...} from "$std/random";`　别名：`jsr:@g9wp/std@^0.1.5/random`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/random` | `@std/random` | `random/mod.ts` | 13 |
| `$std/random/between` | `@std/random/between` | `random/between.ts` | 3 |
| `$std/random/get-random-values-seeded` | `@std/random/get-random-values-seeded` | `random/get_random_values_seeded.ts` | 3 |
| `$std/random/integer-between` | `@std/random/integer-between` | `random/integer_between.ts` | 3 |
| `$std/random/next-float-64` | `@std/random/next-float-64` | `random/next_float_64.ts` | 1 |
| `$std/random/sample` | `@std/random/sample` | `random/sample.ts` | 4 |
| `$std/random/seeded` | `@std/random/seeded` | `random/seeded.ts` | 2 |
| `$std/random/shuffle` | `@std/random/shuffle` | `random/shuffle.ts` | 3 |

## `$std/random`

13 个导出符号：

- **`getRandomValuesSeeded`** (function)
  - `export function getRandomValuesSeeded( seed: bigint, ): RandomValueGenerator`
  - Creates a pseudo-random value generator that populates typed arrays, based on the given seed. The algorithm used for generation is PCG32.
- **`IntegerTypedArray`** (type)
  - `export type IntegerTypedArray = \| ReturnType<Int8Array["slice"]> \| ReturnType<Int16Array["slice"]> \| ReturnType<Int32Array["slice"]> \| ReturnType<Uint8Array["slice"]> \| ReturnType<Uint16Array["slice"]> \| ReturnType<Uint…`
  - An integer typed array
- **`nextFloat64`** (function)
  - `export function nextFloat64(getRandomValues: RandomValueGenerator): number`
  - Get a float64 in the range [0, 1) from a random value generator.
- **`Prng`** (re-export)
- **`Prng`** (type)
  - `export type Prng = typeof Math.random`
  - A pseudo-random number generator implementing the same contract as Math.random, i.e. taking zero arguments and returning a random number in the range [0, 1). The behavior of a function that accepts a…
- **`randomBetween`** (function)
  - `export function randomBetween( min: number, max: number, options?: RandomOptions, ): number`
  - Generates a random number between the provided minimum and maximum values.
- **`randomIntegerBetween`** (function)
  - `export function randomIntegerBetween( min: number, max: number, options?: RandomOptions, ): number`
  - Generates a random integer between the provided minimum and maximum values.
- **`RandomOptions`** (re-export)
- **`randomSeeded`** (function)
  - `export function randomSeeded(seed: bigint): Prng`
  - Creates a pseudo-random number generator that generates random numbers in the range [0, 1), based on the given seed, with 32 bits of entropy. The algorithm used for generation is PCG32.
- **`RandomValueGenerator`** (type)
  - `export type RandomValueGenerator = <T extends IntegerTypedArray>(array: T) => T; export type RandomOptions = { prng?: Prng; };`
  - A pseudo-random number generator implementing the same contract as crypto.getRandomValues, i.e. taking a typed array and mutating it by filling it with random bytes, returning the mutated typed array…
- **`sample`** (function)
  - `export function sample<T>( array: ArrayLike<T>, options?: SampleOptions, ): T \| undefined`
  - Returns a random element from the given array.
- **`SampleOptions`** (type)
  - `export type SampleOptions = RandomOptions & … }`
  - Options for sample.
- **`shuffle`** (function)
  - `export function shuffle<T>( items: readonly T[], options?: RandomOptions, ): T[]`
  - Shuffles the provided array, returning a copy and without modifying the original array.

## `$std/random/between`

- **`Prng`** (re-export)
- **`randomBetween`** (function)
  - `export function randomBetween( min: number, max: number, options?: RandomOptions, ): number`
  - Generates a random number between the provided minimum and maximum values.
- **`RandomOptions`** (re-export)

## `$std/random/get-random-values-seeded`

- **`getRandomValuesSeeded`** (function)
  - `export function getRandomValuesSeeded( seed: bigint, ): RandomValueGenerator`
  - Creates a pseudo-random value generator that populates typed arrays, based on the given seed. The algorithm used for generation is PCG32.
- **`IntegerTypedArray`** (type)
  - `export type IntegerTypedArray = \| ReturnType<Int8Array["slice"]> \| ReturnType<Int16Array["slice"]> \| ReturnType<Int32Array["slice"]> \| ReturnType<Uint8Array["slice"]> \| ReturnType<Uint16Array["slice"]> \| ReturnType<Uint…`
  - An integer typed array
- **`RandomValueGenerator`** (type)
  - `export type RandomValueGenerator = <T extends IntegerTypedArray>(array: T) => T; export type RandomOptions = { prng?: Prng; };`
  - A pseudo-random number generator implementing the same contract as crypto.getRandomValues, i.e. taking a typed array and mutating it by filling it with random bytes, returning the mutated typed array…

## `$std/random/integer-between`

- **`Prng`** (re-export)
- **`randomIntegerBetween`** (function)
  - `export function randomIntegerBetween( min: number, max: number, options?: RandomOptions, ): number`
  - Generates a random integer between the provided minimum and maximum values.
- **`RandomOptions`** (re-export)

## `$std/random/next-float-64`

- **`nextFloat64`** (function)
  - `export function nextFloat64(getRandomValues: RandomValueGenerator): number`
  - Get a float64 in the range [0, 1) from a random value generator.

## `$std/random/sample`

- **`Prng`** (re-export)
- **`RandomOptions`** (re-export)
- **`sample`** (function)
  - `export function sample<T>( array: ArrayLike<T>, options?: SampleOptions, ): T \| undefined`
  - Returns a random element from the given array.
- **`SampleOptions`** (type)
  - `export type SampleOptions = RandomOptions & … }`
  - Options for sample.

## `$std/random/seeded`

- **`Prng`** (type)
  - `export type Prng = typeof Math.random`
  - A pseudo-random number generator implementing the same contract as Math.random, i.e. taking zero arguments and returning a random number in the range [0, 1). The behavior of a function that accepts a…
- **`randomSeeded`** (function)
  - `export function randomSeeded(seed: bigint): Prng`
  - Creates a pseudo-random number generator that generates random numbers in the range [0, 1), based on the given seed, with 32 bits of entropy. The algorithm used for generation is PCG32.

## `$std/random/shuffle`

- **`Prng`** (re-export)
- **`RandomOptions`** (re-export)
- **`shuffle`** (function)
  - `export function shuffle<T>( items: readonly T[], options?: RandomOptions, ): T[]`
  - Shuffles the provided array, returning a copy and without modifying the original array.
