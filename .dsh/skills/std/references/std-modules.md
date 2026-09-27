# $std (@g9wp/std) 模块总览

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     需要精确签名时以 `deno doc` 或源码为准。 -->

共 42 个模块、487 个导出子路径。

| 模块 | 上游包 | 子路径 | 说明 | 详情 |
| --- | --- | --- | --- | --- |
| `$std/assert` | [@std/assert@1.0.19](https://jsr.io/@std/assert) | 28 | A library of assertion functions. If the assertion is false an AssertionError will be thrown which will result in pretty-printed diff of the failing assertion. | [std-api/assert.md](./std-api/assert.md) |
| `$std/async` | [@std/async@1.5.1](https://jsr.io/@std/async) | 17 | Provide helpers with asynchronous tasks, like delay, debounce, retry, or pooledMap. | [std-api/async.md](./std-api/async.md) |
| `$std/bytes` | [@std/bytes@1.0.6](https://jsr.io/@std/bytes) | 9 | Helper functions for working with Uint8Array byte slices. | [std-api/bytes.md](./std-api/bytes.md) |
| `$std/cache` | [@std/cache@0.2.4](https://jsr.io/@std/cache) | 3 | In-memory cache utilities, such as memoization and caches with different expiration policies. | [std-api/cache.md](./std-api/cache.md) |
| `$std/cbor` | [@std/cbor@0.1.10](https://jsr.io/@std/cbor) | 12 | Concise Binary Object Representation (CBOR) is a binary data serialization format optimized for compactness and efficiency. It is designed to encode a wide range of data types, including integers, st… | [std-api/cbor.md](./std-api/cbor.md) |
| `$std/cli` | [@std/cli@1.0.32](https://jsr.io/@std/cli) | 11 | Tools for creating interactive command line tools. | [std-api/cli.md](./std-api/cli.md) |
| `$std/collections` | [@std/collections@1.4.0](https://jsr.io/@std/collections) | 49 | Pure functions for common tasks around collection types like arrays and objects. | [std-api/collections.md](./std-api/collections.md) |
| `$std/crypto` | [@std/crypto@1.1.0](https://jsr.io/@std/crypto) | 3 | Extensions to the Web Crypto supporting additional encryption APIs, but also delegating to the built-in APIs when possible. | [std-api/crypto.md](./std-api/crypto.md) |
| `$std/csv` | [@std/csv@1.0.6](https://jsr.io/@std/csv) | 4 | — | [std-api/csv.md](./std-api/csv.md) |
| `$std/data-structures` | [@std/data-structures@1.1.3](https://jsr.io/@std/data-structures) | 10 | Data structures for use in algorithms and other data manipulation. | [std-api/data-structures.md](./std-api/data-structures.md) |
| `$std/datetime` | [@std/datetime@0.225.7](https://jsr.io/@std/datetime) | 7 | Utilities for dealing with Date objects. | [std-api/datetime.md](./std-api/datetime.md) |
| `$std/dotenv` | [@std/dotenv@0.225.8](https://jsr.io/@std/dotenv) | 3 | Parses and stringifies data in the .env file format. | [std-api/dotenv.md](./std-api/dotenv.md) |
| `$std/encoding` | [@std/encoding@1.0.11](https://jsr.io/@std/encoding) | 10 | Utilities for encoding and decoding common formats like hex, base64, and varint. | [std-api/encoding.md](./std-api/encoding.md) |
| `$std/expect` | [@std/expect@1.0.20](https://jsr.io/@std/expect) | 2 | This module provides Jest compatible expect assertion functionality. | [std-api/expect.md](./std-api/expect.md) |
| `$std/fmt` | [@std/fmt@1.0.10](https://jsr.io/@std/fmt) | 4 | — | [std-api/fmt.md](./std-api/fmt.md) |
| `$std/front-matter` | [@std/front-matter@1.0.9](https://jsr.io/@std/front-matter) | 6 | Extracts front matter from strings. Adapted from jxson/front-matter. | [std-api/front-matter.md](./std-api/front-matter.md) |
| `$std/fs` | [@std/fs@1.0.24](https://jsr.io/@std/fs) | 36 | Helpers for working with the filesystem. | [std-api/fs.md](./std-api/fs.md) |
| `$std/html` | [@std/html@1.0.7](https://jsr.io/@std/html) | 5 | Functions for HTML tasks such as escaping or unescaping HTML entities. | [std-api/html.md](./std-api/html.md) |
| `$std/http` | [@std/http@1.1.4](https://jsr.io/@std/http) | 19 | Provides user-friendly serve on top of Deno's native HTTP server and other utilities for creating HTTP servers and clients. | [std-api/http.md](./std-api/http.md) |
| `$std/ini` | [@std/ini@1.0.0-rc.9](https://jsr.io/@std/ini) | 2 | parse and stringify for handling INI encoded data, such as the Desktop Entry specification. | [std-api/ini.md](./std-api/ini.md) |
| `$std/internal` | [@std/internal@1.0.14](https://jsr.io/@std/internal) | 9 | Internal utilities for the public API of the Deno Standard Library. | [std-api/internal.md](./std-api/internal.md) |
| `$std/io` | [@std/io@0.225.3](https://jsr.io/@std/io) | 9 | Utilities for working with Deno's readers, writers, and web streams. | [std-api/io.md](./std-api/io.md) |
| `$std/json` | [@std/json@1.1.0](https://jsr.io/@std/json) | 5 | Utilities for parsing streaming JSON data. | [std-api/json.md](./std-api/json.md) |
| `$std/jsonc` | [@std/jsonc@1.0.3](https://jsr.io/@std/jsonc) | 1 | Provides tools for working with JSONC (JSON with comments). | [std-api/jsonc.md](./std-api/jsonc.md) |
| `$std/math` | [@std/math@0.0.0](https://jsr.io/@std/math) | 3 | Math functions such as modulo and clamp. | [std-api/math.md](./std-api/math.md) |
| `$std/media-types` | [@std/media-types@1.1.0](https://jsr.io/@std/media-types) | 7 | Utility functions for media types (MIME types). | [std-api/media-types.md](./std-api/media-types.md) |
| `$std/msgpack` | [@std/msgpack@1.0.3](https://jsr.io/@std/msgpack) | 2 | This module provides functions to encode and decode MessagePack. | [std-api/msgpack.md](./std-api/msgpack.md) |
| `$std/net` | [@std/net@1.0.7](https://jsr.io/@std/net) | 3 | Network utilities. | [std-api/net.md](./std-api/net.md) |
| `$std/path` | [@std/path@1.1.6](https://jsr.io/@std/path) | 60 | — | [std-api/path.md](./std-api/path.md) |
| `$std/random` | [@std/random@0.1.5](https://jsr.io/@std/random) | 7 | Utilities for generating random numbers. | [std-api/random.md](./std-api/random.md) |
| `$std/regexp` | [@std/regexp@1.0.2](https://jsr.io/@std/regexp) | 2 | Functions for tasks related to regular expression (regexp), such as escaping text for interpolation into a regexp. | [std-api/regexp.md](./std-api/regexp.md) |
| `$std/semver` | [@std/semver@1.0.8](https://jsr.io/@std/semver) | 25 | — | [std-api/semver.md](./std-api/semver.md) |
| `$std/streams` | [@std/streams@1.2.0](https://jsr.io/@std/streams) | 23 | Utilities for working with the Streams API. | [std-api/streams.md](./std-api/streams.md) |
| `$std/tar` | [@std/tar@0.1.10](https://jsr.io/@std/tar) | 2 | Streaming utilities for working with tar archives. | [std-api/tar.md](./std-api/tar.md) |
| `$std/testing` | [@std/testing@1.0.21](https://jsr.io/@std/testing) | 7 | — | [std-api/testing.md](./std-api/testing.md) |
| `$std/text` | [@std/text@1.1.0](https://jsr.io/@std/text) | 17 | Utility functions for working with text. | [std-api/text.md](./std-api/text.md) |
| `$std/toml` | [@std/toml@1.0.11](https://jsr.io/@std/toml) | 2 | parse and stringify for handling TOML encoded data. | [std-api/toml.md](./std-api/toml.md) |
| `$std/ulid` | [@std/ulid@1.0.0](https://jsr.io/@std/ulid) | 3 | Utilities for generating and working with Universally Unique Lexicographically Sortable Identifiers (ULIDs). | [std-api/ulid.md](./std-api/ulid.md) |
| `$std/uuid` | [@std/uuid@1.1.2](https://jsr.io/@std/uuid) | 8 | Generators and validators for RFC 9562 UUIDs for versions v1, v3, v4, v5, v6 and v7. | [std-api/uuid.md](./std-api/uuid.md) |
| `$std/webgpu` | [@std/webgpu@0.224.9](https://jsr.io/@std/webgpu) | 4 | Utilities for interacting with the WebGPU API. | [std-api/webgpu.md](./std-api/webgpu.md) |
| `$std/xml` | [@std/xml@0.2.0](https://jsr.io/@std/xml) | 5 | XML parsing and serialization for Deno. | [std-api/xml.md](./std-api/xml.md) |
| `$std/yaml` | [@std/yaml@1.3.0](https://jsr.io/@std/yaml) | 3 | parse and stringify for handling YAML encoded data. | [std-api/yaml.md](./std-api/yaml.md) |

## 命名规则

- `$std/<模块>` 等价于上游 `@std/<模块>` 的根模块（mod.ts）。
- `$std/<模块>/<名字>` 是上游同名子路径；**上游的 `unstable-xxx` 会被改名为 `xxx`**（若同名 stable 子路径已存在，则 unstable 版本被丢弃）。
- 上游尚未稳定的能力因此可以直接用稳定名字导入，例如 `$std/async/throttle` = 上游 `@std/async/unstable-throttle`。
- 上游 `@std/x/mod.ts` 已导出的子模块不会重复导出；`patch.json` 中显式屏蔽的导出（如 `@std/uuid/unstable-v6`）不包含在内。
