# `$std/front-matter` — @std/front-matter@1.0.9

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/front_matter
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Extracts front matter from strings. Adapted from jxson/front-matter.

导入：`import {...} from "$std/front-matter";`　别名：`jsr:@g9wp/std@^0.1.5/front-matter`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/front-matter` | `@std/front-matter` | `front_matter/mod.ts` | 6 |
| `$std/front-matter/any` | `@std/front-matter/any` | `front_matter/any.ts` | 2 |
| `$std/front-matter/json` | `@std/front-matter/json` | `front_matter/json.ts` | 2 |
| `$std/front-matter/test` | `@std/front-matter/test` | `front_matter/test.ts` | 2 |
| `$std/front-matter/toml` | `@std/front-matter/toml` | `front_matter/toml.ts` | 2 |
| `$std/front-matter/types` | `@std/front-matter/types` | `front_matter/types.ts` | 1 |
| `$std/front-matter/yaml` | `@std/front-matter/yaml` | `front_matter/yaml.ts` | 2 |

## `$std/front-matter`

6 个导出符号：

- **`Extract`** (type)
  - `export type Extract<T> = … }`
  - Return type for extract function.
- **`extractJson`** (re-export)
- **`extractToml`** (re-export)
- **`extractYaml`** (re-export)
- **`Format`** (re-export)
- **`test`** (function)
  - `export function test(str: string, formats?: Format[]): boolean`
  - Tests if a string has valid front matter. Supports YAML, TOML and JSON.

## `$std/front-matter/any`

- **`extract`** (function)
  - `export function extract<T>(text: string): Extract<T>`
  - Extracts and parses YAML, TOML, or JSON from the metadata of front matter content, depending on the format.
- **`Extract`** (re-export)

## `$std/front-matter/json`

- **`extract`** (function)
  - `export function extract<T>(text: string): Extract<T>`
  - Extracts and parses JSON from the metadata of front matter content.
- **`Extract`** (re-export)

## `$std/front-matter/test`

- **`Format`** (re-export)
- **`test`** (function)
  - `export function test(str: string, formats?: Format[]): boolean`
  - Tests if a string has valid front matter. Supports YAML, TOML and JSON.

## `$std/front-matter/toml`

- **`extract`** (function)
  - `export function extract<T>(text: string): Extract<T>`
  - Extracts and parses TOML from the metadata of front matter content.
- **`Extract`** (re-export)

## `$std/front-matter/types`

- **`Extract`** (type)
  - `export type Extract<T> = … }`
  - Return type for extract function.

## `$std/front-matter/yaml`

- **`extract`** (function)
  - `export function extract<T>(text: string): Extract<T>`
  - Extracts and parses YAML from the metadata of front matter content.
- **`Extract`** (re-export)
