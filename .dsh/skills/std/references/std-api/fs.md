# `$std/fs` — @std/fs@1.0.24

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/fs
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Helpers for working with the filesystem.

导入：`import {...} from "$std/fs";`　别名：`jsr:@g9wp/std@^0.1.5/fs`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/fs` | `@std/fs` + `@std/fs/unstable-chmod` + `@std/fs/unstable-chown` + `@std/fs/unstable-copy-file` + `@std/fs/unstable-create` + `@std/fs/unstable-link` + `@std/fs/unstable-lstat` + `@std/fs/unstable-make-temp-dir` + `@std/fs/unstable-make-temp-file` + `@std/fs/unstable-mkdir` + `@std/fs/unstable-open` + `@std/fs/unstable-read-dir` + `@std/fs/unstable-read-file` + `@std/fs/unstable-read-link` + `@std/fs/unstable-read-text-file` + `@std/fs/unstable-real-path` + `@std/fs/unstable-remove` + `@std/fs/unstable-rename` + `@std/fs/unstable-stat` + `@std/fs/unstable-utime` + `@std/fs/unstable-symlink` + `@std/fs/unstable-truncate` + `@std/fs/unstable-types` + `@std/fs/unstable-umask` + `@std/fs/unstable-write-file` + `@std/fs/unstable-write-text-file` | `fs/mod.ts`, `fs/unstable_chmod.ts`, `fs/unstable_chown.ts`, `fs/unstable_copy_file.ts`, `fs/unstable_create.ts`, `fs/unstable_link.ts`, `fs/unstable_lstat.ts`, `fs/unstable_make_temp_dir.ts`, `fs/unstable_make_temp_file.ts`, `fs/unstable_mkdir.ts`, `fs/unstable_open.ts`, `fs/unstable_read_dir.ts`, `fs/unstable_read_file.ts`, `fs/unstable_read_link.ts`, `fs/unstable_read_text_file.ts`, `fs/unstable_real_path.ts`, `fs/unstable_remove.ts`, `fs/unstable_rename.ts`, `fs/unstable_stat.ts`, `fs/unstable_utime.ts`, `fs/unstable_symlink.ts`, `fs/unstable_truncate.ts`, `fs/unstable_types.ts`, `fs/unstable_umask.ts`, `fs/unstable_write_file.ts`, `fs/unstable_write_text_file.ts` | 90 |
| `$std/fs/chmod` | `@std/fs/unstable-chmod` | `fs/unstable_chmod.ts` | 2 |
| `$std/fs/chown` | `@std/fs/unstable-chown` | `fs/unstable_chown.ts` | 2 |
| `$std/fs/copy` | `@std/fs/copy` | `fs/copy.ts` | 3 |
| `$std/fs/copy-file` | `@std/fs/unstable-copy-file` | `fs/unstable_copy_file.ts` | 2 |
| `$std/fs/create` | `@std/fs/unstable-create` | `fs/unstable_create.ts` | 2 |
| `$std/fs/empty-dir` | `@std/fs/empty-dir` | `fs/empty_dir.ts` | 2 |
| `$std/fs/ensure-dir` | `@std/fs/ensure-dir` | `fs/ensure_dir.ts` | 2 |
| `$std/fs/ensure-file` | `@std/fs/ensure-file` | `fs/ensure_file.ts` | 2 |
| `$std/fs/ensure-link` | `@std/fs/ensure-link` | `fs/ensure_link.ts` | 2 |
| `$std/fs/ensure-symlink` | `@std/fs/ensure-symlink` | `fs/ensure_symlink.ts` | 2 |
| `$std/fs/eol` | `@std/fs/eol` | `fs/eol.ts` | 5 |
| `$std/fs/exists` | `@std/fs/exists` | `fs/exists.ts` | 3 |
| `$std/fs/expand-glob` | `@std/fs/expand-glob` | `fs/expand_glob.ts` | 5 |
| `$std/fs/link` | `@std/fs/unstable-link` | `fs/unstable_link.ts` | 2 |
| `$std/fs/lstat` | `@std/fs/unstable-lstat` | `fs/unstable_lstat.ts` | 2 |
| `$std/fs/make-temp-dir` | `@std/fs/unstable-make-temp-dir` | `fs/unstable_make_temp_dir.ts` | 2 |
| `$std/fs/make-temp-file` | `@std/fs/unstable-make-temp-file` | `fs/unstable_make_temp_file.ts` | 2 |
| `$std/fs/mkdir` | `@std/fs/unstable-mkdir` | `fs/unstable_mkdir.ts` | 3 |
| `$std/fs/move` | `@std/fs/move` | `fs/move.ts` | 3 |
| `$std/fs/open` | `@std/fs/unstable-open` | `fs/unstable_open.ts` | 3 |
| `$std/fs/read-dir` | `@std/fs/unstable-read-dir` | `fs/unstable_read_dir.ts` | 2 |
| `$std/fs/read-file` | `@std/fs/unstable-read-file` | `fs/unstable_read_file.ts` | 2 |
| `$std/fs/read-link` | `@std/fs/unstable-read-link` | `fs/unstable_read_link.ts` | 2 |
| `$std/fs/read-text-file` | `@std/fs/unstable-read-text-file` | `fs/unstable_read_text_file.ts` | 2 |
| `$std/fs/real-path` | `@std/fs/unstable-real-path` | `fs/unstable_real_path.ts` | 2 |
| `$std/fs/remove` | `@std/fs/unstable-remove` | `fs/unstable_remove.ts` | 2 |
| `$std/fs/rename` | `@std/fs/unstable-rename` | `fs/unstable_rename.ts` | 2 |
| `$std/fs/stat` | `@std/fs/unstable-stat` | `fs/unstable_stat.ts` | 2 |
| `$std/fs/symlink` | `@std/fs/unstable-symlink` | `fs/unstable_symlink.ts` | 2 |
| `$std/fs/truncate` | `@std/fs/unstable-truncate` | `fs/unstable_truncate.ts` | 2 |
| `$std/fs/types` | `@std/fs/unstable-types` | `fs/unstable_types.ts` | 9 |
| `$std/fs/umask` | `@std/fs/unstable-umask` | `fs/unstable_umask.ts` | 1 |
| `$std/fs/utime` | `@std/fs/unstable-utime` | `fs/unstable_utime.ts` | 2 |
| `$std/fs/walk` | `@std/fs/walk` | `fs/walk.ts` | 4 |
| `$std/fs/write-file` | `@std/fs/unstable-write-file` | `fs/unstable_write_file.ts` | 2 |
| `$std/fs/write-text-file` | `@std/fs/unstable-write-text-file` | `fs/unstable_write_text_file.ts` | 2 |

## `$std/fs`

90 个导出符号：

- **`chmod`** (async function)
  - `export async function chmod(path: string \| URL, mode: number)`
  - Changes the permission of a specific file/directory of specified path. Ignores the process's umask.
- **`chmodSync`** (function)
  - `export function chmodSync(path: string \| URL, mode: number)`
  - Synchronously changes the permission of a specific file/directory of specified path. Ignores the process's umask.
- **`chown`** (async function)
  - `export async function chown( path: string \| URL, uid: number \| null, gid: number \| null, ): Promise<void>`
  - Change owner of a regular file or directory.
- **`chownSync`** (function)
  - `export function chownSync( path: string \| URL, uid: number \| null, gid: number \| null, ): void`
  - Synchronously change owner of a regular file or directory.
- **`copy`** (async function)
  - `export async function copy( src: string \| URL, dest: string \| URL, options: CopyOptions = {}, )`
  - Asynchronously copy a file or directory (along with its contents), like cp -r.
- **`copyFile`** (async function)
  - `export async function copyFile( from: string \| URL, to: string \| URL, ): Promise<void>`
  - Copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritable.
- **`copyFileSync`** (function)
  - `export function copyFileSync( from: string \| URL, to: string \| URL, )`
  - Synchronously copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritab…
- **`CopyOptions`** (interface)
  - `export interface CopyOptions`
  - Options for copy and copySync.
- **`copySync`** (function)
  - `export function copySync( src: string \| URL, dest: string \| URL, options: CopyOptions = {}, )`
  - Synchronously copy a file or directory (along with its contents), like cp -r.
- **`create`** (async function)
  - `export async function create(path: string \| URL): Promise<FsFile>`
  - Creates a file if none exists or truncates an existing file and resolves to an instance of FsFile.
- **`createSync`** (function)
  - `export function createSync(path: string \| URL): FsFile`
  - Creates a file if none exists or truncates an existing file and returns an instance of FsFile.
- **`CRLF`** (const)
  - `export const CRLF`
  - End-of-line character for Windows platforms.
- **`detect`** (function)
  - `export function detect(content: string): typeof EOL \| null`
  - Returns the detected EOL character(s) detected in the input string. If no EOL character is detected, null is returned.
- **`DirEntry`** (interface)
  - `export interface DirEntry`
  - Information about a directory entry returned from readDir and readDirSync.
- **`emptyDir`** (async function)
  - `export async function emptyDir(dir: string \| URL)`
  - Asynchronously ensures that a directory is empty.
- **`emptyDirSync`** (function)
  - `export function emptyDirSync(dir: string \| URL)`
  - Synchronously ensures that a directory is empty deletes the directory contents it is not empty.
- **`ensureDir`** (async function)
  - `export async function ensureDir(dir: string \| URL)`
  - Asynchronously ensures that the directory exists, like mkdir -p.
- **`ensureDirSync`** (function)
  - `export function ensureDirSync(dir: string \| URL)`
  - Synchronously ensures that the directory exists, like mkdir -p.
- **`ensureFile`** (async function)
  - `export async function ensureFile(filePath: string \| URL): Promise<void>`
  - Asynchronously ensures that the file exists.
- **`ensureFileSync`** (function)
  - `export function ensureFileSync(filePath: string \| URL): void`
  - Synchronously ensures that the file exists.
- **`ensureLink`** (async function)
  - `export async function ensureLink(src: string \| URL, dest: string \| URL)`
  - Asynchronously ensures that the hard link exists.
- **`ensureLinkSync`** (function)
  - `export function ensureLinkSync(src: string \| URL, dest: string \| URL)`
  - Synchronously ensures that the hard link exists.
- **`ensureSymlink`** (async function)
  - `export async function ensureSymlink( target: string \| URL, linkName: string \| URL, )`
  - Asynchronously ensures that the link exists, and points to a valid file.
- **`ensureSymlinkSync`** (function)
  - `export function ensureSymlinkSync( target: string \| URL, linkName: string \| URL, )`
  - Synchronously ensures that the link exists, and points to a valid file.
- **`EOL`** (const)
  - `export const EOL: "\n" \| "\r\n"`
  - End-of-line character evaluated for the current platform.
- **`exists`** (async function)
  - `export async function exists( path: string \| URL, options?: ExistsOptions, ): Promise<boolean>`
  - Asynchronously test whether or not the given path exists by checking with the file system.
- **`ExistsOptions`** (interface)
  - `export interface ExistsOptions`
  - Options for exists and existsSync.
- **`existsSync`** (function)
  - `export function existsSync( path: string \| URL, options?: ExistsOptions, ): boolean`
  - Synchronously test whether or not the given path exists by checking with the file system.
- **`expandGlob`** (async generator)
  - `export async function* expandGlob( glob: string \| URL, options?: ExpandGlobOptions, ): AsyncIterableIterator<WalkEntry>`
  - Returns an async iterator that yields each file path matching the given glob pattern.
- **`ExpandGlobOptions`** (interface)
  - `export interface ExpandGlobOptions extends Omit<GlobOptions, "os">`
  - Options for expandGlob and expandGlobSync.
- **`expandGlobSync`** (generator)
  - `export function* expandGlobSync( glob: string \| URL, options?: ExpandGlobOptions, ): IterableIterator<WalkEntry>`
  - Returns an iterator that yields each file path matching the given glob pattern. The file paths are relative to the provided root directory. If root is not provided, the current working directory is u…
- **`FileInfo`** (interface)
  - `export interface FileInfo`
  - Provides information about a file and is returned by stat, lstat, statSync, and lstatSync or from calling stat() and statSync() on an FsFile instance.
- **`format`** (function)
  - `export function format(content: string, eol: typeof EOL): string`
  - Normalize the input string to the targeted EOL.
- **`FsFile`** (interface)
  - `export interface FsFile extends Disposable`
  - The abstraction for reading and writing files.
- **`GlobOptions`** (re-export)
- **`LF`** (const)
  - `export const LF`
  - End-of-line character for POSIX platforms such as macOS and Linux.
- **`link`** (async function)
  - `export async function link(oldpath: string, newpath: string): Promise<void>`
  - Creates newpath as a hard link to oldpath.
- **`linkSync`** (function)
  - `export function linkSync(oldpath: string, newpath: string): void`
  - Synchronously creates newpath as a hard link to oldpath.
- **`lstat`** (async function)
  - `export async function lstat(path: string \| URL): Promise<FileInfo>`
  - Resolves to a FileInfo for the specified path. If path is a symlink, information for the symlink will be returned instead of what it points to.
- **`lstatSync`** (function)
  - `export function lstatSync(path: string \| URL): FileInfo`
  - Synchronously returns a FileInfo for the specified path. If path is a symlink, information for the symlink will be returned instead of what it points to.
- **`makeTempDir`** (async function)
  - `export async function makeTempDir(options?: MakeTempOptions): Promise<string>`
  - Creates a new temporary directory in the default directory for temporary files, unless dir is specified. Other optional options include prefixing and suffixing the directory name with prefix and suff…
- **`makeTempDirSync`** (function)
  - `export function makeTempDirSync(options?: MakeTempOptions): string`
  - Synchronously creates a new temporary directory in the default directory for temporary files, unless dir is specified. Other optional options include prefixing and suffixing the directory name with p…
- **`makeTempFile`** (async function)
  - `export async function makeTempFile(options?: MakeTempOptions): Promise<string>`
  - Creates a new temporary file in the default directory for temporary files, unless dir is specified.
- **`makeTempFileSync`** (function)
  - `export function makeTempFileSync(options?: MakeTempOptions): string`
  - Synchronously creates a new temporary file in the default directory for temporary files, unless dir is specified.
- **`MakeTempOptions`** (interface)
  - `export interface MakeTempOptions`
  - Options which can be set when using makeTempDir, makeTempDirSync, makeTempFile, and makeTempFileSync.
- **`mkdir`** (async function)
  - `export async function mkdir( path: string \| URL, options?: MkdirOptions, ): Promise<void>`
  - Creates a new directory with the specified path.
- **`MkdirOptions`** (interface)
  - `export interface MkdirOptions`
  - Options which can be set when using mkdir and mkdirSync.
- **`mkdirSync`** (function)
  - `export function mkdirSync(path: string \| URL, options?: MkdirOptions)`
  - Synchronously creates a new directory with the specified path.
- **`move`** (async function)
  - `export async function move( src: string \| URL, dest: string \| URL, options?: MoveOptions, ): Promise<void>`
  - Asynchronously moves a file or directory (along with its contents).
- **`MoveOptions`** (interface)
  - `export interface MoveOptions`
  - Options for move and moveSync.
- **`moveSync`** (function)
  - `export function moveSync( src: string \| URL, dest: string \| URL, options?: MoveOptions, ): void`
  - Synchronously moves a file or directory (along with its contents).
- **`open`** (async function)
  - `export async function open( path: string \| URL, options?: OpenOptions, ): Promise<FsFile>`
  - Open a file and resolve to an instance of FsFile. The file does not need to previously exist if using the create or createNew open options. The caller may have the resulting file automatically closed…
- **`OpenOptions`** (interface)
  - `export interface OpenOptions`
  - Options which can be set when using open and openSync.
- **`openSync`** (function)
  - `export function openSync(path: string \| URL, options?: OpenOptions): FsFile`
  - Synchronously open a file and return an instance of FsFile. The file does not need to previously exist if using the create or createNew open options. The caller may have the resulting file automatica…
- **`readDir`** (async generator)
  - `export async function* readDir(path: string \| URL): AsyncIterable<DirEntry>`
  - Reads the directory given by path and returns an async iterable of DirEntry. The order of entries is not guaranteed.
- **`readDirSync`** (generator)
  - `export function* readDirSync(path: string \| URL): Iterable<DirEntry>`
  - Synchronously reads the directory given by path and returns an iterable of DirEntry. The order of entries is not guaranteed.
- **`readFile`** (async function)
  - `export async function readFile( path: string \| URL, options?: ReadFileOptions, ): Promise<Uint8Array>`
  - Reads and resolves to the entire contents of a file as an array of bytes. TextDecoder can be used to transform the bytes to string if required.
- **`ReadFileOptions`** (interface)
  - `export interface ReadFileOptions`
  - Options which can be set when using readFile or readTextFile.
- **`readFileSync`** (function)
  - `export function readFileSync(path: string \| URL): Uint8Array`
  - Synchronously reads and returns the entire contents of a file as an array of bytes. TextDecoder can be used to transform the bytes to string if required.
- **`readLink`** (async function)
  - `export async function readLink(path: string \| URL): Promise<string>`
  - Resolves to the path destination of the named symbolic link.
- **`readLinkSync`** (function)
  - `export function readLinkSync(path: string \| URL): string`
  - Synchronously returns the path destination of the named symbolic link.
- **`readTextFile`** (async function)
  - `export async function readTextFile( path: string \| URL, options?: ReadFileOptions, ): Promise<string>`
  - Asynchronously reads and returns the entire contents of a file as an UTF-8 decoded string.
- **`readTextFileSync`** (function)
  - `export function readTextFileSync( path: string \| URL, ): string`
  - Synchronously reads and returns the entire contents of a file as an UTF-8 decoded string.
- **`realPath`** (async function)
  - `export async function realPath(path: string \| URL): Promise<string>`
  - Resolves to the absolute normalized path, with symbolic links resolved.
- **`realPathSync`** (function)
  - `export function realPathSync(path: string \| URL): string`
  - Synchronously returns absolute normalized path, with symbolic links resolved.
- **`remove`** (async function)
  - `export async function remove( path: string \| URL, options?: RemoveOptions, )`
  - Removes the named file or directory.
- **`RemoveOptions`** (interface)
  - `export interface RemoveOptions`
  - Options that can be used with remove and removeSync.
- **`removeSync`** (function)
  - `export function removeSync( path: string \| URL, options?: RemoveOptions, )`
  - Synchronously removes the named file or directory.
- **`rename`** (async function)
  - `export async function rename( oldpath: string \| URL, newpath: string \| URL, ): Promise<void>`
  - Renames (moves) oldpath to newpath. Paths may be files or directories. If newpath already exists and is not a directory, rename() replaces it. OS-specific restrictions may apply when oldpath and newp…
- **`renameSync`** (function)
  - `export function renameSync(oldpath: string \| URL, newpath: string \| URL): void`
  - Synchronously renames (moves) oldpath to newpath. Paths may be files or directories. If newpath already exists and is not a directory, renameSync() replaces it. OS-specific restrictions may apply whe…
- **`SetRawOptions`** (interface)
  - `export interface SetRawOptions`
  - Options when setting TTY to raw mode.
- **`stat`** (async function)
  - `export async function stat(path: string \| URL): Promise<FileInfo>`
  - Resolves to a FileInfo for the specified path. Will always follow symlinks.
- **`statSync`** (function)
  - `export function statSync(path: string \| URL): FileInfo`
  - Synchronously returns a FileInfo for the specified path. Will always follow symlinks.
- **`symlink`** (async function)
  - `export async function symlink( oldpath: string \| URL, newpath: string \| URL, options?: SymlinkOptions, ): Promise<void>`
  - Creates newpath as a symbolic link to oldpath.
- **`SymlinkOptions`** (interface)
  - `export interface SymlinkOptions`
  - Options that can be used with symlink and symlinkSync.
- **`symlinkSync`** (function)
  - `export function symlinkSync( oldpath: string \| URL, newpath: string \| URL, options?: SymlinkOptions, ): void`
  - Creates newpath as a symbolic link to oldpath.
- **`truncate`** (async function)
  - `export async function truncate(name: string, len?: number): Promise<void>`
  - Truncates (or extends) the specified file, to reach the specified len. If len is not specified then the entire file contents are truncated.
- **`truncateSync`** (function)
  - `export function truncateSync(name: string, len?: number): void`
  - Synchronously truncates (or extends) the specified file, to reach the specified len. If len is not specified then the entire file contents are truncated.
- **`umask`** (function)
  - `export function umask(mask?: number): number`
  - Retrieve the process umask. If mask is provided, sets the process umask. This call always returns what the umask was before the call. @example Usage
- **`utime`** (async function)
  - `export async function utime( path: string \| URL, atime: number \| Date, mtime: number \| Date, ): Promise<void>`
  - Changes the access (atime) and modification (mtime) times of a file system object referenced by path. Given times are either in seconds (UNIX epoch time) or as Date objects.
- **`utimeSync`** (function)
  - `export function utimeSync( path: string \| URL, atime: number \| Date, mtime: number \| Date, ): void`
  - Synchronously changes the access (atime) and modification (mtime) times of the file stream resource. Given times are either in seconds (UNIX epoch time) or as Date objects.
- **`walk`** (async generator)
  - `export async function* walk( root: string \| URL, options?: WalkOptions, ): AsyncIterableIterator<WalkEntry>`
  - Recursively walks through a directory and yields information about each file and directory encountered.
- **`WalkEntry`** (re-export)
- **`WalkOptions`** (interface)
  - `export interface WalkOptions`
  - Options for walk and walkSync.
- **`walkSync`** (generator)
  - `export function* walkSync( root: string \| URL, options?: WalkOptions, ): IterableIterator<WalkEntry>`
  - Recursively walks through a directory and yields information about each file and directory encountered.
- **`writeFile`** (async function)
  - `export async function writeFile( path: string \| URL, data: Uint8Array \| ReadableStream<Uint8Array>, options?: WriteFileOptions, ): Promise<void>`
  - Write data to the given path, by default creating a new file if needed, else overwriting.
- **`WriteFileOptions`** (interface)
  - `export interface WriteFileOptions`
  - Options for writing to a file.
- **`writeFileSync`** (function)
  - `export function writeFileSync( path: string \| URL, data: Uint8Array, options?: WriteFileOptions, ): void`
  - Synchronously write data to the given path, by default creating a new file if needed, else overwriting.
- **`writeTextFile`** (async function)
  - `export async function writeTextFile( path: string \| URL, data: string \| ReadableStream<string>, options?: WriteFileOptions, ): Promise<void>`
  - Write string data to the given path, by default creating a new file if needed, else overwriting.
- **`writeTextFileSync`** (function)
  - `export function writeTextFileSync( path: string \| URL, data: string, options?: WriteFileOptions, ): void`
  - Synchronously write string data to the given path, by default creating a new file if needed, else overwriting.

## `$std/fs/chmod`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-chmod`，在 $std 中以稳定名字 `fs/chmod` 提供。

- **`chmod`** (async function)
  - `export async function chmod(path: string \| URL, mode: number)`
  - Changes the permission of a specific file/directory of specified path. Ignores the process's umask.
- **`chmodSync`** (function)
  - `export function chmodSync(path: string \| URL, mode: number)`
  - Synchronously changes the permission of a specific file/directory of specified path. Ignores the process's umask.

## `$std/fs/chown`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-chown`，在 $std 中以稳定名字 `fs/chown` 提供。

- **`chown`** (async function)
  - `export async function chown( path: string \| URL, uid: number \| null, gid: number \| null, ): Promise<void>`
  - Change owner of a regular file or directory.
- **`chownSync`** (function)
  - `export function chownSync( path: string \| URL, uid: number \| null, gid: number \| null, ): void`
  - Synchronously change owner of a regular file or directory.

## `$std/fs/copy`

- **`copy`** (async function)
  - `export async function copy( src: string \| URL, dest: string \| URL, options: CopyOptions = {}, )`
  - Asynchronously copy a file or directory (along with its contents), like cp -r.
- **`CopyOptions`** (interface)
  - `export interface CopyOptions`
  - Options for copy and copySync.
- **`copySync`** (function)
  - `export function copySync( src: string \| URL, dest: string \| URL, options: CopyOptions = {}, )`
  - Synchronously copy a file or directory (along with its contents), like cp -r.

## `$std/fs/copy-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-copy-file`，在 $std 中以稳定名字 `fs/copy-file` 提供。

- **`copyFile`** (async function)
  - `export async function copyFile( from: string \| URL, to: string \| URL, ): Promise<void>`
  - Copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritable.
- **`copyFileSync`** (function)
  - `export function copyFileSync( from: string \| URL, to: string \| URL, )`
  - Synchronously copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritab…

## `$std/fs/create`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-create`，在 $std 中以稳定名字 `fs/create` 提供。

- **`create`** (async function)
  - `export async function create(path: string \| URL): Promise<FsFile>`
  - Creates a file if none exists or truncates an existing file and resolves to an instance of FsFile.
- **`createSync`** (function)
  - `export function createSync(path: string \| URL): FsFile`
  - Creates a file if none exists or truncates an existing file and returns an instance of FsFile.

## `$std/fs/empty-dir`

- **`emptyDir`** (async function)
  - `export async function emptyDir(dir: string \| URL)`
  - Asynchronously ensures that a directory is empty.
- **`emptyDirSync`** (function)
  - `export function emptyDirSync(dir: string \| URL)`
  - Synchronously ensures that a directory is empty deletes the directory contents it is not empty.

## `$std/fs/ensure-dir`

- **`ensureDir`** (async function)
  - `export async function ensureDir(dir: string \| URL)`
  - Asynchronously ensures that the directory exists, like mkdir -p.
- **`ensureDirSync`** (function)
  - `export function ensureDirSync(dir: string \| URL)`
  - Synchronously ensures that the directory exists, like mkdir -p.

## `$std/fs/ensure-file`

- **`ensureFile`** (async function)
  - `export async function ensureFile(filePath: string \| URL): Promise<void>`
  - Asynchronously ensures that the file exists.
- **`ensureFileSync`** (function)
  - `export function ensureFileSync(filePath: string \| URL): void`
  - Synchronously ensures that the file exists.

## `$std/fs/ensure-link`

- **`ensureLink`** (async function)
  - `export async function ensureLink(src: string \| URL, dest: string \| URL)`
  - Asynchronously ensures that the hard link exists.
- **`ensureLinkSync`** (function)
  - `export function ensureLinkSync(src: string \| URL, dest: string \| URL)`
  - Synchronously ensures that the hard link exists.

## `$std/fs/ensure-symlink`

- **`ensureSymlink`** (async function)
  - `export async function ensureSymlink( target: string \| URL, linkName: string \| URL, )`
  - Asynchronously ensures that the link exists, and points to a valid file.
- **`ensureSymlinkSync`** (function)
  - `export function ensureSymlinkSync( target: string \| URL, linkName: string \| URL, )`
  - Synchronously ensures that the link exists, and points to a valid file.

## `$std/fs/eol`

- **`CRLF`** (const)
  - `export const CRLF`
  - End-of-line character for Windows platforms.
- **`detect`** (function)
  - `export function detect(content: string): typeof EOL \| null`
  - Returns the detected EOL character(s) detected in the input string. If no EOL character is detected, null is returned.
- **`EOL`** (const)
  - `export const EOL: "\n" \| "\r\n"`
  - End-of-line character evaluated for the current platform.
- **`format`** (function)
  - `export function format(content: string, eol: typeof EOL): string`
  - Normalize the input string to the targeted EOL.
- **`LF`** (const)
  - `export const LF`
  - End-of-line character for POSIX platforms such as macOS and Linux.

## `$std/fs/exists`

- **`exists`** (async function)
  - `export async function exists( path: string \| URL, options?: ExistsOptions, ): Promise<boolean>`
  - Asynchronously test whether or not the given path exists by checking with the file system.
- **`ExistsOptions`** (interface)
  - `export interface ExistsOptions`
  - Options for exists and existsSync.
- **`existsSync`** (function)
  - `export function existsSync( path: string \| URL, options?: ExistsOptions, ): boolean`
  - Synchronously test whether or not the given path exists by checking with the file system.

## `$std/fs/expand-glob`

- **`expandGlob`** (async generator)
  - `export async function* expandGlob( glob: string \| URL, options?: ExpandGlobOptions, ): AsyncIterableIterator<WalkEntry>`
  - Returns an async iterator that yields each file path matching the given glob pattern.
- **`ExpandGlobOptions`** (interface)
  - `export interface ExpandGlobOptions extends Omit<GlobOptions, "os">`
  - Options for expandGlob and expandGlobSync.
- **`expandGlobSync`** (generator)
  - `export function* expandGlobSync( glob: string \| URL, options?: ExpandGlobOptions, ): IterableIterator<WalkEntry>`
  - Returns an iterator that yields each file path matching the given glob pattern. The file paths are relative to the provided root directory. If root is not provided, the current working directory is u…
- **`GlobOptions`** (re-export)
- **`WalkEntry`** (re-export)

## `$std/fs/link`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-link`，在 $std 中以稳定名字 `fs/link` 提供。

- **`link`** (async function)
  - `export async function link(oldpath: string, newpath: string): Promise<void>`
  - Creates newpath as a hard link to oldpath.
- **`linkSync`** (function)
  - `export function linkSync(oldpath: string, newpath: string): void`
  - Synchronously creates newpath as a hard link to oldpath.

## `$std/fs/lstat`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-lstat`，在 $std 中以稳定名字 `fs/lstat` 提供。

- **`lstat`** (async function)
  - `export async function lstat(path: string \| URL): Promise<FileInfo>`
  - Resolves to a FileInfo for the specified path. If path is a symlink, information for the symlink will be returned instead of what it points to.
- **`lstatSync`** (function)
  - `export function lstatSync(path: string \| URL): FileInfo`
  - Synchronously returns a FileInfo for the specified path. If path is a symlink, information for the symlink will be returned instead of what it points to.

## `$std/fs/make-temp-dir`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-make-temp-dir`，在 $std 中以稳定名字 `fs/make-temp-dir` 提供。

- **`makeTempDir`** (async function)
  - `export async function makeTempDir(options?: MakeTempOptions): Promise<string>`
  - Creates a new temporary directory in the default directory for temporary files, unless dir is specified. Other optional options include prefixing and suffixing the directory name with prefix and suff…
- **`makeTempDirSync`** (function)
  - `export function makeTempDirSync(options?: MakeTempOptions): string`
  - Synchronously creates a new temporary directory in the default directory for temporary files, unless dir is specified. Other optional options include prefixing and suffixing the directory name with p…

## `$std/fs/make-temp-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-make-temp-file`，在 $std 中以稳定名字 `fs/make-temp-file` 提供。

- **`makeTempFile`** (async function)
  - `export async function makeTempFile(options?: MakeTempOptions): Promise<string>`
  - Creates a new temporary file in the default directory for temporary files, unless dir is specified.
- **`makeTempFileSync`** (function)
  - `export function makeTempFileSync(options?: MakeTempOptions): string`
  - Synchronously creates a new temporary file in the default directory for temporary files, unless dir is specified.

## `$std/fs/mkdir`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-mkdir`，在 $std 中以稳定名字 `fs/mkdir` 提供。

- **`mkdir`** (async function)
  - `export async function mkdir( path: string \| URL, options?: MkdirOptions, ): Promise<void>`
  - Creates a new directory with the specified path.
- **`MkdirOptions`** (interface)
  - `export interface MkdirOptions`
  - Options which can be set when using mkdir and mkdirSync.
- **`mkdirSync`** (function)
  - `export function mkdirSync(path: string \| URL, options?: MkdirOptions)`
  - Synchronously creates a new directory with the specified path.

## `$std/fs/move`

- **`move`** (async function)
  - `export async function move( src: string \| URL, dest: string \| URL, options?: MoveOptions, ): Promise<void>`
  - Asynchronously moves a file or directory (along with its contents).
- **`MoveOptions`** (interface)
  - `export interface MoveOptions`
  - Options for move and moveSync.
- **`moveSync`** (function)
  - `export function moveSync( src: string \| URL, dest: string \| URL, options?: MoveOptions, ): void`
  - Synchronously moves a file or directory (along with its contents).

## `$std/fs/open`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-open`，在 $std 中以稳定名字 `fs/open` 提供。

- **`open`** (async function)
  - `export async function open( path: string \| URL, options?: OpenOptions, ): Promise<FsFile>`
  - Open a file and resolve to an instance of FsFile. The file does not need to previously exist if using the create or createNew open options. The caller may have the resulting file automatically closed…
- **`OpenOptions`** (interface)
  - `export interface OpenOptions`
  - Options which can be set when using open and openSync.
- **`openSync`** (function)
  - `export function openSync(path: string \| URL, options?: OpenOptions): FsFile`
  - Synchronously open a file and return an instance of FsFile. The file does not need to previously exist if using the create or createNew open options. The caller may have the resulting file automatica…

## `$std/fs/read-dir`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-dir`，在 $std 中以稳定名字 `fs/read-dir` 提供。

- **`readDir`** (async generator)
  - `export async function* readDir(path: string \| URL): AsyncIterable<DirEntry>`
  - Reads the directory given by path and returns an async iterable of DirEntry. The order of entries is not guaranteed.
- **`readDirSync`** (generator)
  - `export function* readDirSync(path: string \| URL): Iterable<DirEntry>`
  - Synchronously reads the directory given by path and returns an iterable of DirEntry. The order of entries is not guaranteed.

## `$std/fs/read-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-file`，在 $std 中以稳定名字 `fs/read-file` 提供。

- **`readFile`** (async function)
  - `export async function readFile( path: string \| URL, options?: ReadFileOptions, ): Promise<Uint8Array>`
  - Reads and resolves to the entire contents of a file as an array of bytes. TextDecoder can be used to transform the bytes to string if required.
- **`readFileSync`** (function)
  - `export function readFileSync(path: string \| URL): Uint8Array`
  - Synchronously reads and returns the entire contents of a file as an array of bytes. TextDecoder can be used to transform the bytes to string if required.

## `$std/fs/read-link`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-link`，在 $std 中以稳定名字 `fs/read-link` 提供。

- **`readLink`** (async function)
  - `export async function readLink(path: string \| URL): Promise<string>`
  - Resolves to the path destination of the named symbolic link.
- **`readLinkSync`** (function)
  - `export function readLinkSync(path: string \| URL): string`
  - Synchronously returns the path destination of the named symbolic link.

## `$std/fs/read-text-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-read-text-file`，在 $std 中以稳定名字 `fs/read-text-file` 提供。

- **`readTextFile`** (async function)
  - `export async function readTextFile( path: string \| URL, options?: ReadFileOptions, ): Promise<string>`
  - Asynchronously reads and returns the entire contents of a file as an UTF-8 decoded string.
- **`readTextFileSync`** (function)
  - `export function readTextFileSync( path: string \| URL, ): string`
  - Synchronously reads and returns the entire contents of a file as an UTF-8 decoded string.

## `$std/fs/real-path`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-real-path`，在 $std 中以稳定名字 `fs/real-path` 提供。

- **`realPath`** (async function)
  - `export async function realPath(path: string \| URL): Promise<string>`
  - Resolves to the absolute normalized path, with symbolic links resolved.
- **`realPathSync`** (function)
  - `export function realPathSync(path: string \| URL): string`
  - Synchronously returns absolute normalized path, with symbolic links resolved.

## `$std/fs/remove`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-remove`，在 $std 中以稳定名字 `fs/remove` 提供。

- **`remove`** (async function)
  - `export async function remove( path: string \| URL, options?: RemoveOptions, )`
  - Removes the named file or directory.
- **`removeSync`** (function)
  - `export function removeSync( path: string \| URL, options?: RemoveOptions, )`
  - Synchronously removes the named file or directory.

## `$std/fs/rename`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-rename`，在 $std 中以稳定名字 `fs/rename` 提供。

- **`rename`** (async function)
  - `export async function rename( oldpath: string \| URL, newpath: string \| URL, ): Promise<void>`
  - Renames (moves) oldpath to newpath. Paths may be files or directories. If newpath already exists and is not a directory, rename() replaces it. OS-specific restrictions may apply when oldpath and newp…
- **`renameSync`** (function)
  - `export function renameSync(oldpath: string \| URL, newpath: string \| URL): void`
  - Synchronously renames (moves) oldpath to newpath. Paths may be files or directories. If newpath already exists and is not a directory, renameSync() replaces it. OS-specific restrictions may apply whe…

## `$std/fs/stat`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-stat`，在 $std 中以稳定名字 `fs/stat` 提供。

- **`stat`** (async function)
  - `export async function stat(path: string \| URL): Promise<FileInfo>`
  - Resolves to a FileInfo for the specified path. Will always follow symlinks.
- **`statSync`** (function)
  - `export function statSync(path: string \| URL): FileInfo`
  - Synchronously returns a FileInfo for the specified path. Will always follow symlinks.

## `$std/fs/symlink`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-symlink`，在 $std 中以稳定名字 `fs/symlink` 提供。

- **`symlink`** (async function)
  - `export async function symlink( oldpath: string \| URL, newpath: string \| URL, options?: SymlinkOptions, ): Promise<void>`
  - Creates newpath as a symbolic link to oldpath.
- **`symlinkSync`** (function)
  - `export function symlinkSync( oldpath: string \| URL, newpath: string \| URL, options?: SymlinkOptions, ): void`
  - Creates newpath as a symbolic link to oldpath.

## `$std/fs/truncate`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-truncate`，在 $std 中以稳定名字 `fs/truncate` 提供。

- **`truncate`** (async function)
  - `export async function truncate(name: string, len?: number): Promise<void>`
  - Truncates (or extends) the specified file, to reach the specified len. If len is not specified then the entire file contents are truncated.
- **`truncateSync`** (function)
  - `export function truncateSync(name: string, len?: number): void`
  - Synchronously truncates (or extends) the specified file, to reach the specified len. If len is not specified then the entire file contents are truncated.

## `$std/fs/types`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-types`，在 $std 中以稳定名字 `fs/types` 提供。

- **`DirEntry`** (interface)
  - `export interface DirEntry`
  - Information about a directory entry returned from readDir and readDirSync.
- **`FileInfo`** (interface)
  - `export interface FileInfo`
  - Provides information about a file and is returned by stat, lstat, statSync, and lstatSync or from calling stat() and statSync() on an FsFile instance.
- **`FsFile`** (interface)
  - `export interface FsFile extends Disposable`
  - The abstraction for reading and writing files.
- **`MakeTempOptions`** (interface)
  - `export interface MakeTempOptions`
  - Options which can be set when using makeTempDir, makeTempDirSync, makeTempFile, and makeTempFileSync.
- **`ReadFileOptions`** (interface)
  - `export interface ReadFileOptions`
  - Options which can be set when using readFile or readTextFile.
- **`RemoveOptions`** (interface)
  - `export interface RemoveOptions`
  - Options that can be used with remove and removeSync.
- **`SetRawOptions`** (interface)
  - `export interface SetRawOptions`
  - Options when setting TTY to raw mode.
- **`SymlinkOptions`** (interface)
  - `export interface SymlinkOptions`
  - Options that can be used with symlink and symlinkSync.
- **`WriteFileOptions`** (interface)
  - `export interface WriteFileOptions`
  - Options for writing to a file.

## `$std/fs/umask`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-umask`，在 $std 中以稳定名字 `fs/umask` 提供。

- **`umask`** (function)
  - `export function umask(mask?: number): number`
  - Retrieve the process umask. If mask is provided, sets the process umask. This call always returns what the umask was before the call. @example Usage

## `$std/fs/utime`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-utime`，在 $std 中以稳定名字 `fs/utime` 提供。

- **`utime`** (async function)
  - `export async function utime( path: string \| URL, atime: number \| Date, mtime: number \| Date, ): Promise<void>`
  - Changes the access (atime) and modification (mtime) times of a file system object referenced by path. Given times are either in seconds (UNIX epoch time) or as Date objects.
- **`utimeSync`** (function)
  - `export function utimeSync( path: string \| URL, atime: number \| Date, mtime: number \| Date, ): void`
  - Synchronously changes the access (atime) and modification (mtime) times of the file stream resource. Given times are either in seconds (UNIX epoch time) or as Date objects.

## `$std/fs/walk`

- **`walk`** (async generator)
  - `export async function* walk( root: string \| URL, options?: WalkOptions, ): AsyncIterableIterator<WalkEntry>`
  - Recursively walks through a directory and yields information about each file and directory encountered.
- **`WalkEntry`** (re-export)
- **`WalkOptions`** (interface)
  - `export interface WalkOptions`
  - Options for walk and walkSync.
- **`walkSync`** (generator)
  - `export function* walkSync( root: string \| URL, options?: WalkOptions, ): IterableIterator<WalkEntry>`
  - Recursively walks through a directory and yields information about each file and directory encountered.

## `$std/fs/write-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-write-file`，在 $std 中以稳定名字 `fs/write-file` 提供。

- **`writeFile`** (async function)
  - `export async function writeFile( path: string \| URL, data: Uint8Array \| ReadableStream<Uint8Array>, options?: WriteFileOptions, ): Promise<void>`
  - Write data to the given path, by default creating a new file if needed, else overwriting.
- **`writeFileSync`** (function)
  - `export function writeFileSync( path: string \| URL, data: Uint8Array, options?: WriteFileOptions, ): void`
  - Synchronously write data to the given path, by default creating a new file if needed, else overwriting.

## `$std/fs/write-text-file`

> ⚠️ 上游为不稳定模块 `@std/fs/unstable-write-text-file`，在 $std 中以稳定名字 `fs/write-text-file` 提供。

- **`writeTextFile`** (async function)
  - `export async function writeTextFile( path: string \| URL, data: string \| ReadableStream<string>, options?: WriteFileOptions, ): Promise<void>`
  - Write string data to the given path, by default creating a new file if needed, else overwriting.
- **`writeTextFileSync`** (function)
  - `export function writeTextFileSync( path: string \| URL, data: string, options?: WriteFileOptions, ): void`
  - Synchronously write string data to the given path, by default creating a new file if needed, else overwriting.
