# `$std/xml` — @std/xml@0.2.0

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/xml
     需要精确签名时以 `deno doc` 或源码为准。 -->

> XML parsing and serialization for Deno.

导入：`import {...} from "$std/xml";`　别名：`jsr:@g9wp/std@^0.1.5/xml`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/xml` | `@std/xml` | `xml/mod.ts` | 30 |
| `$std/xml/parse` | `@std/xml/parse` | `xml/parse.ts` | 2 |
| `$std/xml/parse-records` | `@std/xml/parse-records` | `xml/parse_records.ts` | 2 |
| `$std/xml/parse-stream` | `@std/xml/parse-stream` | `xml/parse_stream.ts` | 4 |
| `$std/xml/stringify` | `@std/xml/stringify` | `xml/stringify.ts` | 2 |
| `$std/xml/types` | `@std/xml/types` | `xml/types.ts` | 24 |

## `$std/xml`

30 个导出符号：

- **`BaseParseOptions`** (interface)
  - `export interface BaseParseOptions`
  - Base options shared by parsing functions.
- **`isCData`** (function)
  - `export function isCData(node: XmlNode): node is XmlCDataNode`
  - Type guard to check if a node is a CDATA node.
- **`isComment`** (function)
  - `export function isComment(node: XmlNode): node is XmlCommentNode`
  - Type guard to check if a node is a comment.
- **`isElement`** (function)
  - `export function isElement(node: XmlNode): node is XmlElement`
  - Type guard to check if a node is an element.
- **`isText`** (function)
  - `export function isText(node: XmlNode): node is XmlTextNode`
  - Type guard to check if a node is a text node.
- **`parse`** (function)
  - `export function parse(xml: string, options?: ParseOptions): XmlDocument`
  - Parses an XML string into a document tree.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions extends BaseParseOptions`
  - Options for parse.
- **`ParseStreamOptions`** (interface)
  - `export interface ParseStreamOptions extends BaseParseOptions`
  - Options for parseXmlStream.
- **`parseXmlRecords`** (async generator)
  - `export async function* parseXmlRecords<T>( source: AsyncIterable<string>, createCallbacks: (emit: (record: T) => void) => XmlEventCallbacks, options: ParseStreamOptions = {}, ): AsyncGenerator<T>`
  - Parses an async iterable of XML chunks and yields records assembled inside SAX-style event callbacks.
- **`parseXmlRecordsFromBytes`** (function)
  - `export function parseXmlRecordsFromBytes<T>( source: AsyncIterable<Uint8Array>, createCallbacks: (emit: (record: T) => void) => XmlEventCallbacks, options: ParseStreamOptions = {}, ): AsyncGenerator<T>`
  - Parses an async iterable of XML byte chunks and yields records assembled inside SAX-style event callbacks.
- **`parseXmlStream`** (async function)
  - `export async function parseXmlStream( source: AsyncIterable<string>, callbacks: XmlEventCallbacks, options: ParseStreamOptions = {}, ): Promise<void>`
  - Parse XML from a stream with maximum throughput using direct callbacks.
- **`parseXmlStreamFromBytes`** (function)
  - `export function parseXmlStreamFromBytes( source: AsyncIterable<Uint8Array>, callbacks: XmlEventCallbacks, options: ParseStreamOptions = {}, ): Promise<void>`
  - Parse XML from a byte stream with maximum throughput using direct callbacks.
- **`stringify`** (function)
  - `export function stringify( node: XmlDocument \| XmlElement, options?: StringifyOptions, ): string`
  - Converts an XML document or element to an XML string.
- **`StringifyOptions`** (interface)
  - `export interface StringifyOptions`
  - Options for stringify.
- **`XmlAttributeIterator`** (interface)
  - `export interface XmlAttributeIterator`
  - Reusable attribute accessor that avoids allocating attribute object arrays.
- **`XmlCDataNode`** (interface)
  - `export interface XmlCDataNode`
  - A CDATA section node in the XML tree.
- **`XmlCommentNode`** (interface)
  - `export interface XmlCommentNode`
  - A comment node in the XML tree.
- **`XmlContentCallback`** (type)
  - `export type XmlContentCallback = ( content: string, line: number, column: number, offset: number, ) => void; export type XmlProcessingInstructionCallback = ( target: string, content: string, line: number, column: number…`
  - Callback for text, CDATA, or comment content with position.
- **`XmlDeclaration`** (interface)
  - `export interface XmlDeclaration extends XmlPosition`
  - The XML declaration of a document, exposed as XmlDocument.declaration.
- **`XmlDeclarationCallback`** (type)
  - `export type XmlDeclarationCallback = ( version: string, encoding: string \| undefined, standalone: "yes" \| "no" \| undefined, line: number, column: number, offset: number, ) => void; export type XmlDoctypeCallback = ( nam…`
  - Callback for XML declarations.
- **`XmlDoctypeCallback`** (type)
  - `export type XmlDoctypeCallback = ( name: string, publicId: string \| undefined, systemId: string \| undefined, line: number, column: number, offset: number, ) => void; export type XmlContentCallback = ( content: string, l…`
  - Callback for DOCTYPE declarations.
- **`XmlDocument`** (interface)
  - `export interface XmlDocument`
  - A parsed XML document.
- **`XmlElement`** (interface)
  - `export interface XmlElement`
  - An element node in the XML tree.
- **`XmlEventCallbacks`** (interface)
  - `export interface XmlEventCallbacks`
  - Callbacks for event-level output - enables zero-allocation event emission.
- **`XmlName`** (interface)
  - `export interface XmlName`
  - A qualified XML name with optional namespace prefix and resolved URI.
- **`XmlNode`** (type)
  - `export type XmlNode = \| XmlElement \| XmlTextNode \| XmlCDataNode \| XmlCommentNode`
  - Discriminated union of all node types in an XML tree.
- **`XmlPosition`** (interface)
  - `export interface XmlPosition`
  - Position information for error reporting.
- **`XmlProcessingInstructionCallback`** (type)
  - `export type XmlProcessingInstructionCallback = ( target: string, content: string, line: number, column: number, offset: number, ) => void; export interface XmlAttributeIterator { readonly count: number; getName(index: n…`
  - Callback for processing instructions.
- **`XmlSyntaxError`** (class)
  - `export class XmlSyntaxError extends SyntaxError`
  - Error thrown when XML parsing fails.
- **`XmlTextNode`** (interface)
  - `export interface XmlTextNode`
  - A text node in the XML tree.

## `$std/xml/parse`

- **`parse`** (function)
  - `export function parse(xml: string, options?: ParseOptions): XmlDocument`
  - Parses an XML string into a document tree.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions extends BaseParseOptions`
  - Options for parse.

## `$std/xml/parse-records`

- **`parseXmlRecords`** (async generator)
  - `export async function* parseXmlRecords<T>( source: AsyncIterable<string>, createCallbacks: (emit: (record: T) => void) => XmlEventCallbacks, options: ParseStreamOptions = {}, ): AsyncGenerator<T>`
  - Parses an async iterable of XML chunks and yields records assembled inside SAX-style event callbacks.
- **`parseXmlRecordsFromBytes`** (function)
  - `export function parseXmlRecordsFromBytes<T>( source: AsyncIterable<Uint8Array>, createCallbacks: (emit: (record: T) => void) => XmlEventCallbacks, options: ParseStreamOptions = {}, ): AsyncGenerator<T>`
  - Parses an async iterable of XML byte chunks and yields records assembled inside SAX-style event callbacks.

## `$std/xml/parse-stream`

- **`ParseStreamOptions`** (interface)
  - `export interface ParseStreamOptions extends BaseParseOptions`
  - Options for parseXmlStream.
- **`parseXmlStream`** (async function)
  - `export async function parseXmlStream( source: AsyncIterable<string>, callbacks: XmlEventCallbacks, options: ParseStreamOptions = {}, ): Promise<void>`
  - Parse XML from a stream with maximum throughput using direct callbacks.
- **`parseXmlStreamFromBytes`** (function)
  - `export function parseXmlStreamFromBytes( source: AsyncIterable<Uint8Array>, callbacks: XmlEventCallbacks, options: ParseStreamOptions = {}, ): Promise<void>`
  - Parse XML from a byte stream with maximum throughput using direct callbacks.
- **`XmlEventCallbacks`** (interface)
  - `export interface XmlEventCallbacks`
  - Callbacks for event-level output - enables zero-allocation event emission.

## `$std/xml/stringify`

- **`stringify`** (function)
  - `export function stringify( node: XmlDocument \| XmlElement, options?: StringifyOptions, ): string`
  - Converts an XML document or element to an XML string.
- **`StringifyOptions`** (interface)
  - `export interface StringifyOptions`
  - Options for stringify.

## `$std/xml/types`

- **`BaseParseOptions`** (interface)
  - `export interface BaseParseOptions`
  - Base options shared by parsing functions.
- **`isCData`** (function)
  - `export function isCData(node: XmlNode): node is XmlCDataNode`
  - Type guard to check if a node is a CDATA node.
- **`isComment`** (function)
  - `export function isComment(node: XmlNode): node is XmlCommentNode`
  - Type guard to check if a node is a comment.
- **`isElement`** (function)
  - `export function isElement(node: XmlNode): node is XmlElement`
  - Type guard to check if a node is an element.
- **`isText`** (function)
  - `export function isText(node: XmlNode): node is XmlTextNode`
  - Type guard to check if a node is a text node.
- **`ParseOptions`** (interface)
  - `export interface ParseOptions extends BaseParseOptions`
  - Options for parse.
- **`ParseStreamOptions`** (interface)
  - `export interface ParseStreamOptions extends BaseParseOptions`
  - Options for parseXmlStream.
- **`StringifyOptions`** (interface)
  - `export interface StringifyOptions`
  - Options for stringify.
- **`XmlAttributeIterator`** (interface)
  - `export interface XmlAttributeIterator`
  - Reusable attribute accessor that avoids allocating attribute object arrays.
- **`XmlCDataNode`** (interface)
  - `export interface XmlCDataNode`
  - A CDATA section node in the XML tree.
- **`XmlCommentNode`** (interface)
  - `export interface XmlCommentNode`
  - A comment node in the XML tree.
- **`XmlContentCallback`** (type)
  - `export type XmlContentCallback = ( content: string, line: number, column: number, offset: number, ) => void; export type XmlProcessingInstructionCallback = ( target: string, content: string, line: number, column: number…`
  - Callback for text, CDATA, or comment content with position.
- **`XmlDeclaration`** (interface)
  - `export interface XmlDeclaration extends XmlPosition`
  - The XML declaration of a document, exposed as XmlDocument.declaration.
- **`XmlDeclarationCallback`** (type)
  - `export type XmlDeclarationCallback = ( version: string, encoding: string \| undefined, standalone: "yes" \| "no" \| undefined, line: number, column: number, offset: number, ) => void; export type XmlDoctypeCallback = ( nam…`
  - Callback for XML declarations.
- **`XmlDoctypeCallback`** (type)
  - `export type XmlDoctypeCallback = ( name: string, publicId: string \| undefined, systemId: string \| undefined, line: number, column: number, offset: number, ) => void; export type XmlContentCallback = ( content: string, l…`
  - Callback for DOCTYPE declarations.
- **`XmlDocument`** (interface)
  - `export interface XmlDocument`
  - A parsed XML document.
- **`XmlElement`** (interface)
  - `export interface XmlElement`
  - An element node in the XML tree.
- **`XmlEventCallbacks`** (interface)
  - `export interface XmlEventCallbacks`
  - Callbacks for event-level output - enables zero-allocation event emission.
- **`XmlName`** (interface)
  - `export interface XmlName`
  - A qualified XML name with optional namespace prefix and resolved URI.
- **`XmlNode`** (type)
  - `export type XmlNode = \| XmlElement \| XmlTextNode \| XmlCDataNode \| XmlCommentNode`
  - Discriminated union of all node types in an XML tree.
- **`XmlPosition`** (interface)
  - `export interface XmlPosition`
  - Position information for error reporting.
- **`XmlProcessingInstructionCallback`** (type)
  - `export type XmlProcessingInstructionCallback = ( target: string, content: string, line: number, column: number, offset: number, ) => void; export interface XmlAttributeIterator { readonly count: number; getName(index: n…`
  - Callback for processing instructions.
- **`XmlSyntaxError`** (class)
  - `export class XmlSyntaxError extends SyntaxError`
  - Error thrown when XML parsing fails.
- **`XmlTextNode`** (interface)
  - `export interface XmlTextNode`
  - A text node in the XML tree.
