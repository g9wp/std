# `$std/datetime` — @std/datetime@0.225.7

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/datetime
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for dealing with Date objects.

导入：`import {...} from "$std/datetime";`　别名：`jsr:@g9wp/std@^0.1.5/datetime`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/datetime` | `@std/datetime` | `datetime/mod.ts` | 36 |
| `$std/datetime/constants` | `@std/datetime/constants` | `datetime/constants.ts` | 24 |
| `$std/datetime/day-of-year` | `@std/datetime/day-of-year` | `datetime/day_of_year.ts` | 2 |
| `$std/datetime/difference` | `@std/datetime/difference` | `datetime/difference.ts` | 4 |
| `$std/datetime/format` | `@std/datetime/format` | `datetime/format.ts` | 2 |
| `$std/datetime/is-leap` | `@std/datetime/is-leap` | `datetime/is_leap.ts` | 2 |
| `$std/datetime/parse` | `@std/datetime/parse` | `datetime/parse.ts` | 1 |
| `$std/datetime/week-of-year` | `@std/datetime/week-of-year` | `datetime/week_of_year.ts` | 1 |

## `$std/datetime`

36 个导出符号：

- **`APRIL`** (const)
  - `export const APRIL`
  - The month index for April.
- **`AUGUST`** (const)
  - `export const AUGUST`
  - The month index for August.
- **`DAY`** (const)
  - `export const DAY: number`
  - The number of milliseconds in a day.
- **`dayOfYear`** (function)
  - `export function dayOfYear(date: Date): number`
  - Returns the number of the day in the year in the local time zone.
- **`dayOfYearUtc`** (function)
  - `export function dayOfYearUtc(date: Date): number`
  - Returns the number of the day in the year in UTC time.
- **`DECEMBER`** (const)
  - `export const DECEMBER`
  - The month index for December.
- **`difference`** (function)
  - `export function difference( from: Date, to: Date, options?: DifferenceOptions, ): DifferenceFormat`
  - Calculates the difference of the 2 given dates in various units. If the units are omitted, it returns the difference in the all available units.
- **`DifferenceFormat`** (type)
  - `export type DifferenceFormat = Partial<Record<Unit, number>>`
  - Return type for difference.
- **`DifferenceOptions`** (type)
  - `export type DifferenceOptions = … }`
  - Options for difference.
- **`FEBRUARY`** (const)
  - `export const FEBRUARY`
  - The month index for February.
- **`format`** (function)
  - `export function format( date: Date, formatString: string, options: FormatOptions = {}, ): string`
  - Formats a date to a string with the specified format.
- **`FormatOptions`** (interface)
  - `export interface FormatOptions`
  - Options for format.
- **`FRIDAY`** (const)
  - `export const FRIDAY`
  - The day of week index for Friday.
- **`HOUR`** (const)
  - `export const HOUR: number`
  - The number of milliseconds in an hour.
- **`isLeap`** (function)
  - `export function isLeap(year: Date \| number): boolean`
  - Returns whether the given year is a leap year. Passing in a Date object will return the leap year status of the year of that object and take the current timezone into account. Passing in a number wil…
- **`isUtcLeap`** (function)
  - `export function isUtcLeap(year: Date \| number): boolean`
  - Returns whether the given year is a leap year in UTC time. This always returns the same value regardless of the local timezone.
- **`JANUARY`** (const)
  - `export const JANUARY`
  - The month index for January.
- **`JULY`** (const)
  - `export const JULY`
  - The month index for July.
- **`JUNE`** (const)
  - `export const JUNE`
  - The month index for June.
- **`MARCH`** (const)
  - `export const MARCH`
  - The month index for March.
- **`MAY`** (const)
  - `export const MAY`
  - The month index for May.
- **`MINUTE`** (const)
  - `export const MINUTE: number`
  - The number of milliseconds in a minute.
- **`MONDAY`** (const)
  - `export const MONDAY`
  - The day of week index for Monday.
- **`NOVEMBER`** (const)
  - `export const NOVEMBER`
  - The month index for November.
- **`OCTOBER`** (const)
  - `export const OCTOBER`
  - The month index for October.
- **`parse`** (function)
  - `export function parse(dateString: string, formatString: string): Date`
  - Parses a date string using the specified format string.
- **`SATURDAY`** (const)
  - `export const SATURDAY`
  - The day of week index for Saturday.
- **`SECOND`** (const)
  - `export const SECOND`
  - The number of milliseconds in a second.
- **`SEPTEMBER`** (const)
  - `export const SEPTEMBER`
  - The month index for September.
- **`SUNDAY`** (const)
  - `export const SUNDAY`
  - The day of week index for Sunday.
- **`THURSDAY`** (const)
  - `export const THURSDAY`
  - The day of week index for Thursday.
- **`TUESDAY`** (const)
  - `export const TUESDAY`
  - The day of week index for Tuesday.
- **`Unit`** (type)
  - `export type Unit = \| "milliseconds" \| "seconds" \| "minutes" \| "hours" \| "days" \| "weeks" \| "months" \| "quarters" \| "years"`
  - Duration units for DifferenceFormat and DifferenceOptions.
- **`WEDNESDAY`** (const)
  - `export const WEDNESDAY`
  - The day of week index for Wednesday.
- **`WEEK`** (const)
  - `export const WEEK: number`
  - The number of milliseconds in a week.
- **`weekOfYear`** (function)
  - `export function weekOfYear(date: Date): number`
  - Returns the ISO week number of the provided date (1-53).

## `$std/datetime/constants`

- **`APRIL`** (const)
  - `export const APRIL`
  - The month index for April.
- **`AUGUST`** (const)
  - `export const AUGUST`
  - The month index for August.
- **`DAY`** (const)
  - `export const DAY: number`
  - The number of milliseconds in a day.
- **`DECEMBER`** (const)
  - `export const DECEMBER`
  - The month index for December.
- **`FEBRUARY`** (const)
  - `export const FEBRUARY`
  - The month index for February.
- **`FRIDAY`** (const)
  - `export const FRIDAY`
  - The day of week index for Friday.
- **`HOUR`** (const)
  - `export const HOUR: number`
  - The number of milliseconds in an hour.
- **`JANUARY`** (const)
  - `export const JANUARY`
  - The month index for January.
- **`JULY`** (const)
  - `export const JULY`
  - The month index for July.
- **`JUNE`** (const)
  - `export const JUNE`
  - The month index for June.
- **`MARCH`** (const)
  - `export const MARCH`
  - The month index for March.
- **`MAY`** (const)
  - `export const MAY`
  - The month index for May.
- **`MINUTE`** (const)
  - `export const MINUTE: number`
  - The number of milliseconds in a minute.
- **`MONDAY`** (const)
  - `export const MONDAY`
  - The day of week index for Monday.
- **`NOVEMBER`** (const)
  - `export const NOVEMBER`
  - The month index for November.
- **`OCTOBER`** (const)
  - `export const OCTOBER`
  - The month index for October.
- **`SATURDAY`** (const)
  - `export const SATURDAY`
  - The day of week index for Saturday.
- **`SECOND`** (const)
  - `export const SECOND`
  - The number of milliseconds in a second.
- **`SEPTEMBER`** (const)
  - `export const SEPTEMBER`
  - The month index for September.
- **`SUNDAY`** (const)
  - `export const SUNDAY`
  - The day of week index for Sunday.
- **`THURSDAY`** (const)
  - `export const THURSDAY`
  - The day of week index for Thursday.
- **`TUESDAY`** (const)
  - `export const TUESDAY`
  - The day of week index for Tuesday.
- **`WEDNESDAY`** (const)
  - `export const WEDNESDAY`
  - The day of week index for Wednesday.
- **`WEEK`** (const)
  - `export const WEEK: number`
  - The number of milliseconds in a week.

## `$std/datetime/day-of-year`

- **`dayOfYear`** (function)
  - `export function dayOfYear(date: Date): number`
  - Returns the number of the day in the year in the local time zone.
- **`dayOfYearUtc`** (function)
  - `export function dayOfYearUtc(date: Date): number`
  - Returns the number of the day in the year in UTC time.

## `$std/datetime/difference`

- **`difference`** (function)
  - `export function difference( from: Date, to: Date, options?: DifferenceOptions, ): DifferenceFormat`
  - Calculates the difference of the 2 given dates in various units. If the units are omitted, it returns the difference in the all available units.
- **`DifferenceFormat`** (type)
  - `export type DifferenceFormat = Partial<Record<Unit, number>>`
  - Return type for difference.
- **`DifferenceOptions`** (type)
  - `export type DifferenceOptions = … }`
  - Options for difference.
- **`Unit`** (type)
  - `export type Unit = \| "milliseconds" \| "seconds" \| "minutes" \| "hours" \| "days" \| "weeks" \| "months" \| "quarters" \| "years"`
  - Duration units for DifferenceFormat and DifferenceOptions.

## `$std/datetime/format`

- **`format`** (function)
  - `export function format( date: Date, formatString: string, options: FormatOptions = {}, ): string`
  - Formats a date to a string with the specified format.
- **`FormatOptions`** (interface)
  - `export interface FormatOptions`
  - Options for format.

## `$std/datetime/is-leap`

- **`isLeap`** (function)
  - `export function isLeap(year: Date \| number): boolean`
  - Returns whether the given year is a leap year. Passing in a Date object will return the leap year status of the year of that object and take the current timezone into account. Passing in a number wil…
- **`isUtcLeap`** (function)
  - `export function isUtcLeap(year: Date \| number): boolean`
  - Returns whether the given year is a leap year in UTC time. This always returns the same value regardless of the local timezone.

## `$std/datetime/parse`

- **`parse`** (function)
  - `export function parse(dateString: string, formatString: string): Date`
  - Parses a date string using the specified format string.

## `$std/datetime/week-of-year`

- **`weekOfYear`** (function)
  - `export function weekOfYear(date: Date): number`
  - Returns the ISO week number of the provided date (1-53).
