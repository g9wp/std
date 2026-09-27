# `$std/fmt` — @std/fmt@1.0.10

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/fmt
     需要精确签名时以 `deno doc` 或源码为准。 -->

导入：`import {...} from "$std/fmt";`　别名：`jsr:@g9wp/std@^0.1.5/fmt`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/fmt/bytes` | `@std/fmt/bytes` | `fmt/bytes.ts` | 2 |
| `$std/fmt/colors` | `@std/fmt/colors` | `fmt/colors.ts` | 49 |
| `$std/fmt/duration` | `@std/fmt/duration` | `fmt/duration.ts` | 2 |
| `$std/fmt/printf` | `@std/fmt/printf` | `fmt/printf.ts` | 2 |

## `$std/fmt/bytes`

- **`format`** (function)
  - `export function format( num: number, options: FormatOptions = {}, ): string`
  - Convert bytes to a human-readable string: 1337 → 1.34 kB
- **`FormatOptions`** (interface)
  - `export interface FormatOptions`
  - Options for format.

## `$std/fmt/colors`

- **`bgBlack`** (function)
  - `export function bgBlack(str: string): string`
  - Set background color to black.
- **`bgBlue`** (function)
  - `export function bgBlue(str: string): string`
  - Set background color to blue.
- **`bgBrightBlack`** (function)
  - `export function bgBrightBlack(str: string): string`
  - Set background color to bright black.
- **`bgBrightBlue`** (function)
  - `export function bgBrightBlue(str: string): string`
  - Set background color to bright blue.
- **`bgBrightCyan`** (function)
  - `export function bgBrightCyan(str: string): string`
  - Set background color to bright cyan.
- **`bgBrightGreen`** (function)
  - `export function bgBrightGreen(str: string): string`
  - Set background color to bright green.
- **`bgBrightMagenta`** (function)
  - `export function bgBrightMagenta(str: string): string`
  - Set background color to bright magenta.
- **`bgBrightRed`** (function)
  - `export function bgBrightRed(str: string): string`
  - Set background color to bright red.
- **`bgBrightWhite`** (function)
  - `export function bgBrightWhite(str: string): string`
  - Set background color to bright white.
- **`bgBrightYellow`** (function)
  - `export function bgBrightYellow(str: string): string`
  - Set background color to bright yellow.
- **`bgCyan`** (function)
  - `export function bgCyan(str: string): string`
  - Set background color to cyan.
- **`bgGreen`** (function)
  - `export function bgGreen(str: string): string`
  - Set background color to green.
- **`bgMagenta`** (function)
  - `export function bgMagenta(str: string): string`
  - Set background color to magenta.
- **`bgRed`** (function)
  - `export function bgRed(str: string): string`
  - Set background color to red.
- **`bgRgb24`** (function)
  - `export function bgRgb24(str: string, color: number \| Rgb): string`
  - Set background color using 24bit rgb. color can be a number in range 0x000000 to 0xffffff or an Rgb.
- **`bgRgb8`** (function)
  - `export function bgRgb8(str: string, color: number): string`
  - Set background color using paletted 8bit colors. https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
- **`bgWhite`** (function)
  - `export function bgWhite(str: string): string`
  - Set background color to white.
- **`bgYellow`** (function)
  - `export function bgYellow(str: string): string`
  - Set background color to yellow.
- **`black`** (function)
  - `export function black(str: string): string`
  - Set text color to black.
- **`blue`** (function)
  - `export function blue(str: string): string`
  - Set text color to blue.
- **`bold`** (function)
  - `export function bold(str: string): string`
  - Make the text bold.
- **`brightBlack`** (function)
  - `export function brightBlack(str: string): string`
  - Set text color to bright black.
- **`brightBlue`** (function)
  - `export function brightBlue(str: string): string`
  - Set text color to bright blue.
- **`brightCyan`** (function)
  - `export function brightCyan(str: string): string`
  - Set text color to bright cyan.
- **`brightGreen`** (function)
  - `export function brightGreen(str: string): string`
  - Set text color to bright green.
- **`brightMagenta`** (function)
  - `export function brightMagenta(str: string): string`
  - Set text color to bright magenta.
- **`brightRed`** (function)
  - `export function brightRed(str: string): string`
  - Set text color to bright red.
- **`brightWhite`** (function)
  - `export function brightWhite(str: string): string`
  - Set text color to bright white.
- **`brightYellow`** (function)
  - `export function brightYellow(str: string): string`
  - Set text color to bright yellow.
- **`cyan`** (function)
  - `export function cyan(str: string): string`
  - Set text color to cyan.
- **`dim`** (function)
  - `export function dim(str: string): string`
  - The text emits only a small amount of light.
- **`getColorEnabled`** (function)
  - `export function getColorEnabled(): boolean`
  - Get whether text color change is enabled or disabled.
- **`gray`** (function)
  - `export function gray(str: string): string`
  - Set text color to gray.
- **`green`** (function)
  - `export function green(str: string): string`
  - Set text color to green.
- **`hidden`** (function)
  - `export function hidden(str: string): string`
  - Make the text hidden.
- **`inverse`** (function)
  - `export function inverse(str: string): string`
  - Invert background color and text color.
- **`italic`** (function)
  - `export function italic(str: string): string`
  - Make the text italic.
- **`magenta`** (function)
  - `export function magenta(str: string): string`
  - Set text color to magenta.
- **`red`** (function)
  - `export function red(str: string): string`
  - Set text color to red.
- **`reset`** (function)
  - `export function reset(str: string): string`
  - Reset the text modified.
- **`Rgb`** (interface)
  - `export interface Rgb`
  - RGB 8-bits per channel. Each in range 0->255 or 0x00->0xff
- **`rgb24`** (function)
  - `export function rgb24(str: string, color: number \| Rgb): string`
  - Set text color using 24bit rgb. color can be a number in range 0x000000 to 0xffffff or an Rgb.
- **`rgb8`** (function)
  - `export function rgb8(str: string, color: number): string`
  - Set text color using paletted 8bit colors. https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
- **`setColorEnabled`** (function)
  - `export function setColorEnabled(value: boolean)`
  - Enable or disable text color when styling.
- **`strikethrough`** (function)
  - `export function strikethrough(str: string): string`
  - Put horizontal line through the center of the text.
- **`stripAnsiCode`** (function)
  - `export function stripAnsiCode(string: string): string`
  - Remove ANSI escape codes from the string.
- **`underline`** (function)
  - `export function underline(str: string): string`
  - Make the text underline.
- **`white`** (function)
  - `export function white(str: string): string`
  - Set text color to white.
- **`yellow`** (function)
  - `export function yellow(str: string): string`
  - Set text color to yellow.

## `$std/fmt/duration`

- **`format`** (function)
  - `export function format( ms: number, options?: FormatOptions, ): string`
  - Format milliseconds to time duration.
- **`FormatOptions`** (interface)
  - `export interface FormatOptions`
  - Options for format.

## `$std/fmt/printf`

- **`printf`** (function)
  - `export function printf(format: string, ...args: unknown[])`
  - Converts and formats a variable number of args as is specified by format. printf writes the formatted string to standard output.
- **`sprintf`** (function)
  - `export function sprintf(format: string, ...args: unknown[]): string`
  - Converts and formats a variable number of args as is specified by format. sprintf returns the formatted string.
