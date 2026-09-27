# `$std/webgpu` — @std/webgpu@0.224.9

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/webgpu
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Utilities for interacting with the WebGPU API.

导入：`import {...} from "$std/webgpu";`　别名：`jsr:@g9wp/std@^0.1.5/webgpu`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/webgpu` | `@std/webgpu` | `webgpu/mod.ts` | 10 |
| `$std/webgpu/create-capture` | `@std/webgpu/create-capture` | `webgpu/create_capture.ts` | 2 |
| `$std/webgpu/describe-texture-format` | `@std/webgpu/describe-texture-format` | `webgpu/describe_texture_format.ts` | 2 |
| `$std/webgpu/row-padding` | `@std/webgpu/row-padding` | `webgpu/row_padding.ts` | 5 |
| `$std/webgpu/texture-with-data` | `@std/webgpu/texture-with-data` | `webgpu/texture_with_data.ts` | 1 |

## `$std/webgpu`

10 个导出符号：

- **`BYTES_PER_PIXEL`** (const)
  - `export const BYTES_PER_PIXEL`
  - Number of bytes per pixel.
- **`COPY_BYTES_PER_ROW_ALIGNMENT`** (const)
  - `export const COPY_BYTES_PER_ROW_ALIGNMENT`
  - Buffer-Texture copies must have [bytes_per_row] aligned to this number.
- **`createCapture`** (function)
  - `export function createCapture( device: GPUDevice, width: number, height: number, ): CreateCapture`
  - Creates a texture and buffer to use as a capture.
- **`CreateCapture`** (interface)
  - `export interface CreateCapture`
  - Return value for createCapture.
- **`createTextureWithData`** (function)
  - `export function createTextureWithData( device: GPUDevice, descriptor: GPUTextureDescriptor, data: Uint8Array_, ): GPUTexture`
  - Create a GPUTexture with data.
- **`describeTextureFormat`** (function)
  - `export function describeTextureFormat( format: GPUTextureFormat, ): TextureFormatInfo`
  - Get various information about a specific GPUTextureFormat.
- **`getRowPadding`** (function)
  - `export function getRowPadding(width: number): Padding`
  - Calculates the number of bytes including necessary padding when passing a GPUImageCopyBuffer.
- **`Padding`** (interface)
  - `export interface Padding`
  - Return value for getRowPadding.
- **`resliceBufferWithPadding`** (function)
  - `export function resliceBufferWithPadding( buffer: Uint8Array, width: number, height: number, ): Uint8Array`
  - Creates a new buffer while removing any unnecessary empty bytes. Useful for when wanting to save an image as a specific format.
- **`TextureFormatInfo`** (interface)
  - `export interface TextureFormatInfo`
  - Return type for describeTextureFormat.

## `$std/webgpu/create-capture`

- **`createCapture`** (function)
  - `export function createCapture( device: GPUDevice, width: number, height: number, ): CreateCapture`
  - Creates a texture and buffer to use as a capture.
- **`CreateCapture`** (interface)
  - `export interface CreateCapture`
  - Return value for createCapture.

## `$std/webgpu/describe-texture-format`

- **`describeTextureFormat`** (function)
  - `export function describeTextureFormat( format: GPUTextureFormat, ): TextureFormatInfo`
  - Get various information about a specific GPUTextureFormat.
- **`TextureFormatInfo`** (interface)
  - `export interface TextureFormatInfo`
  - Return type for describeTextureFormat.

## `$std/webgpu/row-padding`

- **`BYTES_PER_PIXEL`** (const)
  - `export const BYTES_PER_PIXEL`
  - Number of bytes per pixel.
- **`COPY_BYTES_PER_ROW_ALIGNMENT`** (const)
  - `export const COPY_BYTES_PER_ROW_ALIGNMENT`
  - Buffer-Texture copies must have [bytes_per_row] aligned to this number.
- **`getRowPadding`** (function)
  - `export function getRowPadding(width: number): Padding`
  - Calculates the number of bytes including necessary padding when passing a GPUImageCopyBuffer.
- **`Padding`** (interface)
  - `export interface Padding`
  - Return value for getRowPadding.
- **`resliceBufferWithPadding`** (function)
  - `export function resliceBufferWithPadding( buffer: Uint8Array, width: number, height: number, ): Uint8Array`
  - Creates a new buffer while removing any unnecessary empty bytes. Useful for when wanting to save an image as a specific format.

## `$std/webgpu/texture-with-data`

- **`createTextureWithData`** (function)
  - `export function createTextureWithData( device: GPUDevice, descriptor: GPUTextureDescriptor, data: Uint8Array_, ): GPUTexture`
  - Create a GPUTexture with data.
