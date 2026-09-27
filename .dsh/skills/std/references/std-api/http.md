# `$std/http` — @std/http@1.1.4

<!-- 本文件由 `scripts/gen.ts` 依据 $std 源码自动生成，请勿手工编辑。
     数据源：https://github.com/g9wp/std（@g9wp/std 0.1.5 的 exports 清单）+ https://github.com/denoland/std（release-2026.09.24 源码）
     上游源码：https://github.com/denoland/std/tree/release-2026.09.24/http
     需要精确签名时以 `deno doc` 或源码为准。 -->

> Provides user-friendly serve on top of Deno's native HTTP server and other utilities for creating HTTP servers and clients.

导入：`import {...} from "$std/http";`　别名：`jsr:@g9wp/std@^0.1.5/http`

| 子路径 | 上游来源 | 源码 | 导出数 |
| --- | --- | --- | --- |
| `$std/http` | `@std/http` + `@std/http/unstable-formdata-decoder-stream` + `@std/http/unstable-formdata-encoder-stream` + `@std/http/unstable-header` + `@std/http/unstable-method` + `@std/http/unstable-problem-details` + `@std/http/unstable-signed-cookie` + `@std/http/unstable-structured-fields` + `@std/http/unstable-route` + `@std/http/unstable-cache-control` + `@std/http/unstable-message-signatures` + `@std/http/unstable-error` | `http/mod.ts`, `http/unstable_formdata_decoder_stream.ts`, `http/unstable_formdata_encoder_stream.ts`, `http/unstable_header.ts`, `http/unstable_method.ts`, `http/unstable_problem_details.ts`, `http/unstable_signed_cookie.ts`, `http/unstable_structured_fields.ts`, `http/unstable_route.ts`, `http/unstable_cache_control.ts`, `http/unstable_message_signatures.ts`, `http/unstable_error.ts` | 117 |
| `$std/http/cache-control` | `@std/http/unstable-cache-control` | `http/unstable_cache_control.ts` | 6 |
| `$std/http/cookie` | `@std/http/cookie` | `http/cookie.ts` | 5 |
| `$std/http/error` | `@std/http/unstable-error` | `http/unstable_error.ts` | 2 |
| `$std/http/etag` | `@std/http/etag` | `http/etag.ts` | 5 |
| `$std/http/file-server` | `@std/http/file-server` | `http/file_server.ts` | 4 |
| `$std/http/formdata-decoder-stream` | `@std/http/unstable-formdata-decoder-stream` | `http/unstable_formdata_decoder_stream.ts` | 2 |
| `$std/http/formdata-encoder-stream` | `@std/http/unstable-formdata-encoder-stream` | `http/unstable_formdata_encoder_stream.ts` | 2 |
| `$std/http/header` | `@std/http/unstable-header` | `http/unstable_header.ts` | 2 |
| `$std/http/message-signatures` | `@std/http/unstable-message-signatures` | `http/unstable_message_signatures.ts` | 15 |
| `$std/http/method` | `@std/http/unstable-method` | `http/unstable_method.ts` | 2 |
| `$std/http/negotiation` | `@std/http/negotiation` | `http/negotiation.ts` | 3 |
| `$std/http/problem-details` | `@std/http/unstable-problem-details` | `http/unstable_problem_details.ts` | 8 |
| `$std/http/route` | `@std/http/unstable-route` | `http/unstable_route.ts` | 6 |
| `$std/http/server-sent-event-parse-stream` | `@std/http/server-sent-event-parse-stream` | `http/server_sent_event_parse_stream.ts` | 3 |
| `$std/http/server-sent-event-stream` | `@std/http/server-sent-event-stream` | `http/server_sent_event_stream.ts` | 2 |
| `$std/http/signed-cookie` | `@std/http/unstable-signed-cookie` | `http/unstable_signed_cookie.ts` | 3 |
| `$std/http/status` | `@std/http/status` | `http/status.ts` | 17 |
| `$std/http/structured-fields` | `@std/http/unstable-structured-fields` | `http/unstable_structured_fields.ts` | 24 |
| `$std/http/user-agent` | `@std/http/user-agent` | `http/user_agent.ts` | 6 |

## `$std/http`

117 个导出符号：

- **`accepts`** (function)
  - `export function accepts(request: Pick<Request, "headers">): string[]`
  - Returns an array of media types accepted by the request, in order of preference. If there are no media types supplied in the request, then any media type selector will be returned.
- **`acceptsEncodings`** (function)
  - `export function acceptsEncodings(request: Pick<Request, "headers">): string[]`
  - Returns an array of content encodings accepted by the request, in order of preference. If there are no encoding supplied in the request, then ["*"] is returned, implying any encoding is accepted.
- **`acceptsLanguages`** (function)
  - `export function acceptsLanguages(request: Pick<Request, "headers">): string[]`
  - Returns an array of languages accepted by the request, in order of preference. If there are no languages supplied in the request, then ["*"] is returned, imply any language is accepted.
- **`BareItem`** (type)
  - `export type BareItem = \| … }`
  - A Bare Item value in a Structured Field.
- **`binary`** (function)
  - `export function binary( value: Uint8Array, ): Extract<BareItem, { type: "binary" }>`
  - Creates a binary Bare Item.
- **`boolean`** (function)
  - `export function boolean( value: boolean, ): Extract<BareItem, { type: "boolean" }>`
  - Creates a boolean Bare Item.
- **`Browser`** (interface)
  - `export interface Browser`
  - The browser as described by a user agent string.
- **`CacheControl`** (type)
  - `export type CacheControl = … }`
  - Parsed Cache-Control value. Contains all directives from both request and response contexts with the widest applicable types. Returned by parseCacheControl and accepted by formatCacheControl.
- **`CacheControlBase`** (interface)
  - `export interface CacheControlBase`
  - Directives shared by both request and response Cache-Control headers.
- **`ClientErrorStatus`** (type)
  - `export type ClientErrorStatus = \| typeof STATUS_CODE.BadRequest \| typeof STATUS_CODE.Unauthorized \| typeof STATUS_CODE.PaymentRequired \| typeof STATUS_CODE.Forbidden \| typeof STATUS_CODE.NotFound \| typeof STATUS_CODE.Me…`
  - An HTTP status that is a client error (4XX).
- **`ComponentIdentifier`** (interface)
  - `export interface ComponentIdentifier`
  - A component identifier consisting of a name and optional parameters.
- **`ComponentInput`** (type)
  - `export type ComponentInput = \| DerivedComponent \| (string & NonNullable<unknown>) \| ComponentIdentifier`
  - Convenience type accepting either a plain string or a full ComponentIdentifier. Known derived component names are autocompleted.
- **`ComponentParameters`** (interface)
  - `export interface ComponentParameters`
  - Parameters that can be attached to a component identifier.
- **`Cookie`** (interface)
  - `export interface Cookie`
  - Represents an HTTP Cookie.
- **`Cpu`** (interface)
  - `export interface Cpu`
  - The CPU information as described by a user agent string.
- **`createProblemDetailsResponse`** (function)
  - `export function createProblemDetailsResponse< T extends ProblemDetailsExtensions, >( problemDetails: ProblemDetails<T>, options?: ProblemDetailsResponseOptions, ): Response`
  - Creates a Response with an application/problem+json body from a ProblemDetails object.
- **`createSignatureBase`** (function)
  - `export function createSignatureBase( options: CreateSignatureBaseOptions, ): string`
  - Construct the signature base string for a message per RFC 9421 section 2.5.
- **`CreateSignatureBaseOptions`** (interface)
  - `export interface CreateSignatureBaseOptions`
  - Options for createSignatureBase.
- **`date`** (function)
  - `export function date(value: Date): Extract<BareItem, { type: "date" }>`
  - Creates a date Bare Item.
- **`decimal`** (function)
  - `export function decimal(value: number): Extract<BareItem, { type: "decimal" }>`
  - Creates a decimal Bare Item.
- **`deleteCookie`** (function)
  - `export function deleteCookie( headers: Headers, name: string, attributes?: Pick< Cookie, "path" \| "domain" \| "secure" \| "httpOnly" \| "partitioned" >, )`
  - Set the cookie header with empty value in the headers to delete it.
- **`DerivedComponent`** (type)
  - `export type DerivedComponent = \| "@method" \| "@target-uri" \| "@authority" \| "@scheme" \| "@request-target" \| "@path" \| "@query" \| "@query-param" \| "@status"`
  - Known derived component names per RFC 9421 section 2.2.
- **`Device`** (interface)
  - `export interface Device`
  - The device as described by a user agent string.
- **`Dictionary`** (type)
  - `export type Dictionary = ReadonlyMap<string, Item \| InnerList>`
  - A Dictionary Structured Field value.
- **`displayString`** (function)
  - `export function displayString( value: string, ): Extract<BareItem, { type: "displaystring" }>`
  - Creates a display string Bare Item.
- **`Engine`** (interface)
  - `export interface Engine`
  - The browser engine as described by a user agent string.
- **`ErrorStatus`** (type)
  - `export type ErrorStatus = ClientErrorStatus \| ServerErrorStatus`
  - An HTTP status that is an error (4XX and 5XX).
- **`eTag`** (async function)
  - `export async function eTag( entity: string \| ReturnType<TextEncoder["encode"]>, options?: ETagOptions, ): Promise<string>`
  - Calculate an ETag for string or Uint8Array entities. This returns a strong tag of the form "<ascii chars>", which guarantees the byte-for-byte equality of the resource.
- **`ETagOptions`** (interface)
  - `export interface ETagOptions`
  - Options for eTag.
- **`FileInfo`** (interface)
  - `export interface FileInfo`
  - Just the part of Deno.FileInfo that is required to calculate an ETag, so partial or user generated file information can be passed.
- **`formatCacheControl`** (function)
  - `export function formatCacheControl(cc: CacheControl): string`
  - Serializes a Cache-Control object to a header value string. Output is lowercase and comma-separated. Empty object produces an empty string.
- **`FormDataDecoderStream`** (class)
  - `export class FormDataDecoderStream`
  - ### Overview FormDataDecoderStream is a class based off the [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) spec and offers a way to decode a FormData in a streaming manner. Enabling one to…
- **`FormDataEncoderStream`** (class)
  - `export class FormDataEncoderStream`
  - ### Overview FormDataEncoderStream is a class based off the [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) spec and offers a way to create a FormData in a streaming manner. Enabling one to…
- **`FormDataEntry`** (interface)
  - `export interface FormDataEntry`
  - The output that is passed from a FormDataDecoderStream.
- **`FormDataInput`** (interface)
  - `export interface FormDataInput`
  - The input that can be passed to a FormDataEncoderStream.
- **`getCookies`** (function)
  - `export function getCookies( headers: Headers, ): Partial<Record<string, string>>`
  - Parse cookies of a header
- **`getSetCookies`** (function)
  - `export function getSetCookies(headers: Headers): Cookie[]`
  - Parse set-cookies of a header
- **`Handler`** (type)
  - `export type Handler = ( request: Request, params: URLPatternResult, info?: Deno.ServeHandlerInfo, ) => Response \| Promise<Response>; export interface Route { pattern: URLPattern; method?: string \| string[]; handler: Han…`
  - Request handler for Route.
- **`Header`** (type)
  - `export type Header = typeof HEADER[keyof typeof HEADER]`
  - A HTTP Header
- **`HEADER`** (const)
  - `export const HEADER`
  - HTTP Headers with status permanent
- **`HttpError`** (class)
  - `export class HttpError extends Error`
  - An error class for representing HTTP errors with status codes.
- **`HttpErrorOptions`** (interface)
  - `export interface HttpErrorOptions extends ErrorOptions`
  - Options for HttpError.
- **`ifMatch`** (function)
  - `export function ifMatch( value: string \| null, etag: string \| undefined, ): boolean`
  - A helper function that takes the value from the If-Match header and a calculated etag for the target. By using strong comparison, return true if the values match, otherwise false.
- **`ifNoneMatch`** (function)
  - `export function ifNoneMatch( value: string \| null, etag: string \| undefined, ): boolean`
  - A helper function that takes the value from the If-None-Match header and a calculated etag for the target entity and returns false if the etag for the entity matches the supplied value, otherwise tru…
- **`InformationalStatus`** (type)
  - `export type InformationalStatus = \| typeof STATUS_CODE.Continue \| typeof STATUS_CODE.SwitchingProtocols \| typeof STATUS_CODE.Processing \| typeof STATUS_CODE.EarlyHints`
  - An HTTP status that is a informational (1XX).
- **`innerList`** (function)
  - `export function innerList( items: Item[], parameters?: Iterable<[string, BareItem]>, ): InnerList`
  - Creates an Inner List from Items and optional Parameters.
- **`InnerList`** (interface)
  - `export interface InnerList`
  - An Inner List in a Structured Field.
- **`integer`** (function)
  - `export function integer(value: number): Extract<BareItem, { type: "integer" }>`
  - Creates an integer Bare Item.
- **`isClientErrorStatus`** (function)
  - `export function isClientErrorStatus( status: number, ): status is ClientErrorStatus`
  - A type guard that determines if the status code is a client error.
- **`isErrorStatus`** (function)
  - `export function isErrorStatus(status: number): status is ErrorStatus`
  - A type guard that determines if the status code is an error.
- **`isInformationalStatus`** (function)
  - `export function isInformationalStatus( status: number, ): status is InformationalStatus`
  - A type guard that determines if the status code is informational.
- **`isInnerList`** (function)
  - `export function isInnerList( member: Item \| InnerList, ): member is InnerList`
  - Checks if a list member is an Inner List.
- **`isItem`** (function)
  - `export function isItem(member: Item \| InnerList): member is Item`
  - Checks if a list member is an Item (not an Inner List).
- **`isProblemDetailsResponse`** (function)
  - `export function isProblemDetailsResponse(response: Response): boolean`
  - Type guard that checks whether a Response has an application/problem+json content type.
- **`isRedirectStatus`** (function)
  - `export function isRedirectStatus(status: number): status is RedirectStatus`
  - A type guard that determines if the status code is a redirection.
- **`isServerErrorStatus`** (function)
  - `export function isServerErrorStatus( status: number, ): status is ServerErrorStatus`
  - A type guard that determines if the status code is a server error.
- **`isStatus`** (function)
  - `export function isStatus(status: number): status is StatusCode`
  - Returns whether the provided number is a valid HTTP status code.
- **`isSuccessfulStatus`** (function)
  - `export function isSuccessfulStatus( status: number, ): status is SuccessfulStatus`
  - A type guard that determines if the status code is successful.
- **`item`** (function)
  - `export function item( value: BareItem, parameters?: Iterable<[string, BareItem]>, ): Item`
  - Creates an Item from a Bare Item and optional Parameters.
- **`Item`** (interface)
  - `export interface Item`
  - An Item in a Structured Field, consisting of a Bare Item and Parameters.
- **`List`** (type)
  - `export type List = Array<Item \| InnerList>`
  - A List Structured Field value.
- **`Method`** (type)
  - `export type Method = typeof METHOD[keyof typeof METHOD]`
  - A HTTP Method
- **`METHOD`** (const)
  - `export const METHOD`
  - HTTP Methods derived from IANA Hypertext Transfer Protocol (HTTP) Method Registry
- **`Os`** (interface)
  - `export interface Os`
  - The OS as described by a user agent string.
- **`Parameters`** (type)
  - `export type Parameters = ReadonlyMap<string, BareItem>`
  - Parameters attached to an Item or Inner List.
- **`parseCacheControl`** (function)
  - `export function parseCacheControl(value: string \| null): CacheControl`
  - Parses a Cache-Control header value into a typed object. Returns an empty object for null or empty string. Directive names are case-insensitive.
- **`parseDictionary`** (function)
  - `export function parseDictionary(input: string): Dictionary`
  - Parses a Dictionary Structured Field value.
- **`ParsedSignatureParams`** (interface)
  - `export interface ParsedSignatureParams`
  - Parsed signature parameters returned from verification. Components are always fully resolved ComponentIdentifier objects.
- **`parseItem`** (function)
  - `export function parseItem(input: string): Item`
  - Parses an Item Structured Field value.
- **`parseList`** (function)
  - `export function parseList(input: string): List`
  - Parses a List Structured Field value.
- **`parseProblemDetails`** (function)
  - `export function parseProblemDetails< T extends ProblemDetailsExtensions = Record<string, never>, >(input: unknown): ProblemDetails<T>`
  - Parses a plain JSON value into a ProblemDetails.
- **`parseProblemDetailsResponse`** (async function)
  - `export async function parseProblemDetailsResponse< T extends ProblemDetailsExtensions = Record<string, never>, >(input: Response): Promise<ProblemDetails<T>>`
  - Parses a Response body into a ProblemDetails.
- **`parseSignedCookie`** (function)
  - `export function parseSignedCookie(signedCookie: string): string`
  - Parses a signed cookie to get its value.
- **`ProblemDetails`** (type)
  - `export type ProblemDetails< T extends ProblemDetailsExtensions = Record<string, never>, > = … }`
  - A Problem Details object as defined by RFC 9457.
- **`ProblemDetailsExtensions`** (type)
  - `export type ProblemDetailsExtensions = Omit< Record<string, unknown>, StandardProblemDetailsMember >`
  - Constraint for Problem Details extension members.
- **`ProblemDetailsResponseOptions`** (interface)
  - `export interface ProblemDetailsResponseOptions`
  - Options for createProblemDetailsResponse.
- **`RedirectStatus`** (type)
  - `export type RedirectStatus = \| typeof STATUS_CODE.MultipleChoices \| typeof STATUS_CODE.MovedPermanently \| typeof STATUS_CODE.Found \| typeof STATUS_CODE.SeeOther \| typeof STATUS_CODE.UseProxy \| typeof STATUS_CODE.Tempora…`
  - An HTTP status that is a redirect (3XX).
- **`RequestCacheControl`** (interface)
  - `export interface RequestCacheControl extends CacheControlBase`
  - Cache-Control directives for requests (e.g. from a client).
- **`RequestHandler`** (type)
  - `export type RequestHandler = ( request: Request, info?: Deno.ServeHandlerInfo, ) => Response \| Promise<Response>; export type Handler = ( request: Request, params: URLPatternResult, info?: Deno.ServeHandlerInfo, ) => Re…`
  - A handler for HTTP requests.
- **`ResponseCacheControl`** (interface)
  - `export interface ResponseCacheControl extends CacheControlBase`
  - Cache-Control directives for responses (e.g. from a server).
- **`route`** (re-export)
- **`Route`** (interface)
  - `export interface Route`
  - Route configuration for route.
- **`routeLinear`** (function)
  - `export function routeLinear( routes: Route[], defaultHandler: RequestHandler, ): RequestHandler`
  - Routes requests to handlers using a linear scan over all routes.
- **`routeRadix`** (function)
  - `export function routeRadix( routes: Route[], defaultHandler: RequestHandler, ): RequestHandler`
  - Routes requests to different handlers based on the request path and method.
- **`serializeDictionary`** (function)
  - `export function serializeDictionary(dict: Dictionary): string`
  - Serializes a Dictionary to a string.
- **`serializeItem`** (function)
  - `export function serializeItem(value: Item): string`
  - Serializes an Item to a string.
- **`serializeList`** (function)
  - `export function serializeList(list: List): string`
  - Serializes a List to a string.
- **`serveDir`** (async function)
  - `export async function serveDir( req: Request, opts: ServeDirOptions = {}, ): Promise<Response>`
  - Serves the files under the given directory root (opts.fsRoot).
- **`ServeDirOptions`** (interface)
  - `export interface ServeDirOptions`
  - Interface for serveDir options.
- **`serveFile`** (async function)
  - `export async function serveFile( req: Request, filePath: string, options?: ServeFileOptions, ): Promise<Response>`
  - Resolves a Response with the requested file as the body.
- **`ServeFileOptions`** (interface)
  - `export interface ServeFileOptions`
  - Options for serveFile.
- **`ServerErrorStatus`** (type)
  - `export type ServerErrorStatus = \| typeof STATUS_CODE.InternalServerError \| typeof STATUS_CODE.NotImplemented \| typeof STATUS_CODE.BadGateway \| typeof STATUS_CODE.ServiceUnavailable \| typeof STATUS_CODE.GatewayTimeout \|…`
  - An HTTP status that is a server error (5XX).
- **`ServerSentEventMessage`** (interface)
  - `export interface ServerSentEventMessage`
  - Represents a message in the Server-Sent Event (SSE) protocol.
- **`ServerSentEventParsedMessage`** (type)
  - `export type ServerSentEventParsedMessage = & Omit<ServerSentEventMessage, "id"> & … }`
  - A server-sent event message parsed from a stream.
- **`ServerSentEventParseStream`** (class)
  - `export class ServerSentEventParseStream extends TransformStream<Uint8Array, ServerSentEventParsedMessage>`
  - Transforms a byte stream of server-sent events into parsed message objects.
- **`ServerSentEventParseStreamOptions`** (interface)
  - `export interface ServerSentEventParseStreamOptions`
  - Options for ServerSentEventParseStream.
- **`ServerSentEventStream`** (class)
  - `export class ServerSentEventStream extends TransformStream<ServerSentEventMessage, Uint8Array>`
  - Transforms server-sent message objects into strings for the client.
- **`setCookie`** (function)
  - `export function setCookie(headers: Headers, cookie: Cookie)`
  - Set the cookie header properly in the headers
- **`SignatureAlgorithm`** (type)
  - `export type SignatureAlgorithm = \| "rsa-pss-sha512" \| "rsa-v1_5-sha256" \| "hmac-sha256" \| "ecdsa-p256-sha256" \| "ecdsa-p384-sha384" \| "ed25519"`
  - Algorithm identifiers per RFC 9421 section 3.3.
- **`SignatureParams`** (interface)
  - `export interface SignatureParams`
  - Signature parameters used when signing a message.
- **`signCookie`** (async function)
  - `export async function signCookie( value: string, key: CryptoKey, ): Promise<string>`
  - Returns a promise with the signed cookie value from the given cryptographic key.
- **`signMessage`** (async function)
  - `export async function signMessage<T extends Request \| Response>( options: SignOptions<T>, ): Promise<T>`
  - Sign an HTTP message per RFC 9421.
- **`SignOptions`** (interface)
  - `export interface SignOptions< T extends Request \| Response = Request \| Response, > { message: T; params: SignatureParams; key: CryptoKey; request?: Request; } export interface VerifyOptions { maxAge?: number; requiredCo…`
  - Options for signMessage.
- **`StandardProblemDetailsMember`** (type)
  - `export type StandardProblemDetailsMember = \| "type" \| "status" \| "title" \| "detail" \| "instance"`
  - Keys of the five standard Problem Details members defined by RFC 9457. Used to prevent extension members from shadowing standard fields.
- **`STATUS_CODE`** (const)
  - `export const STATUS_CODE`
  - Contains the STATUS_CODE object which contains standard HTTP status codes and provides several type guards for handling status codes with type safety.
- **`STATUS_TEXT`** (const)
  - `export const STATUS_TEXT`
  - A record of all the status codes text.
- **`StatusCode`** (type)
  - `export type StatusCode = typeof STATUS_CODE[keyof typeof STATUS_CODE]`
  - An HTTP status code.
- **`StatusText`** (type)
  - `export type StatusText = typeof STATUS_TEXT[keyof typeof STATUS_TEXT]`
  - An HTTP status text.
- **`string`** (function)
  - `export function string(value: string): Extract<BareItem, { type: "string" }>`
  - Creates a string Bare Item.
- **`SuccessfulStatus`** (type)
  - `export type SuccessfulStatus = \| typeof STATUS_CODE.OK \| typeof STATUS_CODE.Created \| typeof STATUS_CODE.Accepted \| typeof STATUS_CODE.NonAuthoritativeInfo \| typeof STATUS_CODE.NoContent \| typeof STATUS_CODE.ResetConten…`
  - An HTTP status that is a success (2XX).
- **`token`** (function)
  - `export function token(value: string): Extract<BareItem, { type: "token" }>`
  - Creates a token Bare Item.
- **`Uint8Array_`** (re-export)
- **`UserAgent`** (class)
  - `export class UserAgent`
  - A representation of user agent string, which can be used to determine environmental information represented by the string. All properties are determined lazily.
- **`verifyMessage`** (async function)
  - `export async function verifyMessage( message: Request \| Response, keyLookup: ( keyId: string, algorithm?: SignatureAlgorithm, ) => Promise<CryptoKey \| null> \| CryptoKey \| null, options?: VerifyOptions, ): Promise<Verify…`
  - Verify one or more signatures on an HTTP message per RFC 9421.
- **`VerifyOptions`** (interface)
  - `export interface VerifyOptions`
  - Options for verifyMessage.
- **`VerifyResult`** (interface)
  - `export interface VerifyResult`
  - Result of a successful signature verification.
- **`verifySignedCookie`** (async function)
  - `export async function verifySignedCookie( signedCookie: string, key: CryptoKey, ): Promise<boolean>`
  - Returns a promise of a boolean indicating whether the signed cookie is valid.

## `$std/http/cache-control`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-cache-control`，在 $std 中以稳定名字 `http/cache-control` 提供。

- **`CacheControl`** (type)
  - `export type CacheControl = … }`
  - Parsed Cache-Control value. Contains all directives from both request and response contexts with the widest applicable types. Returned by parseCacheControl and accepted by formatCacheControl.
- **`CacheControlBase`** (interface)
  - `export interface CacheControlBase`
  - Directives shared by both request and response Cache-Control headers.
- **`formatCacheControl`** (function)
  - `export function formatCacheControl(cc: CacheControl): string`
  - Serializes a Cache-Control object to a header value string. Output is lowercase and comma-separated. Empty object produces an empty string.
- **`parseCacheControl`** (function)
  - `export function parseCacheControl(value: string \| null): CacheControl`
  - Parses a Cache-Control header value into a typed object. Returns an empty object for null or empty string. Directive names are case-insensitive.
- **`RequestCacheControl`** (interface)
  - `export interface RequestCacheControl extends CacheControlBase`
  - Cache-Control directives for requests (e.g. from a client).
- **`ResponseCacheControl`** (interface)
  - `export interface ResponseCacheControl extends CacheControlBase`
  - Cache-Control directives for responses (e.g. from a server).

## `$std/http/cookie`

- **`Cookie`** (interface)
  - `export interface Cookie`
  - Represents an HTTP Cookie.
- **`deleteCookie`** (function)
  - `export function deleteCookie( headers: Headers, name: string, attributes?: Pick< Cookie, "path" \| "domain" \| "secure" \| "httpOnly" \| "partitioned" >, )`
  - Set the cookie header with empty value in the headers to delete it.
- **`getCookies`** (function)
  - `export function getCookies( headers: Headers, ): Partial<Record<string, string>>`
  - Parse cookies of a header
- **`getSetCookies`** (function)
  - `export function getSetCookies(headers: Headers): Cookie[]`
  - Parse set-cookies of a header
- **`setCookie`** (function)
  - `export function setCookie(headers: Headers, cookie: Cookie)`
  - Set the cookie header properly in the headers

## `$std/http/error`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-error`，在 $std 中以稳定名字 `http/error` 提供。

- **`HttpError`** (class)
  - `export class HttpError extends Error`
  - An error class for representing HTTP errors with status codes.
- **`HttpErrorOptions`** (interface)
  - `export interface HttpErrorOptions extends ErrorOptions`
  - Options for HttpError.

## `$std/http/etag`

- **`eTag`** (async function)
  - `export async function eTag( entity: string \| ReturnType<TextEncoder["encode"]>, options?: ETagOptions, ): Promise<string>`
  - Calculate an ETag for string or Uint8Array entities. This returns a strong tag of the form "<ascii chars>", which guarantees the byte-for-byte equality of the resource.
- **`ETagOptions`** (interface)
  - `export interface ETagOptions`
  - Options for eTag.
- **`FileInfo`** (interface)
  - `export interface FileInfo`
  - Just the part of Deno.FileInfo that is required to calculate an ETag, so partial or user generated file information can be passed.
- **`ifMatch`** (function)
  - `export function ifMatch( value: string \| null, etag: string \| undefined, ): boolean`
  - A helper function that takes the value from the If-Match header and a calculated etag for the target. By using strong comparison, return true if the values match, otherwise false.
- **`ifNoneMatch`** (function)
  - `export function ifNoneMatch( value: string \| null, etag: string \| undefined, ): boolean`
  - A helper function that takes the value from the If-None-Match header and a calculated etag for the target entity and returns false if the etag for the entity matches the supplied value, otherwise tru…

## `$std/http/file-server`

- **`serveDir`** (async function)
  - `export async function serveDir( req: Request, opts: ServeDirOptions = {}, ): Promise<Response>`
  - Serves the files under the given directory root (opts.fsRoot).
- **`ServeDirOptions`** (interface)
  - `export interface ServeDirOptions`
  - Interface for serveDir options.
- **`serveFile`** (async function)
  - `export async function serveFile( req: Request, filePath: string, options?: ServeFileOptions, ): Promise<Response>`
  - Resolves a Response with the requested file as the body.
- **`ServeFileOptions`** (interface)
  - `export interface ServeFileOptions`
  - Options for serveFile.

## `$std/http/formdata-decoder-stream`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-formdata-decoder-stream`，在 $std 中以稳定名字 `http/formdata-decoder-stream` 提供。

- **`FormDataDecoderStream`** (class)
  - `export class FormDataDecoderStream`
  - ### Overview FormDataDecoderStream is a class based off the [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) spec and offers a way to decode a FormData in a streaming manner. Enabling one to…
- **`FormDataEntry`** (interface)
  - `export interface FormDataEntry`
  - The output that is passed from a FormDataDecoderStream.

## `$std/http/formdata-encoder-stream`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-formdata-encoder-stream`，在 $std 中以稳定名字 `http/formdata-encoder-stream` 提供。

- **`FormDataEncoderStream`** (class)
  - `export class FormDataEncoderStream`
  - ### Overview FormDataEncoderStream is a class based off the [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) spec and offers a way to create a FormData in a streaming manner. Enabling one to…
- **`FormDataInput`** (interface)
  - `export interface FormDataInput`
  - The input that can be passed to a FormDataEncoderStream.

## `$std/http/header`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-header`，在 $std 中以稳定名字 `http/header` 提供。

- **`Header`** (type)
  - `export type Header = typeof HEADER[keyof typeof HEADER]`
  - A HTTP Header
- **`HEADER`** (const)
  - `export const HEADER`
  - HTTP Headers with status permanent

## `$std/http/message-signatures`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-message-signatures`，在 $std 中以稳定名字 `http/message-signatures` 提供。

- **`ComponentIdentifier`** (interface)
  - `export interface ComponentIdentifier`
  - A component identifier consisting of a name and optional parameters.
- **`ComponentInput`** (type)
  - `export type ComponentInput = \| DerivedComponent \| (string & NonNullable<unknown>) \| ComponentIdentifier`
  - Convenience type accepting either a plain string or a full ComponentIdentifier. Known derived component names are autocompleted.
- **`ComponentParameters`** (interface)
  - `export interface ComponentParameters`
  - Parameters that can be attached to a component identifier.
- **`createSignatureBase`** (function)
  - `export function createSignatureBase( options: CreateSignatureBaseOptions, ): string`
  - Construct the signature base string for a message per RFC 9421 section 2.5.
- **`CreateSignatureBaseOptions`** (interface)
  - `export interface CreateSignatureBaseOptions`
  - Options for createSignatureBase.
- **`DerivedComponent`** (type)
  - `export type DerivedComponent = \| "@method" \| "@target-uri" \| "@authority" \| "@scheme" \| "@request-target" \| "@path" \| "@query" \| "@query-param" \| "@status"`
  - Known derived component names per RFC 9421 section 2.2.
- **`ParsedSignatureParams`** (interface)
  - `export interface ParsedSignatureParams`
  - Parsed signature parameters returned from verification. Components are always fully resolved ComponentIdentifier objects.
- **`SignatureAlgorithm`** (type)
  - `export type SignatureAlgorithm = \| "rsa-pss-sha512" \| "rsa-v1_5-sha256" \| "hmac-sha256" \| "ecdsa-p256-sha256" \| "ecdsa-p384-sha384" \| "ed25519"`
  - Algorithm identifiers per RFC 9421 section 3.3.
- **`SignatureParams`** (interface)
  - `export interface SignatureParams`
  - Signature parameters used when signing a message.
- **`signMessage`** (async function)
  - `export async function signMessage<T extends Request \| Response>( options: SignOptions<T>, ): Promise<T>`
  - Sign an HTTP message per RFC 9421.
- **`SignOptions`** (interface)
  - `export interface SignOptions< T extends Request \| Response = Request \| Response, > { message: T; params: SignatureParams; key: CryptoKey; request?: Request; } export interface VerifyOptions { maxAge?: number; requiredCo…`
  - Options for signMessage.
- **`Uint8Array_`** (re-export)
- **`verifyMessage`** (async function)
  - `export async function verifyMessage( message: Request \| Response, keyLookup: ( keyId: string, algorithm?: SignatureAlgorithm, ) => Promise<CryptoKey \| null> \| CryptoKey \| null, options?: VerifyOptions, ): Promise<Verify…`
  - Verify one or more signatures on an HTTP message per RFC 9421.
- **`VerifyOptions`** (interface)
  - `export interface VerifyOptions`
  - Options for verifyMessage.
- **`VerifyResult`** (interface)
  - `export interface VerifyResult`
  - Result of a successful signature verification.

## `$std/http/method`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-method`，在 $std 中以稳定名字 `http/method` 提供。

- **`Method`** (type)
  - `export type Method = typeof METHOD[keyof typeof METHOD]`
  - A HTTP Method
- **`METHOD`** (const)
  - `export const METHOD`
  - HTTP Methods derived from IANA Hypertext Transfer Protocol (HTTP) Method Registry

## `$std/http/negotiation`

- **`accepts`** (function)
  - `export function accepts(request: Pick<Request, "headers">): string[]`
  - Returns an array of media types accepted by the request, in order of preference. If there are no media types supplied in the request, then any media type selector will be returned.
- **`acceptsEncodings`** (function)
  - `export function acceptsEncodings(request: Pick<Request, "headers">): string[]`
  - Returns an array of content encodings accepted by the request, in order of preference. If there are no encoding supplied in the request, then ["*"] is returned, implying any encoding is accepted.
- **`acceptsLanguages`** (function)
  - `export function acceptsLanguages(request: Pick<Request, "headers">): string[]`
  - Returns an array of languages accepted by the request, in order of preference. If there are no languages supplied in the request, then ["*"] is returned, imply any language is accepted.

## `$std/http/problem-details`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-problem-details`，在 $std 中以稳定名字 `http/problem-details` 提供。

- **`createProblemDetailsResponse`** (function)
  - `export function createProblemDetailsResponse< T extends ProblemDetailsExtensions, >( problemDetails: ProblemDetails<T>, options?: ProblemDetailsResponseOptions, ): Response`
  - Creates a Response with an application/problem+json body from a ProblemDetails object.
- **`isProblemDetailsResponse`** (function)
  - `export function isProblemDetailsResponse(response: Response): boolean`
  - Type guard that checks whether a Response has an application/problem+json content type.
- **`parseProblemDetails`** (function)
  - `export function parseProblemDetails< T extends ProblemDetailsExtensions = Record<string, never>, >(input: unknown): ProblemDetails<T>`
  - Parses a plain JSON value into a ProblemDetails.
- **`parseProblemDetailsResponse`** (async function)
  - `export async function parseProblemDetailsResponse< T extends ProblemDetailsExtensions = Record<string, never>, >(input: Response): Promise<ProblemDetails<T>>`
  - Parses a Response body into a ProblemDetails.
- **`ProblemDetails`** (type)
  - `export type ProblemDetails< T extends ProblemDetailsExtensions = Record<string, never>, > = … }`
  - A Problem Details object as defined by RFC 9457.
- **`ProblemDetailsExtensions`** (type)
  - `export type ProblemDetailsExtensions = Omit< Record<string, unknown>, StandardProblemDetailsMember >`
  - Constraint for Problem Details extension members.
- **`ProblemDetailsResponseOptions`** (interface)
  - `export interface ProblemDetailsResponseOptions`
  - Options for createProblemDetailsResponse.
- **`StandardProblemDetailsMember`** (type)
  - `export type StandardProblemDetailsMember = \| "type" \| "status" \| "title" \| "detail" \| "instance"`
  - Keys of the five standard Problem Details members defined by RFC 9457. Used to prevent extension members from shadowing standard fields.

## `$std/http/route`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-route`，在 $std 中以稳定名字 `http/route` 提供。

- **`Handler`** (type)
  - `export type Handler = ( request: Request, params: URLPatternResult, info?: Deno.ServeHandlerInfo, ) => Response \| Promise<Response>; export interface Route { pattern: URLPattern; method?: string \| string[]; handler: Han…`
  - Request handler for Route.
- **`RequestHandler`** (type)
  - `export type RequestHandler = ( request: Request, info?: Deno.ServeHandlerInfo, ) => Response \| Promise<Response>; export type Handler = ( request: Request, params: URLPatternResult, info?: Deno.ServeHandlerInfo, ) => Re…`
  - A handler for HTTP requests.
- **`route`** (re-export)
- **`Route`** (interface)
  - `export interface Route`
  - Route configuration for route.
- **`routeLinear`** (function)
  - `export function routeLinear( routes: Route[], defaultHandler: RequestHandler, ): RequestHandler`
  - Routes requests to handlers using a linear scan over all routes.
- **`routeRadix`** (function)
  - `export function routeRadix( routes: Route[], defaultHandler: RequestHandler, ): RequestHandler`
  - Routes requests to different handlers based on the request path and method.

## `$std/http/server-sent-event-parse-stream`

- **`ServerSentEventParsedMessage`** (type)
  - `export type ServerSentEventParsedMessage = & Omit<ServerSentEventMessage, "id"> & … }`
  - A server-sent event message parsed from a stream.
- **`ServerSentEventParseStream`** (class)
  - `export class ServerSentEventParseStream extends TransformStream<Uint8Array, ServerSentEventParsedMessage>`
  - Transforms a byte stream of server-sent events into parsed message objects.
- **`ServerSentEventParseStreamOptions`** (interface)
  - `export interface ServerSentEventParseStreamOptions`
  - Options for ServerSentEventParseStream.

## `$std/http/server-sent-event-stream`

- **`ServerSentEventMessage`** (interface)
  - `export interface ServerSentEventMessage`
  - Represents a message in the Server-Sent Event (SSE) protocol.
- **`ServerSentEventStream`** (class)
  - `export class ServerSentEventStream extends TransformStream<ServerSentEventMessage, Uint8Array>`
  - Transforms server-sent message objects into strings for the client.

## `$std/http/signed-cookie`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-signed-cookie`，在 $std 中以稳定名字 `http/signed-cookie` 提供。

- **`parseSignedCookie`** (function)
  - `export function parseSignedCookie(signedCookie: string): string`
  - Parses a signed cookie to get its value.
- **`signCookie`** (async function)
  - `export async function signCookie( value: string, key: CryptoKey, ): Promise<string>`
  - Returns a promise with the signed cookie value from the given cryptographic key.
- **`verifySignedCookie`** (async function)
  - `export async function verifySignedCookie( signedCookie: string, key: CryptoKey, ): Promise<boolean>`
  - Returns a promise of a boolean indicating whether the signed cookie is valid.

## `$std/http/status`

- **`ClientErrorStatus`** (type)
  - `export type ClientErrorStatus = \| typeof STATUS_CODE.BadRequest \| typeof STATUS_CODE.Unauthorized \| typeof STATUS_CODE.PaymentRequired \| typeof STATUS_CODE.Forbidden \| typeof STATUS_CODE.NotFound \| typeof STATUS_CODE.Me…`
  - An HTTP status that is a client error (4XX).
- **`ErrorStatus`** (type)
  - `export type ErrorStatus = ClientErrorStatus \| ServerErrorStatus`
  - An HTTP status that is an error (4XX and 5XX).
- **`InformationalStatus`** (type)
  - `export type InformationalStatus = \| typeof STATUS_CODE.Continue \| typeof STATUS_CODE.SwitchingProtocols \| typeof STATUS_CODE.Processing \| typeof STATUS_CODE.EarlyHints`
  - An HTTP status that is a informational (1XX).
- **`isClientErrorStatus`** (function)
  - `export function isClientErrorStatus( status: number, ): status is ClientErrorStatus`
  - A type guard that determines if the status code is a client error.
- **`isErrorStatus`** (function)
  - `export function isErrorStatus(status: number): status is ErrorStatus`
  - A type guard that determines if the status code is an error.
- **`isInformationalStatus`** (function)
  - `export function isInformationalStatus( status: number, ): status is InformationalStatus`
  - A type guard that determines if the status code is informational.
- **`isRedirectStatus`** (function)
  - `export function isRedirectStatus(status: number): status is RedirectStatus`
  - A type guard that determines if the status code is a redirection.
- **`isServerErrorStatus`** (function)
  - `export function isServerErrorStatus( status: number, ): status is ServerErrorStatus`
  - A type guard that determines if the status code is a server error.
- **`isStatus`** (function)
  - `export function isStatus(status: number): status is StatusCode`
  - Returns whether the provided number is a valid HTTP status code.
- **`isSuccessfulStatus`** (function)
  - `export function isSuccessfulStatus( status: number, ): status is SuccessfulStatus`
  - A type guard that determines if the status code is successful.
- **`RedirectStatus`** (type)
  - `export type RedirectStatus = \| typeof STATUS_CODE.MultipleChoices \| typeof STATUS_CODE.MovedPermanently \| typeof STATUS_CODE.Found \| typeof STATUS_CODE.SeeOther \| typeof STATUS_CODE.UseProxy \| typeof STATUS_CODE.Tempora…`
  - An HTTP status that is a redirect (3XX).
- **`ServerErrorStatus`** (type)
  - `export type ServerErrorStatus = \| typeof STATUS_CODE.InternalServerError \| typeof STATUS_CODE.NotImplemented \| typeof STATUS_CODE.BadGateway \| typeof STATUS_CODE.ServiceUnavailable \| typeof STATUS_CODE.GatewayTimeout \|…`
  - An HTTP status that is a server error (5XX).
- **`STATUS_CODE`** (const)
  - `export const STATUS_CODE`
  - Contains the STATUS_CODE object which contains standard HTTP status codes and provides several type guards for handling status codes with type safety.
- **`STATUS_TEXT`** (const)
  - `export const STATUS_TEXT`
  - A record of all the status codes text.
- **`StatusCode`** (type)
  - `export type StatusCode = typeof STATUS_CODE[keyof typeof STATUS_CODE]`
  - An HTTP status code.
- **`StatusText`** (type)
  - `export type StatusText = typeof STATUS_TEXT[keyof typeof STATUS_TEXT]`
  - An HTTP status text.
- **`SuccessfulStatus`** (type)
  - `export type SuccessfulStatus = \| typeof STATUS_CODE.OK \| typeof STATUS_CODE.Created \| typeof STATUS_CODE.Accepted \| typeof STATUS_CODE.NonAuthoritativeInfo \| typeof STATUS_CODE.NoContent \| typeof STATUS_CODE.ResetConten…`
  - An HTTP status that is a success (2XX).

## `$std/http/structured-fields`

> ⚠️ 上游为不稳定模块 `@std/http/unstable-structured-fields`，在 $std 中以稳定名字 `http/structured-fields` 提供。

- **`BareItem`** (type)
  - `export type BareItem = \| … }`
  - A Bare Item value in a Structured Field.
- **`binary`** (function)
  - `export function binary( value: Uint8Array, ): Extract<BareItem, { type: "binary" }>`
  - Creates a binary Bare Item.
- **`boolean`** (function)
  - `export function boolean( value: boolean, ): Extract<BareItem, { type: "boolean" }>`
  - Creates a boolean Bare Item.
- **`date`** (function)
  - `export function date(value: Date): Extract<BareItem, { type: "date" }>`
  - Creates a date Bare Item.
- **`decimal`** (function)
  - `export function decimal(value: number): Extract<BareItem, { type: "decimal" }>`
  - Creates a decimal Bare Item.
- **`Dictionary`** (type)
  - `export type Dictionary = ReadonlyMap<string, Item \| InnerList>`
  - A Dictionary Structured Field value.
- **`displayString`** (function)
  - `export function displayString( value: string, ): Extract<BareItem, { type: "displaystring" }>`
  - Creates a display string Bare Item.
- **`innerList`** (function)
  - `export function innerList( items: Item[], parameters?: Iterable<[string, BareItem]>, ): InnerList`
  - Creates an Inner List from Items and optional Parameters.
- **`InnerList`** (interface)
  - `export interface InnerList`
  - An Inner List in a Structured Field.
- **`integer`** (function)
  - `export function integer(value: number): Extract<BareItem, { type: "integer" }>`
  - Creates an integer Bare Item.
- **`isInnerList`** (function)
  - `export function isInnerList( member: Item \| InnerList, ): member is InnerList`
  - Checks if a list member is an Inner List.
- **`isItem`** (function)
  - `export function isItem(member: Item \| InnerList): member is Item`
  - Checks if a list member is an Item (not an Inner List).
- **`item`** (function)
  - `export function item( value: BareItem, parameters?: Iterable<[string, BareItem]>, ): Item`
  - Creates an Item from a Bare Item and optional Parameters.
- **`Item`** (interface)
  - `export interface Item`
  - An Item in a Structured Field, consisting of a Bare Item and Parameters.
- **`List`** (type)
  - `export type List = Array<Item \| InnerList>`
  - A List Structured Field value.
- **`Parameters`** (type)
  - `export type Parameters = ReadonlyMap<string, BareItem>`
  - Parameters attached to an Item or Inner List.
- **`parseDictionary`** (function)
  - `export function parseDictionary(input: string): Dictionary`
  - Parses a Dictionary Structured Field value.
- **`parseItem`** (function)
  - `export function parseItem(input: string): Item`
  - Parses an Item Structured Field value.
- **`parseList`** (function)
  - `export function parseList(input: string): List`
  - Parses a List Structured Field value.
- **`serializeDictionary`** (function)
  - `export function serializeDictionary(dict: Dictionary): string`
  - Serializes a Dictionary to a string.
- **`serializeItem`** (function)
  - `export function serializeItem(value: Item): string`
  - Serializes an Item to a string.
- **`serializeList`** (function)
  - `export function serializeList(list: List): string`
  - Serializes a List to a string.
- **`string`** (function)
  - `export function string(value: string): Extract<BareItem, { type: "string" }>`
  - Creates a string Bare Item.
- **`token`** (function)
  - `export function token(value: string): Extract<BareItem, { type: "token" }>`
  - Creates a token Bare Item.

## `$std/http/user-agent`

- **`Browser`** (interface)
  - `export interface Browser`
  - The browser as described by a user agent string.
- **`Cpu`** (interface)
  - `export interface Cpu`
  - The CPU information as described by a user agent string.
- **`Device`** (interface)
  - `export interface Device`
  - The device as described by a user agent string.
- **`Engine`** (interface)
  - `export interface Engine`
  - The browser engine as described by a user agent string.
- **`Os`** (interface)
  - `export interface Os`
  - The OS as described by a user agent string.
- **`UserAgent`** (class)
  - `export class UserAgent`
  - A representation of user agent string, which can be used to determine environmental information represented by the string. All properties are determined lazily.
