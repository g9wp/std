# `$std/uuid` — @std/uuid@1.1.2

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/uuid
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Generators and validators for RFC 9562 UUIDs for versions v1, v3, v4, v5, v6 and v7.

导入：`import {...} from "$std/uuid";`　别名：`jsr:@g9wp/std@^0.1.5/uuid`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/uuid` | `@std/uuid` | `uuid/mod.ts` | 13 |
| `$std/uuid/common` | `@std/uuid/common` | `uuid/common.ts` | 3 |
| `$std/uuid/constants` | `@std/uuid/constants` | `uuid/constants.ts` | 5 |
| `$std/uuid/v1` | `@std/uuid/v1` | `uuid/v1.ts` | 3 |
| `$std/uuid/v3` | `@std/uuid/v3` | `uuid/v3.ts` | 2 |
| `$std/uuid/v4` | `@std/uuid/v4` | `uuid/v4.ts` | 1 |
| `$std/uuid/v5` | `@std/uuid/v5` | `uuid/v5.ts` | 2 |
| `$std/uuid/v6` | `@std/uuid/unstable-v6` | `uuid/unstable_v6.ts` | 3 |
| `$std/uuid/v7` | `@std/uuid/v7` | `uuid/v7.ts` | 3 |

## `$std/uuid`

13 个导出符号：

- **`isNil`** (function)
  - `export function isNil(id: string): boolean`
  - Determines whether the UUID is the nil UUID.
- **`NAMESPACE_DNS`** (const)
  - `export const NAMESPACE_DNS`
  - Name string is a fully-qualified domain name.
- **`NAMESPACE_OID`** (const)
  - `export const NAMESPACE_OID`
  - Name string is an ISO OID.
- **`NAMESPACE_URL`** (const)
  - `export const NAMESPACE_URL`
  - Name string is a URL.
- **`NAMESPACE_X500`** (const)
  - `export const NAMESPACE_X500`
  - Name string is an X.500 DN (in DER or a text output format).
- **`NIL_UUID`** (const)
  - `export const NIL_UUID`
  - The nil UUID is special form of UUID that is specified to have all 128 bits set to zero.
- **`v1`** (const)
  - `export const v1`
  - Generator and validator for UUIDv1.
- **`v3`** (const)
  - `export const v3`
  - Generator and validator for UUIDv3.
- **`v4`** (const)
  - `export const v4`
  - Validator for UUIDv4.
- **`v5`** (const)
  - `export const v5`
  - Generator and validator for UUIDv5.
- **`v7`** (const)
  - `export const v7`
  - Generator and validator for UUIDv7
- **`validate`** (function)
  - `export function validate(uuid: string): boolean`
  - Determines whether a string is a valid UUID.
- **`version`** (function)
  - `export function version(uuid: string): number`
  - Detect RFC version of a UUID.

## `$std/uuid/common`

- **`isNil`** (function)
  - `export function isNil(id: string): boolean`
  - Determines whether the UUID is the nil UUID.
- **`validate`** (function)
  - `export function validate(uuid: string): boolean`
  - Determines whether a string is a valid UUID.
- **`version`** (function)
  - `export function version(uuid: string): number`
  - Detect RFC version of a UUID.

## `$std/uuid/constants`

- **`NAMESPACE_DNS`** (const)
  - `export const NAMESPACE_DNS`
  - Name string is a fully-qualified domain name.
- **`NAMESPACE_OID`** (const)
  - `export const NAMESPACE_OID`
  - Name string is an ISO OID.
- **`NAMESPACE_URL`** (const)
  - `export const NAMESPACE_URL`
  - Name string is a URL.
- **`NAMESPACE_X500`** (const)
  - `export const NAMESPACE_X500`
  - Name string is an X.500 DN (in DER or a text output format).
- **`NIL_UUID`** (const)
  - `export const NIL_UUID`
  - The nil UUID is special form of UUID that is specified to have all 128 bits set to zero.

## `$std/uuid/v1`

- **`generate`** (function)
  - `export function generate(options: GenerateOptions = {}): string`
  - Generates a UUIDv1.
- **`GenerateOptions`** (interface)
  - `export interface GenerateOptions`
  - Options for generate.
- **`validate`** (function)
  - `export function validate(id: string): boolean`
  - Determines whether a string is a valid UUIDv1.

## `$std/uuid/v3`

- **`generate`** (async function)
  - `export async function generate( namespace: string, data: Uint8Array, ): Promise<string>`
  - Generates a UUIDv3.
- **`validate`** (function)
  - `export function validate(id: string): boolean`
  - Determines whether a string is a valid UUIDv3.

## `$std/uuid/v4`

- **`validate`** (function)
  - `export function validate( id: string, ): id is ReturnType<typeof crypto.randomUUID>`
  - Determines whether a string is a valid UUIDv4.

## `$std/uuid/v5`

- **`generate`** (async function)
  - `export async function generate( namespace: string, data: Uint8Array, ): Promise<string>`
  - Generates a UUIDv5.
- **`validate`** (function)
  - `export function validate(id: string): boolean`
  - Determines whether a string is a valid UUIDv5.

## `$std/uuid/v6`

> ⚠️ 上游为不稳定模块 `@std/uuid/unstable-v6`，在 $std 中以稳定名字 `uuid/v6` 提供。

- **`generate`** (function)
  - `export function generate(options: GenerateOptions = {}): string`
  - Generates a UUIDv6.
- **`GenerateOptions`** (interface)
  - `export interface GenerateOptions`
  - Options for generate.
- **`validate`** (function)
  - `export function validate(id: string): boolean`
  - Determines whether a string is a valid UUIDv6.

## `$std/uuid/v7`

- **`extractTimestamp`** (function)
  - `export function extractTimestamp(uuid: string): number`
  - Extracts the timestamp from a UUIDv7.
- **`generate`** (function)
  - `export function generate(timestamp: number = Date.now()): string`
  - Generates a UUIDv7.
- **`validate`** (function)
  - `export function validate(id: string): boolean`
  - Determines whether a string is a valid UUIDv7.
