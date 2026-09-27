# `$std/cli` — @std/cli@1.0.32

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/cli
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Tools for creating interactive command line tools.

导入：`import {...} from "$std/cli";`　别名：`jsr:@g9wp/std@^0.1.5/cli`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/cli` | `@std/cli` + `@std/cli/unstable-ansi` + `@std/cli/unstable-get-cursor` + `@std/cli/unstable-progress-bar` + `@std/cli/unstable-progress-bar-stream` + `@std/cli/unstable-prompt-select` + `@std/cli/unstable-prompt-multiple-select` + `@std/cli/unstable-spinner` + `@std/cli/unstable-static-line` | `cli/mod.ts`, `cli/unstable_ansi.ts`, `cli/unstable_get_cursor.ts`, `cli/unstable_progress_bar.ts`, `cli/unstable_progress_bar_stream.ts`, `cli/unstable_prompt_select.ts`, `cli/unstable_prompt_multiple_select.ts`, `cli/unstable_spinner.ts`, `cli/unstable_static_line.ts` | 67 |
| `$std/cli/ansi` | `@std/cli/unstable-ansi` | `cli/unstable_ansi.ts` | 44 |
| `$std/cli/get-cursor` | `@std/cli/unstable-get-cursor` | `cli/unstable_get_cursor.ts` | 1 |
| `$std/cli/parse-args` | `@std/cli/parse-args` | `cli/parse_args.ts` | 3 |
| `$std/cli/progress-bar` | `@std/cli/unstable-progress-bar` | `cli/unstable_progress_bar.ts` | 3 |
| `$std/cli/progress-bar-stream` | `@std/cli/unstable-progress-bar-stream` | `cli/unstable_progress_bar_stream.ts` | 2 |
| `$std/cli/prompt-multiple-select` | `@std/cli/unstable-prompt-multiple-select` | `cli/unstable_prompt_multiple_select.ts` | 4 |
| `$std/cli/prompt-secret` | `@std/cli/prompt-secret` | `cli/prompt_secret.ts` | 2 |
| `$std/cli/prompt-select` | `@std/cli/unstable-prompt-select` | `cli/unstable_prompt_select.ts` | 4 |
| `$std/cli/spinner` | `@std/cli/unstable-spinner` | `cli/unstable_spinner.ts` | 4 |
| `$std/cli/static-line` | `@std/cli/unstable-static-line` | `cli/unstable_static_line.ts` | 1 |
| `$std/cli/unicode-width` | `@std/cli/unicode-width` | `cli/unicode_width.ts` | 1 |

## `$std/cli`

67 个导出符号：

- **`Ansi`** (type) 🚫@internal
  - `export type Ansi = string & … }`
  - This is a hack to allow us to use the same type for both the color name and an ANSI escape code.
- **`Args`** (type)
  - `export type Args< TArgs extends Record<string, unknown> = Record<string, any>, TDoubleDash extends boolean \| undefined = undefined, > = Id< & TArgs & { _: Array<string \| number>; } & (boolean extends TDoubleDash ? Doubl…`
  - The value returned from parseArgs.
- **`askForCursorPositionSync`** (function)
  - `export function askForCursorPositionSync(): \| { row: number; column: number } \| null`
  - This function asks the terminal for the cursor's current position. Information entered by the user will be discarded while requesting the cursor position. The cursor position may have also moved in t…
- **`Color`** (type)
  - `export type Color = \| "black" \| "red" \| "green" \| "yellow" \| "blue" \| "magenta" \| "cyan" \| "white" \| "gray" \| Ansi`
  - Color options for SpinnerOptions.color.
- **`deleteCharacters`** (function)
  - `export function deleteCharacters(x = 1): string`
  - Deletes x characters at cursor position and to the right. Shifting line content left.
- **`deleteLines`** (function)
  - `export function deleteLines(x = 1): string`
  - Deletes x lines at cursor position. Shifting below lines up.
- **`DISABLE_AUTO_WRAP`** (const)
  - `export const DISABLE_AUTO_WRAP`
  - Causes cursor to remain on the same line when it hits the end of the current line. See also ENABLE_AUTO_WRAP.
- **`DISABLE_ORIGIN_MODE`** (const)
  - `export const DISABLE_ORIGIN_MODE`
  - Causes the top and bottom margins to enlarge to the user's display. See ENABLE_ORIGIN_MODE.
- **`DOUBLE_HEIGHT_BOTTOM`** (const)
  - `export const DOUBLE_HEIGHT_BOTTOM`
  - Causes content on the current line to enlarge, showing only the bottom half of the characters with each character taking up two columns. Can be used in combination with DOUBLE_HEIGHT_TOP on the previ…
- **`DOUBLE_HEIGHT_TOP`** (const)
  - `export const DOUBLE_HEIGHT_TOP`
  - Causes content on the current line to enlarge, showing only the top half of characters with each character taking up two columns. Can be used in combination with DOUBLE_HEIGHT_BOTTOM on the next line…
- **`DOUBLE_WIDTH`** (const)
  - `export const DOUBLE_WIDTH`
  - Causes content on the current line to stretch out, with each character taking up two columns. Can be reverted with SINGLE_WIDTH.
- **`ENABLE_AUTO_WRAP`** (const)
  - `export const ENABLE_AUTO_WRAP`
  - Causes cursor to automatically move to the next line when it hits the end of the current line to continue writing. See also DISABLE_AUTO_WRAP.
- **`ENABLE_ORIGIN_MODE`** (const)
  - `export const ENABLE_ORIGIN_MODE`
  - Causes top and bottom margins to shrink to scrollable region (See setScrollableRegion) preventing the cursor from moving to the lines outside it.
- **`enum`** (const)
  - `export const enum CursorStyle { Default = 0, BlinkingBlock = 1, SteadyBlock = 2, BlinkingUnderline = 3, SteadyUnderline = 4, BlinkingBar = 5, SteadyBar = 6, }`
  - CursorStyle is a export const enum used to set the value in setCursorStyle.
- **`ERASE_DISPLAY`** (const)
  - `export const ERASE_DISPLAY`
  - Erases all content.
- **`ERASE_DISPLAY_AFTER_CURSOR`** (const)
  - `export const ERASE_DISPLAY_AFTER_CURSOR`
  - Erases content of lines below cursor position and content to the right on the same line as cursor.
- **`ERASE_DISPLAY_BEFORE_CURSOR`** (const)
  - `export const ERASE_DISPLAY_BEFORE_CURSOR`
  - Erases content of lines above cursor position and content to the left on the same line as cursor.
- **`ERASE_LINE`** (const)
  - `export const ERASE_LINE`
  - Erases entire line content.
- **`ERASE_LINE_AFTER_CURSOR`** (const)
  - `export const ERASE_LINE_AFTER_CURSOR`
  - Erases line content to the right of cursor position.
- **`ERASE_LINE_BEFORE_CURSOR`** (const)
  - `export const ERASE_LINE_BEFORE_CURSOR`
  - Erases line content to the left of cursor position.
- **`eraseCharacters`** (function)
  - `export function eraseCharacters(x = 1): string`
  - Erases x characters at cursor position and to the right.
- **`HARD_RESET`** (const)
  - `export const HARD_RESET`
  - This is a full reset of the terminal, reverting it back to its original default settings, clearing the screen, resetting modes, colors, character sets and more. Essentially making the terminal behave…
- **`HIDE_CURSOR`** (const)
  - `export const HIDE_CURSOR`
  - Causes cursor position to be hidden from the user. See also SHOW_CURSOR.
- **`INSERT_MODE`** (const)
  - `export const INSERT_MODE`
  - Causes existing characters to the right of the cursor position to shift right as new characters are written. Opposite of REPLACE_MODE.
- **`insertLines`** (function)
  - `export function insertLines(x = 1): string`
  - Inserts x lines at cursor position. Shifting current line and below down. Cursor position does not change. Characters that exit the display are discarded.
- **`insertSpace`** (function)
  - `export function insertSpace(x = 1): string`
  - Inserts x spaces at the cursor position. Shifting existing line content to the right. Cursor position does not change. Characters that exit the display are discarded.
- **`moveCursorDown`** (function)
  - `export function moveCursorDown(x = 1): string`
  - Moves cursor position down x lines or up to the bottom margin.
- **`moveCursorDownStart`** (function)
  - `export function moveCursorDownStart(x = 1): string`
  - Moves cursor position x lines down or up to the bottom margin, and to the beginning of that line.
- **`moveCursorLeft`** (function)
  - `export function moveCursorLeft(x = 1): string`
  - Moves cursor position x columns left or up to the left margin.
- **`moveCursorLeftTab`** (function)
  - `export function moveCursorLeftTab(x = 1): string`
  - Moves cursor position x tab stops left or up to the left margin.
- **`moveCursorRight`** (function)
  - `export function moveCursorRight(x = 1): string`
  - Moves cursor position x columns right or up to the right margin.
- **`moveCursorRightTab`** (function)
  - `export function moveCursorRightTab(x = 1): string`
  - Moves cursor position x tab stops right or up to the right margin.
- **`moveCursorUp`** (function)
  - `export function moveCursorUp(x = 1): string`
  - Moves cursor position up x lines or up to the top margin.
- **`moveCursorUpStart`** (function)
  - `export function moveCursorUpStart(x = 1): string`
  - Moves cursor position x lines up or up to the top of the margin, and to the beginning of that line.
- **`parseArgs`** (function)
  - `export function parseArgs< TArgs extends Values< TBooleans, TStrings, TCollectable, TNegatable, TDefaults, TAliases >, TDoubleDash extends boolean \| undefined = undefined, TBooleans extends BooleanType = undefined, TStr…`
  - Take a set of command line arguments, optionally with a set of options, and return an object representing the flags found in the passed arguments.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions< TBooleans extends BooleanType = BooleanType, TStrings extends StringType = StringType, TCollectable extends Collectable = Collectable, TNegatable extends Negatable = Negatable, TDefault ex…`
  - Options for parseArgs.
- **`ProgressBar`** (class)
  - `export class ProgressBar`
  - ProgressBar is a customisable class that reports updates to a WritableStream on a 1s interval. Progress is communicated by using the ProgressBar.value property.
- **`ProgressBarFormatter`** (interface)
  - `export interface ProgressBarFormatter`
  - The properties provided to the fmt function upon every visual update.
- **`ProgressBarOptions`** (interface)
  - `export interface ProgressBarOptions`
  - The options that are provided to a createProgressBar or ProgressBarStream.
- **`ProgressBarStream`** (class)
  - `export class ProgressBarStream extends TransformStream<Uint8Array_, Uint8Array_>`
  - ProgressBarStream is a TransformStream class that reports updates to a separate WritableStream on a 1s interval.
- **`PromptEntry`** (type)
  - `export type PromptEntry<V = undefined> = V extends undefined ? string : PromptEntryWithValue<V>`
  - Value for promptSelect. If an object, it must have a title and a value, else it can just be a string.
- **`PromptEntryWithValue`** (interface)
  - `export interface PromptEntryWithValue<V>`
  - A PromptEntry with an underlying value.
- **`promptMultipleSelect`** (function)
  - `export function promptMultipleSelect<V = undefined>( message: string, values: PromptEntry<V>[], options: PromptMultipleSelectOptions = {}, ): PromptEntry<V>[] \| null`
  - Shows the given message and waits for the user's input. Returns the user's selected value as string.
- **`PromptMultipleSelectOptions`** (interface)
  - `export interface PromptMultipleSelectOptions`
  - Options for promptMultipleSelect.
- **`promptSecret`** (function)
  - `export function promptSecret( message = "Secret", options?: PromptSecretOptions, ): string \| null`
  - Shows the given message and waits for the user's input. Returns the user's input as string. This is similar to prompt() but it print user's input as * to prevent password from being shown. Use an emp…
- **`PromptSecretOptions`** (type)
  - `export type PromptSecretOptions = … }`
  - Options for promptSecret.
- **`promptSelect`** (function)
  - `export function promptSelect<V = undefined>( message: string, values: PromptEntry<V>[], options: PromptSelectOptions = {}, ): PromptEntry<V> \| null`
  - Shows the given message and waits for the user's input. Returns the user's selected value as string.
- **`PromptSelectOptions`** (interface)
  - `export interface PromptSelectOptions`
  - Options for promptSelect.
- **`repeatLastCharacter`** (function)
  - `export function repeatLastCharacter(x = 1): string`
  - Repeats last graphic character printed x times at cursor position.
- **`REPLACE_MODE`** (const)
  - `export const REPLACE_MODE`
  - Causes existing characters to be overwritten at the cursor position by new characters. See also INSERT_MODE.
- **`RESTORE_CURSOR`** (const)
  - `export const RESTORE_CURSOR`
  - Restores: - cursor position - graphic rendition - character set shift state - state of wrap flag ENABLE_AUTO_WRAP - state of origin mode ENABLE_ORIGIN_MODE - selective eraser
- **`SAVE_CURSOR`** (const)
  - `export const SAVE_CURSOR`
  - Saves: - cursor position - graphic rendition - character set shift state - state of wrap flag ENABLE_AUTO_WRAP - state of origin mode ENABLE_ORIGIN_MODE - selective eraser
- **`setCursorColumn`** (function)
  - `export function setCursorColumn(x = 1): string`
  - Sets cursor position to column x or up to the sides of the margins. Columns begin at 1 not 0.
- **`setCursorLine`** (function)
  - `export function setCursorLine(x = 1): string`
  - Sets cursor position to line x or down to the bottom of the margin. Lines begin at 1 not 0.
- **`setCursorPosition`** (function)
  - `export function setCursorPosition(x = 1, y = 1): string`
  - Sets cursor position to x line and y column or up to the margin. Lines and columns begin at 1 not 0.
- **`setCursorStyle`** (function)
  - `export function setCursorStyle(x: CursorStyle): string`
  - Sets the cursor animation style.
- **`setScrollableRegion`** (function)
  - `export function setScrollableRegion(x = 1, y?: number): string`
  - Sets the scrollable region of the display. Allowing either or both the top and bottom lines to not have their content moved when the scrolling region is updated. x is the top line of the scrollable r…
- **`shiftDownAndInsert`** (function)
  - `export function shiftDownAndInsert(x = 1): string`
  - Shifts content within the scrollable region down x lines, inserting blank lines at the top of the scrollable region.
- **`shiftUpAndInsert`** (function)
  - `export function shiftUpAndInsert(x = 1): string`
  - Shifts content within the scrollable region up x lines, inserting blank lines at the bottom of the scrollable region.
- **`SHOW_CURSOR`** (const)
  - `export const SHOW_CURSOR`
  - Causes cursor position to be visible to the user. See also HIDE_CURSOR.
- **`SINGLE_WIDTH`** (const)
  - `export const SINGLE_WIDTH`
  - Causes content on the current line to shrink down to a single column, essentially reverting the effects of DOUBLE_HEIGHT_TOP, DOUBLE_HEIGHT_BOTTOM, or DOUBLE_WIDTH.
- **`SOFT_RESET`** (const)
  - `export const SOFT_RESET`
  - This command resets many settings to their initial state without fully reinitializing the terminal like HARD_RESET. It preserves things like cursor position and display content, but clears modes, cha…
- **`Spinner`** (class)
  - `export class Spinner`
  - A spinner that can be used to indicate that something is loading.
- **`SpinnerOptions`** (interface)
  - `export interface SpinnerOptions`
  - Options for Spinner.
- **`StaticLine`** (class)
  - `export class StaticLine`
  - StaticLine is a class that assigns a line in the terminal for you to write to and that won't be overwritten by console.log.
- **`Uint8Array_`** (re-export)
- **`unicodeWidth`** (function)
  - `export function unicodeWidth(str: string): number`
  - Calculate the physical width of a string in a TTY-like environment. This is useful for cases such as calculating where a line-wrap will occur and underlining strings.

## `$std/cli/ansi`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-ansi`，在 $std 中以稳定名字 `cli/ansi` 提供。

- **`deleteCharacters`** (function)
  - `export function deleteCharacters(x = 1): string`
  - Deletes x characters at cursor position and to the right. Shifting line content left.
- **`deleteLines`** (function)
  - `export function deleteLines(x = 1): string`
  - Deletes x lines at cursor position. Shifting below lines up.
- **`DISABLE_AUTO_WRAP`** (const)
  - `export const DISABLE_AUTO_WRAP`
  - Causes cursor to remain on the same line when it hits the end of the current line. See also ENABLE_AUTO_WRAP.
- **`DISABLE_ORIGIN_MODE`** (const)
  - `export const DISABLE_ORIGIN_MODE`
  - Causes the top and bottom margins to enlarge to the user's display. See ENABLE_ORIGIN_MODE.
- **`DOUBLE_HEIGHT_BOTTOM`** (const)
  - `export const DOUBLE_HEIGHT_BOTTOM`
  - Causes content on the current line to enlarge, showing only the bottom half of the characters with each character taking up two columns. Can be used in combination with DOUBLE_HEIGHT_TOP on the previ…
- **`DOUBLE_HEIGHT_TOP`** (const)
  - `export const DOUBLE_HEIGHT_TOP`
  - Causes content on the current line to enlarge, showing only the top half of characters with each character taking up two columns. Can be used in combination with DOUBLE_HEIGHT_BOTTOM on the next line…
- **`DOUBLE_WIDTH`** (const)
  - `export const DOUBLE_WIDTH`
  - Causes content on the current line to stretch out, with each character taking up two columns. Can be reverted with SINGLE_WIDTH.
- **`ENABLE_AUTO_WRAP`** (const)
  - `export const ENABLE_AUTO_WRAP`
  - Causes cursor to automatically move to the next line when it hits the end of the current line to continue writing. See also DISABLE_AUTO_WRAP.
- **`ENABLE_ORIGIN_MODE`** (const)
  - `export const ENABLE_ORIGIN_MODE`
  - Causes top and bottom margins to shrink to scrollable region (See setScrollableRegion) preventing the cursor from moving to the lines outside it.
- **`enum`** (const)
  - `export const enum CursorStyle { Default = 0, BlinkingBlock = 1, SteadyBlock = 2, BlinkingUnderline = 3, SteadyUnderline = 4, BlinkingBar = 5, SteadyBar = 6, }`
  - CursorStyle is a export const enum used to set the value in setCursorStyle.
- **`ERASE_DISPLAY`** (const)
  - `export const ERASE_DISPLAY`
  - Erases all content.
- **`ERASE_DISPLAY_AFTER_CURSOR`** (const)
  - `export const ERASE_DISPLAY_AFTER_CURSOR`
  - Erases content of lines below cursor position and content to the right on the same line as cursor.
- **`ERASE_DISPLAY_BEFORE_CURSOR`** (const)
  - `export const ERASE_DISPLAY_BEFORE_CURSOR`
  - Erases content of lines above cursor position and content to the left on the same line as cursor.
- **`ERASE_LINE`** (const)
  - `export const ERASE_LINE`
  - Erases entire line content.
- **`ERASE_LINE_AFTER_CURSOR`** (const)
  - `export const ERASE_LINE_AFTER_CURSOR`
  - Erases line content to the right of cursor position.
- **`ERASE_LINE_BEFORE_CURSOR`** (const)
  - `export const ERASE_LINE_BEFORE_CURSOR`
  - Erases line content to the left of cursor position.
- **`eraseCharacters`** (function)
  - `export function eraseCharacters(x = 1): string`
  - Erases x characters at cursor position and to the right.
- **`HARD_RESET`** (const)
  - `export const HARD_RESET`
  - This is a full reset of the terminal, reverting it back to its original default settings, clearing the screen, resetting modes, colors, character sets and more. Essentially making the terminal behave…
- **`HIDE_CURSOR`** (const)
  - `export const HIDE_CURSOR`
  - Causes cursor position to be hidden from the user. See also SHOW_CURSOR.
- **`INSERT_MODE`** (const)
  - `export const INSERT_MODE`
  - Causes existing characters to the right of the cursor position to shift right as new characters are written. Opposite of REPLACE_MODE.
- **`insertLines`** (function)
  - `export function insertLines(x = 1): string`
  - Inserts x lines at cursor position. Shifting current line and below down. Cursor position does not change. Characters that exit the display are discarded.
- **`insertSpace`** (function)
  - `export function insertSpace(x = 1): string`
  - Inserts x spaces at the cursor position. Shifting existing line content to the right. Cursor position does not change. Characters that exit the display are discarded.
- **`moveCursorDown`** (function)
  - `export function moveCursorDown(x = 1): string`
  - Moves cursor position down x lines or up to the bottom margin.
- **`moveCursorDownStart`** (function)
  - `export function moveCursorDownStart(x = 1): string`
  - Moves cursor position x lines down or up to the bottom margin, and to the beginning of that line.
- **`moveCursorLeft`** (function)
  - `export function moveCursorLeft(x = 1): string`
  - Moves cursor position x columns left or up to the left margin.
- **`moveCursorLeftTab`** (function)
  - `export function moveCursorLeftTab(x = 1): string`
  - Moves cursor position x tab stops left or up to the left margin.
- **`moveCursorRight`** (function)
  - `export function moveCursorRight(x = 1): string`
  - Moves cursor position x columns right or up to the right margin.
- **`moveCursorRightTab`** (function)
  - `export function moveCursorRightTab(x = 1): string`
  - Moves cursor position x tab stops right or up to the right margin.
- **`moveCursorUp`** (function)
  - `export function moveCursorUp(x = 1): string`
  - Moves cursor position up x lines or up to the top margin.
- **`moveCursorUpStart`** (function)
  - `export function moveCursorUpStart(x = 1): string`
  - Moves cursor position x lines up or up to the top of the margin, and to the beginning of that line.
- **`repeatLastCharacter`** (function)
  - `export function repeatLastCharacter(x = 1): string`
  - Repeats last graphic character printed x times at cursor position.
- **`REPLACE_MODE`** (const)
  - `export const REPLACE_MODE`
  - Causes existing characters to be overwritten at the cursor position by new characters. See also INSERT_MODE.
- **`RESTORE_CURSOR`** (const)
  - `export const RESTORE_CURSOR`
  - Restores: - cursor position - graphic rendition - character set shift state - state of wrap flag ENABLE_AUTO_WRAP - state of origin mode ENABLE_ORIGIN_MODE - selective eraser
- **`SAVE_CURSOR`** (const)
  - `export const SAVE_CURSOR`
  - Saves: - cursor position - graphic rendition - character set shift state - state of wrap flag ENABLE_AUTO_WRAP - state of origin mode ENABLE_ORIGIN_MODE - selective eraser
- **`setCursorColumn`** (function)
  - `export function setCursorColumn(x = 1): string`
  - Sets cursor position to column x or up to the sides of the margins. Columns begin at 1 not 0.
- **`setCursorLine`** (function)
  - `export function setCursorLine(x = 1): string`
  - Sets cursor position to line x or down to the bottom of the margin. Lines begin at 1 not 0.
- **`setCursorPosition`** (function)
  - `export function setCursorPosition(x = 1, y = 1): string`
  - Sets cursor position to x line and y column or up to the margin. Lines and columns begin at 1 not 0.
- **`setCursorStyle`** (function)
  - `export function setCursorStyle(x: CursorStyle): string`
  - Sets the cursor animation style.
- **`setScrollableRegion`** (function)
  - `export function setScrollableRegion(x = 1, y?: number): string`
  - Sets the scrollable region of the display. Allowing either or both the top and bottom lines to not have their content moved when the scrolling region is updated. x is the top line of the scrollable r…
- **`shiftDownAndInsert`** (function)
  - `export function shiftDownAndInsert(x = 1): string`
  - Shifts content within the scrollable region down x lines, inserting blank lines at the top of the scrollable region.
- **`shiftUpAndInsert`** (function)
  - `export function shiftUpAndInsert(x = 1): string`
  - Shifts content within the scrollable region up x lines, inserting blank lines at the bottom of the scrollable region.
- **`SHOW_CURSOR`** (const)
  - `export const SHOW_CURSOR`
  - Causes cursor position to be visible to the user. See also HIDE_CURSOR.
- **`SINGLE_WIDTH`** (const)
  - `export const SINGLE_WIDTH`
  - Causes content on the current line to shrink down to a single column, essentially reverting the effects of DOUBLE_HEIGHT_TOP, DOUBLE_HEIGHT_BOTTOM, or DOUBLE_WIDTH.
- **`SOFT_RESET`** (const)
  - `export const SOFT_RESET`
  - This command resets many settings to their initial state without fully reinitializing the terminal like HARD_RESET. It preserves things like cursor position and display content, but clears modes, cha…

## `$std/cli/get-cursor`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-get-cursor`，在 $std 中以稳定名字 `cli/get-cursor` 提供。

- **`askForCursorPositionSync`** (function)
  - `export function askForCursorPositionSync(): \| { row: number; column: number } \| null`
  - This function asks the terminal for the cursor's current position. Information entered by the user will be discarded while requesting the cursor position. The cursor position may have also moved in t…

## `$std/cli/parse-args`

- **`Args`** (type)
  - `export type Args< TArgs extends Record<string, unknown> = Record<string, any>, TDoubleDash extends boolean \| undefined = undefined, > = Id< & TArgs & { _: Array<string \| number>; } & (boolean extends TDoubleDash ? Doubl…`
  - The value returned from parseArgs.
- **`parseArgs`** (function)
  - `export function parseArgs< TArgs extends Values< TBooleans, TStrings, TCollectable, TNegatable, TDefaults, TAliases >, TDoubleDash extends boolean \| undefined = undefined, TBooleans extends BooleanType = undefined, TStr…`
  - Take a set of command line arguments, optionally with a set of options, and return an object representing the flags found in the passed arguments.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions< TBooleans extends BooleanType = BooleanType, TStrings extends StringType = StringType, TCollectable extends Collectable = Collectable, TNegatable extends Negatable = Negatable, TDefault ex…`
  - Options for parseArgs.

## `$std/cli/progress-bar`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-progress-bar`，在 $std 中以稳定名字 `cli/progress-bar` 提供。

- **`ProgressBar`** (class)
  - `export class ProgressBar`
  - ProgressBar is a customisable class that reports updates to a WritableStream on a 1s interval. Progress is communicated by using the ProgressBar.value property.
- **`ProgressBarFormatter`** (interface)
  - `export interface ProgressBarFormatter`
  - The properties provided to the fmt function upon every visual update.
- **`ProgressBarOptions`** (interface)
  - `export interface ProgressBarOptions`
  - The options that are provided to a createProgressBar or ProgressBarStream.

## `$std/cli/progress-bar-stream`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-progress-bar-stream`，在 $std 中以稳定名字 `cli/progress-bar-stream` 提供。

- **`ProgressBarStream`** (class)
  - `export class ProgressBarStream extends TransformStream<Uint8Array_, Uint8Array_>`
  - ProgressBarStream is a TransformStream class that reports updates to a separate WritableStream on a 1s interval.
- **`Uint8Array_`** (re-export)

## `$std/cli/prompt-multiple-select`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-prompt-multiple-select`，在 $std 中以稳定名字 `cli/prompt-multiple-select` 提供。

- **`PromptEntry`** (type)
  - `export type PromptEntry<V = undefined> = V extends undefined ? string : PromptEntryWithValue<V>`
  - Value for promptMultipleSelect. If an object, it must have a title and a value, else it can just be a string.
- **`PromptEntryWithValue`** (interface)
  - `export interface PromptEntryWithValue<V>`
  - A PromptEntry with an underlying value.
- **`promptMultipleSelect`** (function)
  - `export function promptMultipleSelect<V = undefined>( message: string, values: PromptEntry<V>[], options: PromptMultipleSelectOptions = {}, ): PromptEntry<V>[] \| null`
  - Shows the given message and waits for the user's input. Returns the user's selected value as string.
- **`PromptMultipleSelectOptions`** (interface)
  - `export interface PromptMultipleSelectOptions`
  - Options for promptMultipleSelect.

## `$std/cli/prompt-secret`

- **`promptSecret`** (function)
  - `export function promptSecret( message = "Secret", options?: PromptSecretOptions, ): string \| null`
  - Shows the given message and waits for the user's input. Returns the user's input as string. This is similar to prompt() but it print user's input as * to prevent password from being shown. Use an emp…
- **`PromptSecretOptions`** (type)
  - `export type PromptSecretOptions = … }`
  - Options for promptSecret.

## `$std/cli/prompt-select`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-prompt-select`，在 $std 中以稳定名字 `cli/prompt-select` 提供。

- **`PromptEntry`** (type)
  - `export type PromptEntry<V = undefined> = V extends undefined ? string : PromptEntryWithValue<V>`
  - Value for promptSelect. If an object, it must have a title and a value, else it can just be a string.
- **`PromptEntryWithValue`** (interface)
  - `export interface PromptEntryWithValue<V>`
  - A PromptEntry with an underlying value.
- **`promptSelect`** (function)
  - `export function promptSelect<V = undefined>( message: string, values: PromptEntry<V>[], options: PromptSelectOptions = {}, ): PromptEntry<V> \| null`
  - Shows the given message and waits for the user's input. Returns the user's selected value as string.
- **`PromptSelectOptions`** (interface)
  - `export interface PromptSelectOptions`
  - Options for promptSelect.

## `$std/cli/spinner`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-spinner`，在 $std 中以稳定名字 `cli/spinner` 提供。

- **`Ansi`** (type) 🚫@internal
  - `export type Ansi = string & … }`
  - This is a hack to allow us to use the same type for both the color name and an ANSI escape code.
- **`Color`** (type)
  - `export type Color = \| "black" \| "red" \| "green" \| "yellow" \| "blue" \| "magenta" \| "cyan" \| "white" \| "gray" \| Ansi`
  - Color options for SpinnerOptions.color.
- **`Spinner`** (class)
  - `export class Spinner`
  - A spinner that can be used to indicate that something is loading.
- **`SpinnerOptions`** (interface)
  - `export interface SpinnerOptions`
  - Options for Spinner.

## `$std/cli/static-line`

> ⚠️ 上游为不稳定模块 `@std/cli/unstable-static-line`，在 $std 中以稳定名字 `cli/static-line` 提供。

- **`StaticLine`** (class)
  - `export class StaticLine`
  - StaticLine is a class that assigns a line in the terminal for you to write to and that won't be overwritten by console.log.

## `$std/cli/unicode-width`

- **`unicodeWidth`** (function)
  - `export function unicodeWidth(str: string): number`
  - Calculate the physical width of a string in a TTY-like environment. This is useful for cases such as calculating where a line-wrap will occur and underlining strings.
