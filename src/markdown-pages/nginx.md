---
path: '/nginx-1'
date: '2020-10-07'
tags: ['nginx', 'docker', Laradock']
status: 'published'
title: 'Laradock利用、localhostで"このサイトにアクセスできません"と表示される。'
description: 'nginx: [emerg] "root" directive is duplicate. #memo "root" ディレクティブが重複しています。'
---
## エラー履歴 <span style="font-size:.5em; opacity:.6;">Error Log</span>

```log
nginx: [emerg] "root" directive is duplicate.
#memo "root" ディレクティブが重複しています。
```

## エラー詳細 <span style="font-size:.5em; opacity:.6;">Error Details</span>

ブラウザでlocalhostに接続すると以下のエラーが表示される。

```text
このサイトにアクセスできません。localhost で接続が拒否されました。
次をお試しください

接続を確認する
プロキシとファイアウォールを確認する
ERR_CONNECTION_REFUSED
```

'404 not found'では無く、'ERR_CONNECTION_REFUSED'が表示される。

## 解決方法 <span style="font-size:.5em; opacity:.6;">Solution</span>

結論としては、Laradock内のnginxで .confの設定を間違えていた。  
dockerの確認も含めて、解決に辿り着くまでの手順を記録。

<https://qiita.com/You_name_is_YU/items/71f3ec51a19a2361519b>

### プロセスの確認

```docker
$ docker-compose ps
       Name                     Command              State          Ports       
--------------------------------------------------------------------------------
php-docker_app_1     docker-php-entrypoint php-fpm   Up       9000/tcp          
php-docker_mysql_1   docker-entrypoint.sh mysqld     Up                     
php-docker_web_1     nginx -g daemon off;            Exit 1   0.0.0.0:80->80/tcp
```

```docker
$ docker-compose logs
```

エラー箇所確認