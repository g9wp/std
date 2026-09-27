# `$std/math` — @std/math@0.0.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/math
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Math functions such as modulo and clamp.

导入：`import {...} from "$std/math";`　别名：`jsr:@g9wp/std@^0.1.5/math`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/math` | `@std/math` | `math/mod.ts` | 4 |
| `$std/math/clamp` | `@std/math/clamp` | `math/clamp.ts` | 1 |
| `$std/math/modulo` | `@std/math/modulo` | `math/modulo.ts` | 1 |
| `$std/math/round-to` | `@std/math/round-to` | `math/round_to.ts` | 2 |

## `$std/math`

4 个导出符号：

- **`clamp`** (function)
  - `export function clamp(num: number, min: number, max: number): number`
  - Clamp a number within the inclusive [min, max] range.
- **`modulo`** (function)
  - `export function modulo(num: number, modulus: number): number`
  - Computes the floored modulo of a number.
- **`RoundingOptions`** (type)
  - `export type RoundingOptions = … }`
  - Options for roundTo.
- **`roundTo`** (function)
  - `export function roundTo( num: number, digits: number, options?: RoundingOptions, ): number`
  - Round a number to a specified number of digits.

## `$std/math/clamp`

- **`clamp`** (function)
  - `export function clamp(num: number, min: number, max: number): number`
  - Clamp a number within the inclusive [min, max] range.

## `$std/math/modulo`

- **`modulo`** (function)
  - `export function modulo(num: number, modulus: number): number`
  - Computes the floored modulo of a number.

## `$std/math/round-to`

- **`RoundingOptions`** (type)
  - `export type RoundingOptions = … }`
  - Options for roundTo.
- **`roundTo`** (function)
  - `export function roundTo( num: number, digits: number, options?: RoundingOptions, ): number`
  - Round a number to a specified number of digits.
