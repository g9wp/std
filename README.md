# @9wp/std

[![JSR](https://jsr.io/badges/@g9wp/std)](https://jsr.io/@g9wp/std)
[![GitHub](https://img.shields.io/github/license/g9wp/std)](https://github.com/g9wp/std/blob/main/LICENSE)

A consolidated package of `jsr:@std/*`, including some unstable modules.

| Original Standard Library | Export Path |
| :--- | :--- |
| @std/async/delay | @g9wp/std/async/delay |
| @std/async/unstable-channel | @g9wp/std/async/channel |
| @std/http | @g9wp/std/http |
| ... | ... |

# Installation
```bash
deno add jsr:@9wp/std
```

It is recommended to create a `$std` alias.

deno.json:
```deno.json
{
  "imports": {
    "$std": "jsr:@9wp/std@^0.1.0"
  }
}
```
