# `$std/media-types` — @std/media-types@1.1.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/media_types
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utility functions for media types (MIME types).

导入：`import {...} from "$std/media-types";`　别名：`jsr:@g9wp/std@^0.1.5/media-types`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/media-types` | `@std/media-types` | `media_types/mod.ts` | 10 |
| `$std/media-types/all-extensions` | `@std/media-types/all-extensions` | `media_types/all_extensions.ts` | 1 |
| `$std/media-types/content-type` | `@std/media-types/content-type` | `media_types/content_type.ts` | 4 |
| `$std/media-types/extension` | `@std/media-types/extension` | `media_types/extension.ts` | 1 |
| `$std/media-types/format-media-type` | `@std/media-types/format-media-type` | `media_types/format_media_type.ts` | 1 |
| `$std/media-types/get-charset` | `@std/media-types/get-charset` | `media_types/get_charset.ts` | 1 |
| `$std/media-types/parse-media-type` | `@std/media-types/parse-media-type` | `media_types/parse_media_type.ts` | 1 |
| `$std/media-types/type-by-extension` | `@std/media-types/type-by-extension` | `media_types/type_by_extension.ts` | 1 |

## `$std/media-types`

10 个导出符号：

- **`allExtensions`** (function)
  - `export function allExtensions(type: string): string[] \| undefined`
  - Returns all the extensions known to be associated with the media type type, or undefined if no extensions are found.
- **`contentType`** (function)
  - `export function contentType< T extends (string & {})`
  - Returns the full Content-Type or Content-Disposition header value for the given extension or media type.
- **`ContentTypeToExtension`** (type)
  - `export type ContentTypeToExtension = … }`
  - Maps content types to their corresponding file extensions.
- **`DB`** (type)
  - `export type DB = typeof db`
  - MIME-types database.
- **`extension`** (function)
  - `export function extension(type: string): string \| undefined`
  - Returns the most relevant extension for the given media type, or undefined if no extension can be found.
- **`formatMediaType`** (function)
  - `export function formatMediaType( type: string, param?: Record<string, string> \| Iterable<[string, string]>, ): string`
  - Serializes the media type and the optional parameters as a media type conforming to RFC 2045 and RFC 2616.
- **`getCharset`** (function)
  - `export function getCharset(type: string): string \| undefined`
  - Given a media type or header value, identify the encoding charset. If the charset cannot be determined, the function returns undefined.
- **`KnownExtensionOrType`** (type)
  - `export type KnownExtensionOrType = \| keyof ContentTypeToExtension \| ContentTypeToExtension[keyof ContentTypeToExtension] \| `.$ … }`
  - Known extension or type. Used in contentType.
- **`parseMediaType`** (function)
  - `export function parseMediaType( type: string, ): [mediaType: string, params: Record<string, string> \| undefined]`
  - Parses the media type and any optional parameters, per RFC 1521.
- **`typeByExtension`** (function)
  - `export function typeByExtension(extension: string): string \| undefined`
  - Returns the media type associated with the file extension, or undefined if no media type is found.

## `$std/media-types/all-extensions`

- **`allExtensions`** (function)
  - `export function allExtensions(type: string): string[] \| undefined`
  - Returns all the extensions known to be associated with the media type type, or undefined if no extensions are found.

## `$std/media-types/content-type`

- **`contentType`** (function)
  - `export function contentType< T extends (string & {})`
  - Returns the full Content-Type or Content-Disposition header value for the given extension or media type.
- **`ContentTypeToExtension`** (type)
  - `export type ContentTypeToExtension = … }`
  - Maps content types to their corresponding file extensions.
- **`DB`** (type)
  - `export type DB = typeof db`
  - MIME-types database.
- **`KnownExtensionOrType`** (type)
  - `export type KnownExtensionOrType = \| keyof ContentTypeToExtension \| ContentTypeToExtension[keyof ContentTypeToExtension] \| `.$ … }`
  - Known extension or type. Used in contentType.

## `$std/media-types/extension`

- **`extension`** (function)
  - `export function extension(type: string): string \| undefined`
  - Returns the most relevant extension for the given media type, or undefined if no extension can be found.

## `$std/media-types/format-media-type`

- **`formatMediaType`** (function)
  - `export function formatMediaType( type: string, param?: Record<string, string> \| Iterable<[string, string]>, ): string`
  - Serializes the media type and the optional parameters as a media type conforming to RFC 2045 and RFC 2616.

## `$std/media-types/get-charset`

- **`getCharset`** (function)
  - `export function getCharset(type: string): string \| undefined`
  - Given a media type or header value, identify the encoding charset. If the charset cannot be determined, the function returns undefined.

## `$std/media-types/parse-media-type`

- **`parseMediaType`** (function)
  - `export function parseMediaType( type: string, ): [mediaType: string, params: Record<string, string> \| undefined]`
  - Parses the media type and any optional parameters, per RFC 1521.

## `$std/media-types/type-by-extension`

- **`typeByExtension`** (function)
  - `export function typeByExtension(extension: string): string \| undefined`
  - Returns the media type associated with the file extension, or undefined if no media type is found.
