# `$std/text` — @std/text@1.1.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/text
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utility functions for working with text.

导入：`import {...} from "$std/text";`　别名：`jsr:@g9wp/std@^0.1.5/text`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/text` | `@std/text` + `@std/text/unstable-dedent` + `@std/text/unstable-longest-common-prefix` + `@std/text/unstable-reverse` + `@std/text/unstable-slugify` + `@std/text/unstable-trim-by` + `@std/text/unstable-to-constant-case` + `@std/text/unstable-to-sentence-case` + `@std/text/unstable-to-title-case` | `text/mod.ts`, `text/unstable_dedent.ts`, `text/unstable_longest_common_prefix.ts`, `text/unstable_reverse.ts`, `text/unstable_slugify.ts`, `text/unstable_trim_by.ts`, `text/unstable_to_constant_case.ts`, `text/unstable_to_sentence_case.ts`, `text/unstable_to_title_case.ts` | 36 |
| `$std/text/closest-string` | `@std/text/closest-string` | `text/closest_string.ts` | 2 |
| `$std/text/compare-similarity` | `@std/text/compare-similarity` | `text/compare_similarity.ts` | 2 |
| `$std/text/dedent` | `@std/text/unstable-dedent` | `text/unstable_dedent.ts` | 1 |
| `$std/text/levenshtein-distance` | `@std/text/levenshtein-distance` | `text/levenshtein_distance.ts` | 1 |
| `$std/text/longest-common-prefix` | `@std/text/unstable-longest-common-prefix` | `text/unstable_longest_common_prefix.ts` | 1 |
| `$std/text/reverse` | `@std/text/unstable-reverse` | `text/unstable_reverse.ts` | 2 |
| `$std/text/slugify` | `@std/text/unstable-slugify` | `text/unstable_slugify.ts` | 6 |
| `$std/text/to-camel-case` | `@std/text/to-camel-case` | `text/to_camel_case.ts` | 1 |
| `$std/text/to-constant-case` | `@std/text/unstable-to-constant-case` | `text/unstable_to_constant_case.ts` | 1 |
| `$std/text/to-kebab-case` | `@std/text/to-kebab-case` | `text/to_kebab_case.ts` | 1 |
| `$std/text/to-pascal-case` | `@std/text/to-pascal-case` | `text/to_pascal_case.ts` | 1 |
| `$std/text/to-sentence-case` | `@std/text/unstable-to-sentence-case` | `text/unstable_to_sentence_case.ts` | 3 |
| `$std/text/to-snake-case` | `@std/text/to-snake-case` | `text/to_snake_case.ts` | 1 |
| `$std/text/to-title-case` | `@std/text/unstable-to-title-case` | `text/unstable_to_title_case.ts` | 6 |
| `$std/text/trim-by` | `@std/text/unstable-trim-by` | `text/unstable_trim_by.ts` | 4 |
| `$std/text/truncate` | `@std/text/truncate` | `text/truncate.ts` | 2 |
| `$std/text/word-similarity-sort` | `@std/text/word-similarity-sort` | `text/word_similarity_sort.ts` | 2 |

## `$std/text`

36 个导出符号：

- **`ASCII_DIACRITICS_REGEXP`** (const)
  - `export const ASCII_DIACRITICS_REGEXP`
  - A regular expression for stripping ASCII diacritics (but not other diacritics) from slugs.
- **`BaseTitleCaseOptions`** (re-export)
- **`closestString`** (function)
  - `export function closestString( givenWord: string, possibleWords: ReadonlyArray<string>, options?: ClosestStringOptions, ): string`
  - Finds the most similar string from an array of strings.
- **`ClosestStringOptions`** (interface)
  - `export interface ClosestStringOptions`
  - Options for closestString.
- **`compareSimilarity`** (function)
  - `export function compareSimilarity( givenWord: string, options?: CompareSimilarityOptions, ): (a: string, b: string) => number { const { compareFn = levenshteinDistance } = { ...options }; if (options?.caseSensitive) { r…`
  - Takes a string and generates a comparator function to determine which of two strings is more similar to the given one.
- **`CompareSimilarityOptions`** (interface)
  - `export interface CompareSimilarityOptions`
  - Options for compareSimilarity.
- **`dedent`** (function)
  - `export function dedent(input: string): string`
  - Removes indentation from multiline strings.
- **`DIACRITICS_REGEXP`** (const)
  - `export const DIACRITICS_REGEXP`
  - A regular expression for stripping diacritics from slugs.
- **`ExcludeWordConfig`** (type)
  - `export type ExcludeWordConfig = \| ExcludeWordFilter \| readonly string[] \| (ExcludeWordFilter \| readonly string[])[]`
  - A filter function or array of stop words to exclude them from title casing, or multiple filter functions and stop word arrays to combine for filtering.
- **`ExcludeWordFilter`** (type)
  - `export type ExcludeWordFilter = ( value: Intl.SegmentData, index: number, array: Intl.SegmentData[], ) => boolean; export type ExcludeWordConfig = \| ExcludeWordFilter \| readonly string[] \| (ExcludeWordFilter \| readonly…`
  - A function that filters words in the string. If a word returns true from this function, it will not be title-cased. @param value The word to be filtered. @param index The index of the word in the arr…
- **`levenshteinDistance`** (function)
  - `export function levenshteinDistance(str1: string, str2: string): number`
  - Calculates the Levenshtein distance between two strings.
- **`longestCommonPrefix`** (function)
  - `export function longestCommonPrefix(strs: ArrayLike<string>): string`
  - Gets the longest common prefix of an array of strings.
- **`NON_ASCII_REGEXP`** (const)
  - `export const NON_ASCII_REGEXP`
  - A regular expression for stripping non-ASCII characters from slugs.
- **`NON_WORD_REGEXP`** (const)
  - `export const NON_WORD_REGEXP`
  - A regular expression for stripping non-word characters from slugs.
- **`reverse`** (function)
  - `export function reverse( input: string, options?: Partial<ReverseOptions>, ): string`
  - Performs a Unicode-aware string reversal.
- **`ReverseOptions`** (type)
  - `export type ReverseOptions = … }`
  - Options for reverse
- **`SentenceCaseOptions`** (interface)
  - `export interface SentenceCaseOptions extends BaseTitleCaseOptions`
  - Options for toSentenceCase
- **`slugify`** (function)
  - `export function slugify( input: string, options?: Partial<SlugifyOptions>, ): string`
  - Converts a string into a slug.
- **`SlugifyOptions`** (type)
  - `export type SlugifyOptions = … }`
  - Options for slugify.
- **`TitleCaseOptions`** (interface)
  - `export interface TitleCaseOptions extends BaseTitleCaseOptions`
  - Options for toTitleCase
- **`toCamelCase`** (function)
  - `export function toCamelCase(input: string): string`
  - Converts a string into camelCase.
- **`toConstantCase`** (function)
  - `export function toConstantCase(input: string): string`
  - Converts a string into CONSTANT_CASE (also known as SCREAMING_SNAKE_CASE).
- **`toKebabCase`** (function)
  - `export function toKebabCase(input: string): string`
  - Converts a string into kebab-case.
- **`toPascalCase`** (function)
  - `export function toPascalCase(input: string): string`
  - Converts a string into PascalCase.
- **`toSentenceCase`** (function)
  - `export function toSentenceCase( input: string, options?: SentenceCaseOptions, ): string`
  - Converts a string into Sentence Case.
- **`toSnakeCase`** (function)
  - `export function toSnakeCase(input: string): string`
  - Converts a string into snake_case.
- **`toTitleCase`** (function)
  - `export function toTitleCase(input: string, options?: TitleCaseOptions): string`
  - Converts a string into Title Case.
- **`TrailingCase`** (type)
  - `export type TrailingCase = "lower" \| "unchanged"`
  - The case for the remaining characters in the string
- **`trimBy`** (function)
  - `export function trimBy( str: string, pattern: TrimPattern, ): string`
  - Trims all instances of the specified pattern at the start and end of the string.
- **`trimEndBy`** (function)
  - `export function trimEndBy( str: string, pattern: TrimPattern, ): string`
  - Trims all instances of the specified pattern at the end of the string.
- **`TrimPattern`** (type)
  - `export type TrimPattern = \| string \| Iterable<string> \| RegExp`
  - A pattern that can be used to trim characters from an input string. - If string, trim all substrings equal to the string. - If Iterable<string>, trim all substrings equal to any member. - If RegExp,…
- **`trimStartBy`** (function)
  - `export function trimStartBy( str: string, pattern: TrimPattern, ): string`
  - Trims all instances of the specified pattern at the start of the string.
- **`truncate`** (function)
  - `export function truncate( str: string, maxLength: number, options?: TruncateOptions, ): string`
  - Truncates a string to at most maxLength UTF-16 code units. When truncation occurs the suffix is included within the maxLength budget. Surrogate pairs are never split, so the result may be shorter tha…
- **`TruncateOptions`** (interface)
  - `export interface TruncateOptions`
  - Options for truncate.
- **`wordSimilaritySort`** (function)
  - `export function wordSimilaritySort( givenWord: string, possibleWords: ReadonlyArray<string>, options?: WordSimilaritySortOptions, ): string[]`
  - Sorts a string-array by similarity to a given string.
- **`WordSimilaritySortOptions`** (interface)
  - `export interface WordSimilaritySortOptions extends CompareSimilarityOptions`
  - Options for wordSimilaritySort.

## `$std/text/closest-string`

- **`closestString`** (function)
  - `export function closestString( givenWord: string, possibleWords: ReadonlyArray<string>, options?: ClosestStringOptions, ): string`
  - Finds the most similar string from an array of strings.
- **`ClosestStringOptions`** (interface)
  - `export interface ClosestStringOptions`
  - Options for closestString.

## `$std/text/compare-similarity`

- **`compareSimilarity`** (function)
  - `export function compareSimilarity( givenWord: string, options?: CompareSimilarityOptions, ): (a: string, b: string) => number { const { compareFn = levenshteinDistance } = { ...options }; if (options?.caseSensitive) { r…`
  - Takes a string and generates a comparator function to determine which of two strings is more similar to the given one.
- **`CompareSimilarityOptions`** (interface)
  - `export interface CompareSimilarityOptions`
  - Options for compareSimilarity.

## `$std/text/dedent`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-dedent`，在 $std 中以稳定名字 `text/dedent` 提供。

- **`dedent`** (function)
  - `export function dedent(input: string): string`
  - Removes indentation from multiline strings.

## `$std/text/levenshtein-distance`

- **`levenshteinDistance`** (function)
  - `export function levenshteinDistance(str1: string, str2: string): number`
  - Calculates the Levenshtein distance between two strings.

## `$std/text/longest-common-prefix`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-longest-common-prefix`，在 $std 中以稳定名字 `text/longest-common-prefix` 提供。

- **`longestCommonPrefix`** (function)
  - `export function longestCommonPrefix(strs: ArrayLike<string>): string`
  - Gets the longest common prefix of an array of strings.

## `$std/text/reverse`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-reverse`，在 $std 中以稳定名字 `text/reverse` 提供。

- **`reverse`** (function)
  - `export function reverse( input: string, options?: Partial<ReverseOptions>, ): string`
  - Performs a Unicode-aware string reversal.
- **`ReverseOptions`** (type)
  - `export type ReverseOptions = … }`
  - Options for reverse

## `$std/text/slugify`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-slugify`，在 $std 中以稳定名字 `text/slugify` 提供。

- **`ASCII_DIACRITICS_REGEXP`** (const)
  - `export const ASCII_DIACRITICS_REGEXP`
  - A regular expression for stripping ASCII diacritics (but not other diacritics) from slugs.
- **`DIACRITICS_REGEXP`** (const)
  - `export const DIACRITICS_REGEXP`
  - A regular expression for stripping diacritics from slugs.
- **`NON_ASCII_REGEXP`** (const)
  - `export const NON_ASCII_REGEXP`
  - A regular expression for stripping non-ASCII characters from slugs.
- **`NON_WORD_REGEXP`** (const)
  - `export const NON_WORD_REGEXP`
  - A regular expression for stripping non-word characters from slugs.
- **`slugify`** (function)
  - `export function slugify( input: string, options?: Partial<SlugifyOptions>, ): string`
  - Converts a string into a slug.
- **`SlugifyOptions`** (type)
  - `export type SlugifyOptions = … }`
  - Options for slugify.

## `$std/text/to-camel-case`

- **`toCamelCase`** (function)
  - `export function toCamelCase(input: string): string`
  - Converts a string into camelCase.

## `$std/text/to-constant-case`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-to-constant-case`，在 $std 中以稳定名字 `text/to-constant-case` 提供。

- **`toConstantCase`** (function)
  - `export function toConstantCase(input: string): string`
  - Converts a string into CONSTANT_CASE (also known as SCREAMING_SNAKE_CASE).

## `$std/text/to-kebab-case`

- **`toKebabCase`** (function)
  - `export function toKebabCase(input: string): string`
  - Converts a string into kebab-case.

## `$std/text/to-pascal-case`

- **`toPascalCase`** (function)
  - `export function toPascalCase(input: string): string`
  - Converts a string into PascalCase.

## `$std/text/to-sentence-case`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-to-sentence-case`，在 $std 中以稳定名字 `text/to-sentence-case` 提供。

- **`BaseTitleCaseOptions`** (re-export)
- **`SentenceCaseOptions`** (interface)
  - `export interface SentenceCaseOptions extends BaseTitleCaseOptions`
  - Options for toSentenceCase
- **`toSentenceCase`** (function)
  - `export function toSentenceCase( input: string, options?: SentenceCaseOptions, ): string`
  - Converts a string into Sentence Case.

## `$std/text/to-snake-case`

- **`toSnakeCase`** (function)
  - `export function toSnakeCase(input: string): string`
  - Converts a string into snake_case.

## `$std/text/to-title-case`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-to-title-case`，在 $std 中以稳定名字 `text/to-title-case` 提供。

- **`BaseTitleCaseOptions`** (re-export)
- **`ExcludeWordConfig`** (type)
  - `export type ExcludeWordConfig = \| ExcludeWordFilter \| readonly string[] \| (ExcludeWordFilter \| readonly string[])[]`
  - A filter function or array of stop words to exclude them from title casing, or multiple filter functions and stop word arrays to combine for filtering.
- **`ExcludeWordFilter`** (type)
  - `export type ExcludeWordFilter = ( value: Intl.SegmentData, index: number, array: Intl.SegmentData[], ) => boolean; export type ExcludeWordConfig = \| ExcludeWordFilter \| readonly string[] \| (ExcludeWordFilter \| readonly…`
  - A function that filters words in the string. If a word returns true from this function, it will not be title-cased. @param value The word to be filtered. @param index The index of the word in the arr…
- **`TitleCaseOptions`** (interface)
  - `export interface TitleCaseOptions extends BaseTitleCaseOptions`
  - Options for toTitleCase
- **`toTitleCase`** (function)
  - `export function toTitleCase(input: string, options?: TitleCaseOptions): string`
  - Converts a string into Title Case.
- **`TrailingCase`** (type)
  - `export type TrailingCase = "lower" \| "unchanged"`
  - The case for the remaining characters in the string

## `$std/text/trim-by`

> ⚠️ 上游为不稳定模块 `@std/text/unstable-trim-by`，在 $std 中以稳定名字 `text/trim-by` 提供。

- **`trimBy`** (function)
  - `export function trimBy( str: string, pattern: TrimPattern, ): string`
  - Trims all instances of the specified pattern at the start and end of the string.
- **`trimEndBy`** (function)
  - `export function trimEndBy( str: string, pattern: TrimPattern, ): string`
  - Trims all instances of the specified pattern at the end of the string.
- **`TrimPattern`** (type)
  - `export type TrimPattern = \| string \| Iterable<string> \| RegExp`
  - A pattern that can be used to trim characters from an input string. - If string, trim all substrings equal to the string. - If Iterable<string>, trim all substrings equal to any member. - If RegExp,…
- **`trimStartBy`** (function)
  - `export function trimStartBy( str: string, pattern: TrimPattern, ): string`
  - Trims all instances of the specified pattern at the start of the string.

## `$std/text/truncate`

- **`truncate`** (function)
  - `export function truncate( str: string, maxLength: number, options?: TruncateOptions, ): string`
  - Truncates a string to at most maxLength UTF-16 code units. When truncation occurs the suffix is included within the maxLength budget. Surrogate pairs are never split, so the result may be shorter tha…
- **`TruncateOptions`** (interface)
  - `export interface TruncateOptions`
  - Options for truncate.

## `$std/text/word-similarity-sort`

- **`wordSimilaritySort`** (function)
  - `export function wordSimilaritySort( givenWord: string, possibleWords: ReadonlyArray<string>, options?: WordSimilaritySortOptions, ): string[]`
  - Sorts a string-array by similarity to a given string.
- **`WordSimilaritySortOptions`** (interface)
  - `export interface WordSimilaritySortOptions extends CompareSimilarityOptions`
  - Options for wordSimilaritySort.
