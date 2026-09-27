# `$std/semver` — @std/semver@1.0.8

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/semver
     需要精确签名时以 `deno doc` 或源码为准。 -->

导入：`import {...} from "$std/semver";`　别名：`jsr:@g9wp/std@^0.1.5/semver`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/semver` | `@std/semver` | `semver/mod.ts` | 30 |
| `$std/semver/can-parse` | `@std/semver/can-parse` | `semver/can_parse.ts` | 1 |
| `$std/semver/compare` | `@std/semver/compare` | `semver/compare.ts` | 1 |
| `$std/semver/difference` | `@std/semver/difference` | `semver/difference.ts` | 1 |
| `$std/semver/equals` | `@std/semver/equals` | `semver/equals.ts` | 1 |
| `$std/semver/format` | `@std/semver/format` | `semver/format.ts` | 1 |
| `$std/semver/format-range` | `@std/semver/format-range` | `semver/format_range.ts` | 1 |
| `$std/semver/greater-or-equal` | `@std/semver/greater-or-equal` | `semver/greater_or_equal.ts` | 1 |
| `$std/semver/greater-than` | `@std/semver/greater-than` | `semver/greater_than.ts` | 1 |
| `$std/semver/greater-than-range` | `@std/semver/greater-than-range` | `semver/greater_than_range.ts` | 1 |
| `$std/semver/increment` | `@std/semver/increment` | `semver/increment.ts` | 2 |
| `$std/semver/is-range` | `@std/semver/is-range` | `semver/is_range.ts` | 1 |
| `$std/semver/is-semver` | `@std/semver/is-semver` | `semver/is_semver.ts` | 1 |
| `$std/semver/less-or-equal` | `@std/semver/less-or-equal` | `semver/less_or_equal.ts` | 1 |
| `$std/semver/less-than` | `@std/semver/less-than` | `semver/less_than.ts` | 1 |
| `$std/semver/less-than-range` | `@std/semver/less-than-range` | `semver/less_than_range.ts` | 1 |
| `$std/semver/max-satisfying` | `@std/semver/max-satisfying` | `semver/max_satisfying.ts` | 1 |
| `$std/semver/min-satisfying` | `@std/semver/min-satisfying` | `semver/min_satisfying.ts` | 1 |
| `$std/semver/not-equals` | `@std/semver/not-equals` | `semver/not_equals.ts` | 1 |
| `$std/semver/parse` | `@std/semver/parse` | `semver/parse.ts` | 1 |
| `$std/semver/parse-range` | `@std/semver/parse-range` | `semver/parse_range.ts` | 1 |
| `$std/semver/range-intersects` | `@std/semver/range-intersects` | `semver/range_intersects.ts` | 1 |
| `$std/semver/satisfies` | `@std/semver/satisfies` | `semver/satisfies.ts` | 1 |
| `$std/semver/try-parse` | `@std/semver/try-parse` | `semver/try_parse.ts` | 1 |
| `$std/semver/try-parse-range` | `@std/semver/try-parse-range` | `semver/try_parse_range.ts` | 1 |
| `$std/semver/types` | `@std/semver/types` | `semver/types.ts` | 5 |

## `$std/semver`

30 个导出符号：

- **`canParse`** (function)
  - `export function canParse(value: string): boolean`
  - Returns true if the string can be parsed as SemVer.
- **`Comparator`** (interface)
  - `export interface Comparator extends SemVer`
  - The shape of a valid SemVer comparator.
- **`compare`** (function)
  - `export function compare(version1: SemVer, version2: SemVer): 1 \| 0 \| -1`
  - Compare two SemVers.
- **`difference`** (function)
  - `export function difference( version1: SemVer, version2: SemVer, ): ReleaseType \| undefined`
  - Returns difference between two SemVers by the release type, or undefined if the SemVers are the same.
- **`equals`** (function)
  - `export function equals(version1: SemVer, version2: SemVer): boolean`
  - Returns true if both SemVers are equivalent.
- **`format`** (function)
  - `export function format(version: SemVer): string`
  - Format a SemVer object into a string.
- **`formatRange`** (function)
  - `export function formatRange(range: Range): string`
  - Formats the SemVerrange into a string.
- **`greaterOrEqual`** (function)
  - `export function greaterOrEqual(version1: SemVer, version2: SemVer): boolean`
  - Greater than or equal to comparison for two SemVers.
- **`greaterThan`** (function)
  - `export function greaterThan(version1: SemVer, version2: SemVer): boolean`
  - Greater than comparison for two SemVers.
- **`greaterThanRange`** (function)
  - `export function greaterThanRange(version: SemVer, range: Range): boolean`
  - Check if the SemVer is greater than the range.
- **`increment`** (function)
  - `export function increment( version: SemVer, release: ReleaseType, options: IncrementOptions = {}, ): SemVer`
  - Returns the new SemVer resulting from an increment by release type.
- **`IncrementOptions`** (interface)
  - `export interface IncrementOptions`
  - Options for increment.
- **`isRange`** (function)
  - `export function isRange(value: unknown): value is Range`
  - Does a deep check on the object to determine if its a valid range.
- **`isSemVer`** (function)
  - `export function isSemVer(value: unknown): value is SemVer`
  - Checks to see if value is a valid SemVer object. It does a check into each field including prerelease and build.
- **`lessOrEqual`** (function)
  - `export function lessOrEqual(version1: SemVer, version2: SemVer): boolean`
  - Less than or equal to comparison for two SemVers.
- **`lessThan`** (function)
  - `export function lessThan(version1: SemVer, version2: SemVer): boolean`
  - Less than comparison for two SemVers.
- **`lessThanRange`** (function)
  - `export function lessThanRange(version: SemVer, range: Range): boolean`
  - Check if the SemVer is less than the range.
- **`maxSatisfying`** (function)
  - `export function maxSatisfying( versions: SemVer[], range: Range, ): SemVer \| undefined`
  - Returns the highest SemVer in the list that satisfies the range, or undefined if none of them do.
- **`minSatisfying`** (function)
  - `export function minSatisfying( versions: SemVer[], range: Range, ): SemVer \| undefined`
  - Returns the lowest SemVer in the list that satisfies the range, or undefined if none of them do.
- **`notEquals`** (function)
  - `export function notEquals(version1: SemVer, version2: SemVer): boolean`
  - Not equal comparison for two SemVers.
- **`Operator`** (type)
  - `export type Operator = \| undefined \| "=" \| "!=" \| ">" \| ">=" \| "<" \| "<="`
  - SemVer comparison operators.
- **`parse`** (function)
  - `export function parse(value: string): SemVer`
  - Attempt to parse a string as a semantic version, returning a SemVer object.
- **`parseRange`** (function)
  - `export function parseRange(value: string): Range`
  - Parses a range string into a Range object.
- **`Range`** (type)
  - `export type Range = Comparator[][]`
  - A type representing a semantic version range. The ranges consist of a nested array, which represents a set of OR comparisons while the inner array represents AND comparisons.
- **`rangeIntersects`** (function)
  - `export function rangeIntersects(range1: Range, range2: Range): boolean`
  - The ranges intersect every range of AND comparators intersects with a least one range of OR ranges.
- **`ReleaseType`** (type)
  - `export type ReleaseType = \| "pre" \| "major" \| "premajor" \| "minor" \| "preminor" \| "patch" \| "prepatch" \| "prerelease"`
  - The possible release types are used as an operator for the increment function and as a result of the difference function.
- **`satisfies`** (function)
  - `export function satisfies(version: SemVer, range: Range): boolean`
  - Test to see if the SemVer satisfies the range.
- **`SemVer`** (interface)
  - `export interface SemVer`
  - A SemVer object parsed into its constituent parts.
- **`tryParse`** (function)
  - `export function tryParse(value: string): SemVer \| undefined`
  - Returns the parsed SemVer, or undefined if it's not valid.
- **`tryParseRange`** (function)
  - `export function tryParseRange(value: string): Range \| undefined`
  - Parses the given range string and returns a Range object. If the range string is invalid, undefined is returned.

## `$std/semver/can-parse`

- **`canParse`** (function)
  - `export function canParse(value: string): boolean`
  - Returns true if the string can be parsed as SemVer.

## `$std/semver/compare`

- **`compare`** (function)
  - `export function compare(version1: SemVer, version2: SemVer): 1 \| 0 \| -1`
  - Compare two SemVers.

## `$std/semver/difference`

- **`difference`** (function)
  - `export function difference( version1: SemVer, version2: SemVer, ): ReleaseType \| undefined`
  - Returns difference between two SemVers by the release type, or undefined if the SemVers are the same.

## `$std/semver/equals`

- **`equals`** (function)
  - `export function equals(version1: SemVer, version2: SemVer): boolean`
  - Returns true if both SemVers are equivalent.

## `$std/semver/format`

- **`format`** (function)
  - `export function format(version: SemVer): string`
  - Format a SemVer object into a string.

## `$std/semver/format-range`

- **`formatRange`** (function)
  - `export function formatRange(range: Range): string`
  - Formats the SemVerrange into a string.

## `$std/semver/greater-or-equal`

- **`greaterOrEqual`** (function)
  - `export function greaterOrEqual(version1: SemVer, version2: SemVer): boolean`
  - Greater than or equal to comparison for two SemVers.

## `$std/semver/greater-than`

- **`greaterThan`** (function)
  - `export function greaterThan(version1: SemVer, version2: SemVer): boolean`
  - Greater than comparison for two SemVers.

## `$std/semver/greater-than-range`

- **`greaterThanRange`** (function)
  - `export function greaterThanRange(version: SemVer, range: Range): boolean`
  - Check if the SemVer is greater than the range.

## `$std/semver/increment`

- **`increment`** (function)
  - `export function increment( version: SemVer, release: ReleaseType, options: IncrementOptions = {}, ): SemVer`
  - Returns the new SemVer resulting from an increment by release type.
- **`IncrementOptions`** (interface)
  - `export interface IncrementOptions`
  - Options for increment.

## `$std/semver/is-range`

- **`isRange`** (function)
  - `export function isRange(value: unknown): value is Range`
  - Does a deep check on the object to determine if its a valid range.

## `$std/semver/is-semver`

- **`isSemVer`** (function)
  - `export function isSemVer(value: unknown): value is SemVer`
  - Checks to see if value is a valid SemVer object. It does a check into each field including prerelease and build.

## `$std/semver/less-or-equal`

- **`lessOrEqual`** (function)
  - `export function lessOrEqual(version1: SemVer, version2: SemVer): boolean`
  - Less than or equal to comparison for two SemVers.

## `$std/semver/less-than`

- **`lessThan`** (function)
  - `export function lessThan(version1: SemVer, version2: SemVer): boolean`
  - Less than comparison for two SemVers.

## `$std/semver/less-than-range`

- **`lessThanRange`** (function)
  - `export function lessThanRange(version: SemVer, range: Range): boolean`
  - Check if the SemVer is less than the range.

## `$std/semver/max-satisfying`

- **`maxSatisfying`** (function)
  - `export function maxSatisfying( versions: SemVer[], range: Range, ): SemVer \| undefined`
  - Returns the highest SemVer in the list that satisfies the range, or undefined if none of them do.

## `$std/semver/min-satisfying`

- **`minSatisfying`** (function)
  - `export function minSatisfying( versions: SemVer[], range: Range, ): SemVer \| undefined`
  - Returns the lowest SemVer in the list that satisfies the range, or undefined if none of them do.

## `$std/semver/not-equals`

- **`notEquals`** (function)
  - `export function notEquals(version1: SemVer, version2: SemVer): boolean`
  - Not equal comparison for two SemVers.

## `$std/semver/parse`

- **`parse`** (function)
  - `export function parse(value: string): SemVer`
  - Attempt to parse a string as a semantic version, returning a SemVer object.

## `$std/semver/parse-range`

- **`parseRange`** (function)
  - `export function parseRange(value: string): Range`
  - Parses a range string into a Range object.

## `$std/semver/range-intersects`

- **`rangeIntersects`** (function)
  - `export function rangeIntersects(range1: Range, range2: Range): boolean`
  - The ranges intersect every range of AND comparators intersects with a least one range of OR ranges.

## `$std/semver/satisfies`

- **`satisfies`** (function)
  - `export function satisfies(version: SemVer, range: Range): boolean`
  - Test to see if the SemVer satisfies the range.

## `$std/semver/try-parse`

- **`tryParse`** (function)
  - `export function tryParse(value: string): SemVer \| undefined`
  - Returns the parsed SemVer, or undefined if it's not valid.

## `$std/semver/try-parse-range`

- **`tryParseRange`** (function)
  - `export function tryParseRange(value: string): Range \| undefined`
  - Parses the given range string and returns a Range object. If the range string is invalid, undefined is returned.

## `$std/semver/types`

- **`Comparator`** (interface)
  - `export interface Comparator extends SemVer`
  - The shape of a valid SemVer comparator.
- **`Operator`** (type)
  - `export type Operator = \| undefined \| "=" \| "!=" \| ">" \| ">=" \| "<" \| "<="`
  - SemVer comparison operators.
- **`Range`** (type)
  - `export type Range = Comparator[][]`
  - A type representing a semantic version range. The ranges consist of a nested array, which represents a set of OR comparisons while the inner array represents AND comparisons.
- **`ReleaseType`** (type)
  - `export type ReleaseType = \| "pre" \| "major" \| "premajor" \| "minor" \| "preminor" \| "patch" \| "prepatch" \| "prerelease"`
  - The possible release types are used as an operator for the increment function and as a result of the difference function.
- **`SemVer`** (interface)
  - `export interface SemVer`
  - A SemVer object parsed into its constituent parts.
