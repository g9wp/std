# `$std/internal` — @std/internal@1.0.14

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/internal
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Internal utilities for the public API of the Deno Standard Library.

导入：`import {...} from "$std/internal";`　别名：`jsr:@g9wp/std@^0.1.5/internal`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/internal` | `@std/internal` | `internal/mod.ts` | 37 |
| `$std/internal/assertion-state` | `@std/internal/assertion-state` | `internal/assertion_state.ts` | 2 |
| `$std/internal/build-message` | `@std/internal/build-message` | `internal/build_message.ts` | 4 |
| `$std/internal/diff` | `@std/internal/diff` | `internal/diff.ts` | 6 |
| `$std/internal/diff-str` | `@std/internal/diff-str` | `internal/diff_str.ts` | 4 |
| `$std/internal/format` | `@std/internal/format` | `internal/format.ts` | 2 |
| `$std/internal/os` | `@std/internal/os` | `internal/os.ts` | 1 |
| `$std/internal/styles` | `@std/internal/styles` | `internal/styles.ts` | 10 |
| `$std/internal/truncate-build-message` | `@std/internal/truncate-build-message` | `internal/truncate_build_message.ts` | 4 |
| `$std/internal/types` | `@std/internal/types` | `internal/types.ts` | 4 |

## `$std/internal`

37 个导出符号：

- **`assertFp`** (function)
  - `export function assertFp(value: unknown): asserts value is FarthestPoint`
  - Asserts that the value is a FarthestPoint. If not, an error is thrown.
- **`AssertionState`** (class)
  - `export class AssertionState`
  - Check the test suite internal state
- **`backTrace`** (function)
  - `export function backTrace<T>( A: T[], B: T[], current: FarthestPoint, swapped: boolean, routes: Uint32Array, diffTypesPtrOffset: number, ): Array<{ type: DiffType; value: T; }>`
  - Creates an array of backtraced differences.
- **`bgGreen`** (function)
  - `export function bgGreen(str: string): string`
  - Sets the background color of text to be printed to green.
- **`bgRed`** (function)
  - `export function bgRed(str: string): string`
  - Sets the background color of text to be printed to red.
- **`bold`** (function)
  - `export function bold(str: string): string`
  - Sets the style of text to be printed to bold.
- **`brightBlack`** (function)
  - `export function brightBlack(str: string): string`
  - Sets the color of text to be printed to bright-black.
- **`buildMessage`** (function)
  - `export function buildMessage( diffResult: ReadonlyArray<DiffResult<string>>, options: BuildMessageOptions = {}, truncateDiff?: ( diffResult: ReadonlyArray<DiffResult<string>>, stringDiff: boolean, contextLength?: number…`
  - Builds a message based on the provided diff result.
- **`BuildMessageOptions`** (interface)
  - `export interface BuildMessageOptions`
  - Options for buildMessage.
- **`ChangedDiffResult`** (type)
  - `export type ChangedDiffResult<T> = … }`
  - Represents the result of a changed diff operation. @typeParam T The type of the value in the diff result.
- **`CommonDiffResult`** (type)
  - `export type CommonDiffResult<T> = … }`
  - Represents the result of a common diff operation. @typeParam T The type of the value in the diff result.
- **`consolidateCommon`** (function)
  - `export function consolidateCommon( commons: ReadonlyArray<CommonDiffResult<string>>, location: "start" \| "middle" \| "end", stringDiff: boolean, contextLength: number, ): ReadonlyArray<CommonDiffResult<string>>`
  - Consolidates a sequence of common diff results by truncating unchanged lines.
- **`createColor`** (function)
  - `export function createColor( diffType: DiffType, background = false, ): (s: string) => string { switch (diffType) { case "added": return (s) => background ? bgGreen(white(s)) : green(bold(s)); case "removed": return (s)…`
  - Colors the output of assertion diffs.
- **`createCommon`** (function)
  - `export function createCommon<T>(A: T[], B: T[]): T[]`
  - Creates an array of common elements between two arrays.
- **`createDetails`** (function)
  - `export function createDetails( line: DiffResult<string>, tokens: DiffResult<string>[], ): DiffResult<string>[]`
  - Create details by filtering relevant word-diff for current line and merge "space-diff" if surrounded by word-diff for cleaner displays.
- **`createFp`** (function)
  - `export function createFp( k: number, M: number, routes: Uint32Array, diffTypesPtrOffset: number, ptr: number, slide?: FarthestPoint, down?: FarthestPoint, ): FarthestPoint`
  - Creates a FarthestPoint.
- **`createSign`** (function)
  - `export function createSign(diffType: DiffType): string`
  - Prefixes + or - in diff output.
- **`diff`** (function)
  - `export function diff<T>(A: T[], B: T[]): DiffResult<T>[]`
  - Renders the differences between the actual and expected values.
- **`DIFF_CONTEXT_LENGTH`** (const)
  - `export const DIFF_CONTEXT_LENGTH`
  - The environment variable used for setting diff context length.
- **`DiffResult`** (type)
  - `export type DiffResult<T> = ChangedDiffResult<T> \| CommonDiffResult<T>`
  - Represents the result of a diff operation. @typeParam T The type of the value in the diff result.
- **`diffStr`** (function)
  - `export function diffStr(A: string, B: string): DiffResult<string>[]`
  - Renders the differences between the actual and expected strings. Partially inspired from https://github.com/kpdecker/jsdiff.
- **`DiffType`** (type)
  - `export type DiffType = DiffResult<unknown>["type"]`
  - Ways that lines in a diff can be different.
- **`FarthestPoint`** (interface)
  - `export interface FarthestPoint`
  - Represents the farthest point in the diff algorithm.
- **`format`** (function)
  - `export function format(v: unknown): string`
  - Converts the input into a string. Objects, Sets and Maps are sorted so as to make tests less flaky.
- **`getAssertionState`** (function)
  - `export function getAssertionState(): AssertionState`
  - return an instance of AssertionState
- **`getTruncationContextLengthFromEnv`** (function)
  - `export function getTruncationContextLengthFromEnv(): number \| null`
  - Get the truncation context length from the DIFF_CONTEXT_LENGTH environment variable. @returns The truncation context length, or null if not set or invalid.
- **`gray`** (function)
  - `export function gray(str: string): string`
  - Sets the color of text to be printed to gray.
- **`green`** (function)
  - `export function green(str: string): string`
  - Sets the color of text to be printed to green.
- **`InspectFn`** (type)
  - `export type InspectFn = ( v: unknown, options: { depth: number; sorted: boolean; trailingComma: boolean; compact: boolean; iterableLimit: number; getters: boolean; strAbbreviateSize: number; }, ) => string; /** * Conver…`
  - An inspect function conforming to the shape of Deno.inspect and node:util's inspect
- **`isWindows`** (const)
  - `export const isWindows: boolean`
  - Whether the current platform is Windows
- **`red`** (function)
  - `export function red(str: string): string`
  - Sets the color of text to be printed to red.
- **`stripAnsiCode`** (function)
  - `export function stripAnsiCode(string: string): string`
  - Remove ANSI escape codes from the string.
- **`tokenize`** (function)
  - `export function tokenize(string: string, wordDiff = false): string[]`
  - Tokenizes a string into an array of tokens.
- **`truncateDiff`** (function)
  - `export function truncateDiff( diffResult: ReadonlyArray<DiffResult<string>>, stringDiff: boolean, contextLength?: number \| null, ): ReadonlyArray<DiffResult<string>>`
  - Truncates a diff result by consolidating unchanged lines.
- **`unescape`** (function)
  - `export function unescape(string: string): string`
  - Unescape invisible characters.
- **`white`** (function)
  - `export function white(str: string): string`
  - Sets the color of text to be printed to white.
- **`yellow`** (function)
  - `export function yellow(str: string): string`
  - Sets the color of text to be printed to yellow.

## `$std/internal/assertion-state`

- **`AssertionState`** (class)
  - `export class AssertionState`
  - Check the test suite internal state
- **`getAssertionState`** (function)
  - `export function getAssertionState(): AssertionState`
  - return an instance of AssertionState

## `$std/internal/build-message`

- **`buildMessage`** (function)
  - `export function buildMessage( diffResult: ReadonlyArray<DiffResult<string>>, options: BuildMessageOptions = {}, truncateDiff?: ( diffResult: ReadonlyArray<DiffResult<string>>, stringDiff: boolean, contextLength?: number…`
  - Builds a message based on the provided diff result.
- **`BuildMessageOptions`** (interface)
  - `export interface BuildMessageOptions`
  - Options for buildMessage.
- **`createColor`** (function)
  - `export function createColor( diffType: DiffType, background = false, ): (s: string) => string { switch (diffType) { case "added": return (s) => background ? bgGreen(white(s)) : green(bold(s)); case "removed": return (s)…`
  - Colors the output of assertion diffs.
- **`createSign`** (function)
  - `export function createSign(diffType: DiffType): string`
  - Prefixes + or - in diff output.

## `$std/internal/diff`

- **`assertFp`** (function)
  - `export function assertFp(value: unknown): asserts value is FarthestPoint`
  - Asserts that the value is a FarthestPoint. If not, an error is thrown.
- **`backTrace`** (function)
  - `export function backTrace<T>( A: T[], B: T[], current: FarthestPoint, swapped: boolean, routes: Uint32Array, diffTypesPtrOffset: number, ): Array<{ type: DiffType; value: T; }>`
  - Creates an array of backtraced differences.
- **`createCommon`** (function)
  - `export function createCommon<T>(A: T[], B: T[]): T[]`
  - Creates an array of common elements between two arrays.
- **`createFp`** (function)
  - `export function createFp( k: number, M: number, routes: Uint32Array, diffTypesPtrOffset: number, ptr: number, slide?: FarthestPoint, down?: FarthestPoint, ): FarthestPoint`
  - Creates a FarthestPoint.
- **`diff`** (function)
  - `export function diff<T>(A: T[], B: T[]): DiffResult<T>[]`
  - Renders the differences between the actual and expected values.
- **`FarthestPoint`** (interface)
  - `export interface FarthestPoint`
  - Represents the farthest point in the diff algorithm.

## `$std/internal/diff-str`

- **`createDetails`** (function)
  - `export function createDetails( line: DiffResult<string>, tokens: DiffResult<string>[], ): DiffResult<string>[]`
  - Create details by filtering relevant word-diff for current line and merge "space-diff" if surrounded by word-diff for cleaner displays.
- **`diffStr`** (function)
  - `export function diffStr(A: string, B: string): DiffResult<string>[]`
  - Renders the differences between the actual and expected strings. Partially inspired from https://github.com/kpdecker/jsdiff.
- **`tokenize`** (function)
  - `export function tokenize(string: string, wordDiff = false): string[]`
  - Tokenizes a string into an array of tokens.
- **`unescape`** (function)
  - `export function unescape(string: string): string`
  - Unescape invisible characters.

## `$std/internal/format`

- **`format`** (function)
  - `export function format(v: unknown): string`
  - Converts the input into a string. Objects, Sets and Maps are sorted so as to make tests less flaky.
- **`InspectFn`** (type)
  - `export type InspectFn = ( v: unknown, options: { depth: number; sorted: boolean; trailingComma: boolean; compact: boolean; iterableLimit: number; getters: boolean; strAbbreviateSize: number; }, ) => string; /** * Conver…`
  - An inspect function conforming to the shape of Deno.inspect and node:util's inspect

## `$std/internal/os`

- **`isWindows`** (const)
  - `export const isWindows: boolean`
  - Whether the current platform is Windows

## `$std/internal/styles`

- **`bgGreen`** (function)
  - `export function bgGreen(str: string): string`
  - Sets the background color of text to be printed to green.
- **`bgRed`** (function)
  - `export function bgRed(str: string): string`
  - Sets the background color of text to be printed to red.
- **`bold`** (function)
  - `export function bold(str: string): string`
  - Sets the style of text to be printed to bold.
- **`brightBlack`** (function)
  - `export function brightBlack(str: string): string`
  - Sets the color of text to be printed to bright-black.
- **`gray`** (function)
  - `export function gray(str: string): string`
  - Sets the color of text to be printed to gray.
- **`green`** (function)
  - `export function green(str: string): string`
  - Sets the color of text to be printed to green.
- **`red`** (function)
  - `export function red(str: string): string`
  - Sets the color of text to be printed to red.
- **`stripAnsiCode`** (function)
  - `export function stripAnsiCode(string: string): string`
  - Remove ANSI escape codes from the string.
- **`white`** (function)
  - `export function white(str: string): string`
  - Sets the color of text to be printed to white.
- **`yellow`** (function)
  - `export function yellow(str: string): string`
  - Sets the color of text to be printed to yellow.

## `$std/internal/truncate-build-message`

- **`consolidateCommon`** (function)
  - `export function consolidateCommon( commons: ReadonlyArray<CommonDiffResult<string>>, location: "start" \| "middle" \| "end", stringDiff: boolean, contextLength: number, ): ReadonlyArray<CommonDiffResult<string>>`
  - Consolidates a sequence of common diff results by truncating unchanged lines.
- **`DIFF_CONTEXT_LENGTH`** (const)
  - `export const DIFF_CONTEXT_LENGTH`
  - The environment variable used for setting diff context length.
- **`getTruncationContextLengthFromEnv`** (function)
  - `export function getTruncationContextLengthFromEnv(): number \| null`
  - Get the truncation context length from the DIFF_CONTEXT_LENGTH environment variable. @returns The truncation context length, or null if not set or invalid.
- **`truncateDiff`** (function)
  - `export function truncateDiff( diffResult: ReadonlyArray<DiffResult<string>>, stringDiff: boolean, contextLength?: number \| null, ): ReadonlyArray<DiffResult<string>>`
  - Truncates a diff result by consolidating unchanged lines.

## `$std/internal/types`

- **`ChangedDiffResult`** (type)
  - `export type ChangedDiffResult<T> = … }`
  - Represents the result of a changed diff operation. @typeParam T The type of the value in the diff result.
- **`CommonDiffResult`** (type)
  - `export type CommonDiffResult<T> = … }`
  - Represents the result of a common diff operation. @typeParam T The type of the value in the diff result.
- **`DiffResult`** (type)
  - `export type DiffResult<T> = ChangedDiffResult<T> \| CommonDiffResult<T>`
  - Represents the result of a diff operation. @typeParam T The type of the value in the diff result.
- **`DiffType`** (type)
  - `export type DiffType = DiffResult<unknown>["type"]`
  - Ways that lines in a diff can be different.
