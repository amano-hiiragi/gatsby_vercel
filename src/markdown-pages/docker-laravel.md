---
path: '/docker-laravel_1'
date: '2021-01-20'
tags: ['docker', 'laravel']
status: 'published'
title: 'Third level nested unordered list items render as second level'
description: 'GatsbyJSにてMarkdown内リストの段落,3段目が崩れる。Third level nested unordered list items render as second level.'
---

<!-- TOC -->

- [Orverview](#orverview)
  - [必要パッケージ等](#必要パッケージ等)
  - [Topページ以外 404 error](#topページ以外-404-error)
  - [container is marked for removal and cannot be started](#container-is-marked-for-removal-and-cannot-be-started)

<!-- /TOC -->

## Orverview

### 必要パッケージ等

```bash
E: Package 'mysql-client' has no installation candidate
```

```bash
configure: error: Please reinstall the libzip distribution
```

参考URL  
<https://qiita.com/aseanchild1400/items/d3580366054fee3d2703>  
<https://qiita.com/nayuta_1999/items/e39af6d4b9faa786b0ab>  

### Topページ以外 404 error

参考URL
<https://stackoverflow.com/questions/22757749/laravel-redirects-to-a-route-but-then-apache-gives-404-error>

rewrite module必須、URL参考に許可設定を行う。

参考URL
<https://support.circleci.com/hc/ja/articles/360000331467-Docker-%E3%81%AB-PDO-MySQL-%E3%81%8C%E5%AD%98%E5%9C%A8%E3%81%97%E3%81%AA%E3%81%84>

```log
could not find driver
```

### container is marked for removal and cannot be started

参考URL
<https://meta.discourse.org/t/how-to-fix-container-is-marked-for-removal-and-cannot-be-started-without-reboot/136301/2>