# `$std/crypto` — @std/crypto@1.1.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/crypto
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Extensions to the Web Crypto supporting additional encryption APIs, but also delegating to the built-in APIs when possible.

导入：`import {...} from "$std/crypto";`　别名：`jsr:@g9wp/std@^0.1.5/crypto`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/crypto` | `@std/crypto` | `crypto/mod.ts` | 12 |
| `$std/crypto/aes-gcm` | `@std/crypto/aes-gcm` | `crypto/aes_gcm.ts` | 4 |
| `$std/crypto/crypto` | `@std/crypto/crypto` | `crypto/crypto.ts` | 7 |
| `$std/crypto/timing-safe-equal` | `@std/crypto/timing-safe-equal` | `crypto/timing_safe_equal.ts` | 1 |

## `$std/crypto`

12 个导出符号：

- **`AesGcmOptions`** (interface)
  - `export interface AesGcmOptions`
  - Options for encryptAesGcm and decryptAesGcm.
- **`crypto`** (re-export)
- **`decryptAesGcm`** (async function)
  - `export async function decryptAesGcm( key: CryptoKey, data: BufferSource, options?: AesGcmOptions, ): Promise<Uint8Array_>`
  - Decrypts data produced by encryptAesGcm.
- **`DIGEST_ALGORITHM_NAMES`** (re-export)
- **`DigestAlgorithm`** (type)
  - `export type DigestAlgorithm = DigestAlgorithmName \| DigestAlgorithmObject`
  - Extended digest algorithms accepted by stdCrypto.subtle.digest.
- **`DigestAlgorithmName`** (re-export)
- **`DigestAlgorithmObject`** (type)
  - `export type DigestAlgorithmObject = … }`
  - Extended digest algorithm objects.
- **`encryptAesGcm`** (async function)
  - `export async function encryptAesGcm( key: CryptoKey, plaintext: BufferSource, options?: AesGcmOptions, ): Promise<Uint8Array_>`
  - Encrypts plaintext using AES-GCM with a random 96-bit nonce.
- **`StdCrypto`** (interface)
  - `export interface StdCrypto extends Crypto`
  - Extensions to the Web Crypto interface.
- **`StdSubtleCrypto`** (interface)
  - `export interface StdSubtleCrypto extends SubtleCrypto`
  - Extensions to the web standard SubtleCrypto interface.
- **`timingSafeEqual`** (function)
  - `export function timingSafeEqual( a: ArrayBufferView \| ArrayBufferLike, b: ArrayBufferView \| ArrayBufferLike, ): boolean`
  - When checking the values of cryptographic hashes are equal, default comparisons can be susceptible to timing based attacks, where attacker is able to find out information about the host system by rep…
- **`Uint8Array_`** (re-export)

## `$std/crypto/aes-gcm`

- **`AesGcmOptions`** (interface)
  - `export interface AesGcmOptions`
  - Options for encryptAesGcm and decryptAesGcm.
- **`decryptAesGcm`** (async function)
  - `export async function decryptAesGcm( key: CryptoKey, data: BufferSource, options?: AesGcmOptions, ): Promise<Uint8Array_>`
  - Decrypts data produced by encryptAesGcm.
- **`encryptAesGcm`** (async function)
  - `export async function encryptAesGcm( key: CryptoKey, plaintext: BufferSource, options?: AesGcmOptions, ): Promise<Uint8Array_>`
  - Encrypts plaintext using AES-GCM with a random 96-bit nonce.
- **`Uint8Array_`** (re-export)

## `$std/crypto/crypto`

- **`crypto`** (re-export)
- **`DIGEST_ALGORITHM_NAMES`** (re-export)
- **`DigestAlgorithm`** (type)
  - `export type DigestAlgorithm = DigestAlgorithmName \| DigestAlgorithmObject`
  - Extended digest algorithms accepted by stdCrypto.subtle.digest.
- **`DigestAlgorithmName`** (re-export)
- **`DigestAlgorithmObject`** (type)
  - `export type DigestAlgorithmObject = … }`
  - Extended digest algorithm objects.
- **`StdCrypto`** (interface)
  - `export interface StdCrypto extends Crypto`
  - Extensions to the Web Crypto interface.
- **`StdSubtleCrypto`** (interface)
  - `export interface StdSubtleCrypto extends SubtleCrypto`
  - Extensions to the web standard SubtleCrypto interface.

## `$std/crypto/timing-safe-equal`

- **`timingSafeEqual`** (function)
  - `export function timingSafeEqual( a: ArrayBufferView \| ArrayBufferLike, b: ArrayBufferView \| ArrayBufferLike, ): boolean`
  - When checking the values of cryptographic hashes are equal, default comparisons can be susceptible to timing based attacks, where attacker is able to find out information about the host system by rep…
