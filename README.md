# @9wp/std

[![JSR](https://jsr.io/badges/@g9wp/std)](https://jsr.io/@g9wp/std)
[![GitHub](https://img.shields.io/github/license/g9wp/std)](https://github.com/g9wp/std/blob/main/LICENSE)

`jsr:@std/*` 的整合包


* @std/async/delay => @g9wp/std/async/delay
* @std/http => @g9wp/std/http
* ...

# 安装
```bash
deno add jsr:@9wp/std
```

推荐创建别名 `$std`

deno.json:
```deno.json
{
  "imports": {
    "$std": "jsr:@9wp/std@^0.1.0"
  }
}
```
