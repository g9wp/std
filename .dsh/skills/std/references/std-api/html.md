# `$std/html` — @std/html@1.0.7

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/html
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Functions for HTML tasks such as escaping or unescaping HTML entities.

导入：`import {...} from "$std/html";`　别名：`jsr:@g9wp/std@^0.1.5/html`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/html` | `@std/html` + `@std/html/unstable-escape-css` + `@std/html/unstable-escape-js` + `@std/html/unstable-is-valid-custom-element-name` + `@std/html/unstable-html` | `html/mod.ts`, `html/unstable_escape_css.ts`, `html/unstable_escape_js.ts`, `html/unstable_is_valid_custom_element_name.ts`, `html/unstable_html.ts` | 9 |
| `$std/html/entities` | `@std/html/entities` | `html/entities.ts` | 4 |
| `$std/html/escape-css` | `@std/html/unstable-escape-css` | `html/unstable_escape_css.ts` | 1 |
| `$std/html/escape-js` | `@std/html/unstable-escape-js` | `html/unstable_escape_js.ts` | 2 |
| `$std/html/html` | `@std/html/unstable-html` | `html/unstable_html.ts` | 1 |
| `$std/html/is-valid-custom-element-name` | `@std/html/unstable-is-valid-custom-element-name` | `html/unstable_is_valid_custom_element_name.ts` | 1 |

## `$std/html`

9 个导出符号：

- **`EntityList`** (type)
  - `export type EntityList = Record<string, string>`
  - Object structure for a list of HTML entities.
- **`escape`** (function)
  - `export function escape(str: string): string`
  - Escapes text for safe interpolation into HTML text content and quoted attributes.
- **`escapeCss`** (function)
  - `export function escapeCss(str: string): string`
  - Escapes a string for direct interpolation into an external CSS style sheet, within a <style> element, or in a selector.
- **`escapeJs`** (function)
  - `export function escapeJs(data: unknown, options: EscapeJsOptions = {}): string`
  - Escapes a JavaScript object or other data for safe interpolation inside a <script> tag.
- **`EscapeJsOptions`** (type)
  - `export type EscapeJsOptions = … }`
  - Options for escapeJs
- **`html`** (function)
  - `export function html( strings: TemplateStringsArray, ...values: unknown[] ): string`
  - A template literal tag function for creating HTML strings with interpolated values.
- **`isValidCustomElementName`** (function)
  - `export function isValidCustomElementName(elementName: string): boolean`
  - Returns whether the given string is a valid custom element name, as per the requirements defined in https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name.
- **`unescape`** (function)
  - `export function unescape( str: string, options: Partial<UnescapeOptions> = {}, ): string`
  - Unescapes HTML entities in text.
- **`UnescapeOptions`** (type)
  - `export type UnescapeOptions = … }`
  - Options for unescape.

## `$std/html/entities`

- **`EntityList`** (type)
  - `export type EntityList = Record<string, string>`
  - Object structure for a list of HTML entities.
- **`escape`** (function)
  - `export function escape(str: string): string`
  - Escapes text for safe interpolation into HTML text content and quoted attributes.
- **`unescape`** (function)
  - `export function unescape( str: string, options: Partial<UnescapeOptions> = {}, ): string`
  - Unescapes HTML entities in text.
- **`UnescapeOptions`** (type)
  - `export type UnescapeOptions = … }`
  - Options for unescape.

## `$std/html/escape-css`

> ⚠️ 上游为不稳定模块 `@std/html/unstable-escape-css`，在 $std 中以稳定名字 `html/escape-css` 提供。

- **`escapeCss`** (function)
  - `export function escapeCss(str: string): string`
  - Escapes a string for direct interpolation into an external CSS style sheet, within a <style> element, or in a selector.

## `$std/html/escape-js`

> ⚠️ 上游为不稳定模块 `@std/html/unstable-escape-js`，在 $std 中以稳定名字 `html/escape-js` 提供。

- **`escapeJs`** (function)
  - `export function escapeJs(data: unknown, options: EscapeJsOptions = {}): string`
  - Escapes a JavaScript object or other data for safe interpolation inside a <script> tag.
- **`EscapeJsOptions`** (type)
  - `export type EscapeJsOptions = … }`
  - Options for escapeJs

## `$std/html/html`

> ⚠️ 上游为不稳定模块 `@std/html/unstable-html`，在 $std 中以稳定名字 `html/html` 提供。

- **`html`** (function)
  - `export function html( strings: TemplateStringsArray, ...values: unknown[] ): string`
  - A template literal tag function for creating HTML strings with interpolated values.

## `$std/html/is-valid-custom-element-name`

> ⚠️ 上游为不稳定模块 `@std/html/unstable-is-valid-custom-element-name`，在 $std 中以稳定名字 `html/is-valid-custom-element-name` 提供。

- **`isValidCustomElementName`** (function)
  - `export function isValidCustomElementName(elementName: string): boolean`
  - Returns whether the given string is a valid custom element name, as per the requirements defined in https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name.
