# `$std/net` — @std/net@1.0.7

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/net
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Network utilities.

导入：`import {...} from "$std/net";`　别名：`jsr:@g9wp/std@^0.1.5/net`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/net` | `@std/net` + `@std/net/unstable-ip` | `net/mod.ts`, `net/unstable_ip.ts` | 9 |
| `$std/net/get-available-port` | `@std/net/get-available-port` | `net/get_available_port.ts` | 2 |
| `$std/net/get-network-address` | `@std/net/get-network-address` | `net/unstable_get_network_address.ts` | 1 |
| `$std/net/ip` | `@std/net/unstable-ip` | `net/unstable_ip.ts` | 7 |

## `$std/net`

9 个导出符号：

- **`getAvailablePort`** (function)
  - `export function getAvailablePort(options?: GetAvailablePortOptions): number`
  - Returns an available network port.
- **`GetAvailablePortOptions`** (interface)
  - `export interface GetAvailablePortOptions`
  - Options for getAvailablePort.
- **`isIPv4`** (function)
  - `export function isIPv4(addr: string): boolean`
  - Validates whether a given string is a valid IPv4 address.
- **`isIPv6`** (function)
  - `export function isIPv6(addr: string): boolean`
  - Validates whether a given string is a IPv6 address.
- **`matchIPv4Subnet`** (function)
  - `export function matchIPv4Subnet(addr: string, subnet: string): boolean`
  - Checks if an IPv4 address matches a subnet or specific IPv4 address.
- **`matchIPv6Subnet`** (function)
  - `export function matchIPv6Subnet(addr: string, subnet: string): boolean`
  - Checks if an IPv6 address matches a subnet or specific IPv6 address.
- **`matchSubnets`** (function)
  - `export function matchSubnets(addr: string, subnetOrIps: string[]): boolean`
  - Checks if an IP address matches a subnet or specific IP address.
- **`parseIPv4`** (function)
  - `export function parseIPv4(addr: string): Uint8Array \| undefined`
  - Parses a string as an IPv4 address.
- **`parseIPv6`** (function)
  - `export function parseIPv6(addr: string): Uint8Array \| undefined`
  - Parses a string as an IPv6 address.

## `$std/net/get-available-port`

- **`getAvailablePort`** (function)
  - `export function getAvailablePort(options?: GetAvailablePortOptions): number`
  - Returns an available network port.
- **`GetAvailablePortOptions`** (interface)
  - `export interface GetAvailablePortOptions`
  - Options for getAvailablePort.

## `$std/net/get-network-address`

- **`getNetworkAddress`** (function)
  - `export function getNetworkAddress( family: Deno.NetworkInterfaceInfo["family"] = "IPv4", ): string \| undefined`
  - Gets the IPv4 or IPv6 network address of the machine.

## `$std/net/ip`

> ⚠️ 上游为不稳定模块 `@std/net/unstable-ip`，在 $std 中以稳定名字 `net/ip` 提供。

- **`isIPv4`** (function)
  - `export function isIPv4(addr: string): boolean`
  - Validates whether a given string is a valid IPv4 address.
- **`isIPv6`** (function)
  - `export function isIPv6(addr: string): boolean`
  - Validates whether a given string is a IPv6 address.
- **`matchIPv4Subnet`** (function)
  - `export function matchIPv4Subnet(addr: string, subnet: string): boolean`
  - Checks if an IPv4 address matches a subnet or specific IPv4 address.
- **`matchIPv6Subnet`** (function)
  - `export function matchIPv6Subnet(addr: string, subnet: string): boolean`
  - Checks if an IPv6 address matches a subnet or specific IPv6 address.
- **`matchSubnets`** (function)
  - `export function matchSubnets(addr: string, subnetOrIps: string[]): boolean`
  - Checks if an IP address matches a subnet or specific IP address.
- **`parseIPv4`** (function)
  - `export function parseIPv4(addr: string): Uint8Array \| undefined`
  - Parses a string as an IPv4 address.
- **`parseIPv6`** (function)
  - `export function parseIPv6(addr: string): Uint8Array \| undefined`
  - Parses a string as an IPv6 address.
