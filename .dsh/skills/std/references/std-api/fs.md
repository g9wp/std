# `$std/fs` — @std/fs@1.0.24

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/fs
     需要精确签名时以 `deno doc` 或源码为准。 -->

导入：`import {...} from "$std/fs";`　别名：`jsr:@g9wp/std@^0.1.5/fs`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/fs` | `@std/fs` + `@std/fs/unstable-chmod` + `@std/fs/unstable-chown` + `@std/fs/unstable-copy-file` + `@std/fs/unstable-create` + `@std/fs/unstable-link` + `@std/fs/unstable-lstat` + `@std/fs/unstable-make-temp-dir` + `@std/fs/unstable-make-temp-file` + `@std/fs/unstable-mkdir` + `@std/fs/unstable-open` + `@std/fs/unstable-read-dir` + `@std/fs/unstable-read-file` + `@std/fs/unstable-read-link` + `@std/fs/unstable-read-text-file` + `@std/fs/unstable-real-path` + `@std/fs/unstable-remove` + `@std/fs/unstable-rename` + `@std/fs/unstable-stat` + `@std/fs/unstable-utime` + `@std/fs/unstable-symlink` + `@std/fs/unstable-truncate` + `@std/fs/unstable-types` + `@std/fs/unstable-umask` + `@std/fs/unstable-write-file` + `@std/fs/unstable-write-text-file` | `s/mod.ts`, `s/unstable_chmod.ts`, `s/unstable_chown.ts`, `s/unstable_copy_file.ts`, `s/unstable_create.ts`, `s/unstable_link.ts`, `s/unstable_lstat.ts`, `s/unstable_make_temp_dir.ts`, `s/unstable_make_temp_file.ts`, `s/unstable_mkdir.ts`, `s/unstable_open.ts`, `s/unstable_read_dir.ts`, `s/unstable_read_file.ts`, `s/unstable_read_link.ts`, `s/unstable_read_text_file.ts`, `s/unstable_real_path.ts`, `s/unstable_remove.ts`, `s/unstable_rename.ts`, `s/unstable_stat.ts`, `s/unstable_utime.ts`, `s/unstable_symlink.ts`, `s/unstable_truncate.ts`, `s/unstable_types.ts`, `s/unstable_umask.ts`, `s/unstable_write_file.ts`, `s/unstable_write_text_file.ts` | 0 |
| `$std/fs/chmod` | `@std/fs/unstable-chmod` | `s/unstable_chmod.ts` | 0 |
| `$std/fs/chown` | `@std/fs/unstable-chown` | `s/unstable_chown.ts` | 0 |
| `$std/fs/copy` | `@std/fs/copy` | `s/copy.ts` | 0 |
| `$std/fs/copy-file` | `@std/fs/unstable-copy-file` | `s/unstable_copy_file.ts` | 0 |
| `$std/fs/create` | `@std/fs/unstable-create` | `s/unstable_create.ts` | 0 |
| `$std/fs/empty-dir` | `@std/fs/empty-dir` | `s/empty_dir.ts` | 0 |
| `$std/fs/ensure-dir` | `@std/fs/ensure-dir` | `s/ensure_dir.ts` | 0 |
| `$std/fs/ensure-file` | `@std/fs/ensure-file` | `s/ensure_file.ts` | 0 |
| `$std/fs/ensure-link` | `@std/fs/ensure-link` | `s/ensure_link.ts` | 0 |
| `$std/fs/ensure-symlink` | `@std/fs/ensure-symlink` | `s/ensure_symlink.ts` | 0 |
| `$std/fs/eol` | `@std/fs/eol` | `s/eol.ts` | 0 |
| `$std/fs/exists` | `@std/fs/exists` | `s/exists.ts` | 0 |
| `$std/fs/expand-glob` | `@std/fs/expand-glob` | `s/expand_glob.ts` | 0 |
| `$std/fs/link` | `@std/fs/unstable-link` | `s/unstable_link.ts` | 0 |
| `$std/fs/lstat` | `@std/fs/unstable-lstat` | `s/unstable_lstat.ts` | 0 |
| `$std/fs/make-temp-dir` | `@std/fs/unstable-make-temp-dir` | `s/unstable_make_temp_dir.ts` | 0 |
| `$std/fs/make-temp-file` | `@std/fs/unstable-make-temp-file` | `s/unstable_make_temp_file.ts` | 0 |
| `$std/fs/mkdir` | `@std/fs/unstable-mkdir` | `s/unstable_mkdir.ts` | 0 |
| `$std/fs/move` | `@std/fs/move` | `s/move.ts` | 0 |
| `$std/fs/open` | `@std/fs/unstable-open` | `s/unstable_open.ts` | 0 |
| `$std/fs/read-dir` | `@std/fs/unstable-read-dir` | `s/unstable_read_dir.ts` | 0 |
| `$std/fs/read-file` | `@std/fs/unstable-read-file` | `s/unstable_read_file.ts` | 0 |
| `$std/fs/read-link` | `@std/fs/unstable-read-link` | `s/unstable_read_link.ts` | 0 |
| `$std/fs/read-text-file` | `@std/fs/unstable-read-text-file` | `s/unstable_read_text_file.ts` | 0 |
| `$std/fs/real-path` | `@std/fs/unstable-real-path` | `s/unstable_real_path.ts` | 0 |
| `$std/fs/remove` | `@std/fs/unstable-remove` | `s/unstable_remove.ts` | 0 |
| `$std/fs/rename` | `@std/fs/unstable-rename` | `s/unstable_rename.ts` | 0 |
| `$std/fs/stat` | `@std/fs/unstable-stat` | `s/unstable_stat.ts` | 0 |
| `$std/fs/symlink` | `@std/fs/unstable-symlink` | `s/unstable_symlink.ts` | 0 |
| `$std/fs/truncate` | `@std/fs/unstable-truncate` | `s/unstable_truncate.ts` | 0 |
| `$std/fs/types` | `@std/fs/unstable-types` | `s/unstable_types.ts` | 0 |
| `$std/fs/umask` | `@std/fs/unstable-umask` | `s/unstable_umask.ts` | 0 |
| `$std/fs/utime` | `@std/fs/unstable-utime` | `s/unstable_utime.ts` | 0 |
| `$std/fs/walk` | `@std/fs/walk` | `s/walk.ts` | 0 |
| `$std/fs/write-file` | `@std/fs/unstable-write-file` | `s/unstable_write_file.ts` | 0 |
| `$std/fs/write-text-file` | `@std/fs/unstable-write-text-file` | `s/unstable_write_text_file.ts` | 0 |

## `$std/fs`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/chmod`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-chmod`，在 $std 中以稳定名字 `fs/chmod` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/chown`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-chown`，在 $std 中以稳定名字 `fs/chown` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/copy`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/copy-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-copy-file`，在 $std 中以稳定名字 `fs/copy-file` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/create`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-create`，在 $std 中以稳定名字 `fs/create` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/empty-dir`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/ensure-dir`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/ensure-file`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/ensure-link`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/ensure-symlink`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/eol`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/exists`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/expand-glob`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/link`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-link`，在 $std 中以稳定名字 `fs/link` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/lstat`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-lstat`，在 $std 中以稳定名字 `fs/lstat` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/make-temp-dir`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-make-temp-dir`，在 $std 中以稳定名字 `fs/make-temp-dir` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/make-temp-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-make-temp-file`，在 $std 中以稳定名字 `fs/make-temp-file` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/mkdir`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-mkdir`，在 $std 中以稳定名字 `fs/mkdir` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/move`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/open`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-open`，在 $std 中以稳定名字 `fs/open` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/read-dir`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-dir`，在 $std 中以稳定名字 `fs/read-dir` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/read-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-file`，在 $std 中以稳定名字 `fs/read-file` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/read-link`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-link`，在 $std 中以稳定名字 `fs/read-link` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/read-text-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-text-file`，在 $std 中以稳定名字 `fs/read-text-file` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/real-path`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-real-path`，在 $std 中以稳定名字 `fs/real-path` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/remove`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-remove`，在 $std 中以稳定名字 `fs/remove` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/rename`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-rename`，在 $std 中以稳定名字 `fs/rename` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/stat`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-stat`，在 $std 中以稳定名字 `fs/stat` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/symlink`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-symlink`，在 $std 中以稳定名字 `fs/symlink` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/truncate`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-truncate`，在 $std 中以稳定名字 `fs/truncate` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/types`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-types`，在 $std 中以稳定名字 `fs/types` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/umask`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-umask`，在 $std 中以稳定名字 `fs/umask` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/utime`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-utime`，在 $std 中以稳定名字 `fs/utime` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/walk`

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/write-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-write-file`，在 $std 中以稳定名字 `fs/write-file` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_

## `$std/fs/write-text-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-write-text-file`，在 $std 中以稳定名字 `fs/write-text-file` 提供。

_（未解析到导出符号：可能仅包含类型/副作用，请以上游源码或 `deno doc` 为准。）_
