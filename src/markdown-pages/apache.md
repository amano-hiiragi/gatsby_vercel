---
path: '/apache-1'
date: '2020-10-31'
tags: ['MAMP', 'php', 'apache']
status: 'published'
title: 'スクリプト実行時のエラー各種とphp.iniの設定について'
description: 'MAMP環境にて、phpスクリプト実行時のエラー各種とphp.iniの設定について。'
---
## エラー履歴 <span style="font-size:.5em; opacity:.6;">Error Log</span>

```log
1.
[31-Oct-2020 21:26:56 Asia/Tokyo] PHP Fatal error:  Allowed memory size of 536870912 bytes exhausted (tried to allocate 20480 bytes) in /Applications/MAMP/htdocs/ec-cube3-3.0/src/Eccube/Log/Monolog/Processor/IntrospectionProcessor.php on line 44
~~~略~~~
2.
[31-Oct-2020 21:31:07 Asia/Tokyo] PHP Fatal error:  Maximum execution time of 30 seconds exceeded in /Applications/MAMP/htdocs/ec-cube3-3.0/vendor/doctrine/dbal/lib/Doctrine/DBAL/Driver/PDOStatement.php on line 105
~~~略~~~
3.
[31-Oct-2020 21:39:35 Asia/Tokyo] PHP Fatal error:  Maximum execution time of 0 seconds exceeded in /Applications/MAMP/htdocs/ec-cube3-3.0/vendor/doctrine/dbal/lib/Doctrine/DBAL/Driver/PDOStatement.php on line 105
```

## エラー詳細 <span style="font-size:.5em; opacity:.6;">Error Details</span>

メモリー上限・実行時間がphpの設定値を超えていた。

## 解決方法 <span style="font-size:.5em; opacity:.6;">Solution</span>

1から順番に、

### 1. PHP Fatal error:  Allowed memory size of XXXX bytes exhausted (tried to allocate XXXX bytes)

```log
1.
[31-Oct-2020 21:26:56 Asia/Tokyo] PHP Fatal error:  Allowed memory size of 536870912 bytes exhausted (tried to allocate 20480 bytes) in /Applications/MAMP/htdocs/ec-cube3-3.0/src/Eccube/Log/Monolog/Processor/IntrospectionProcessor.php on line 44
```

*PHP Fatal error:  Allowed memory size of 536870912 bytes exhausted (tried to allocate 20480 bytes)*  
PHPの致命的なエラー。 許可されたメモリサイズ 536870912 バイトを使い果たしました。 (20480 バイトを割り当てようとしました。)

php.iniに以下の設定変更を行う。

```php.ini
: メモリーの上限を512Mに
memory_limit = 512M

: メモリ-の上限を無制限に
memory_limit = -1
```

### 2. PHP Fatal error:  Maximum execution time of 30 seconds exceeded

```log
2.
[31-Oct-2020 21:31:07 Asia/Tokyo] PHP Fatal error:  Maximum execution time of 30 seconds exceeded in /Applications/MAMP/htdocs/ec-cube3-3.0/vendor/doctrine/dbal/lib/Doctrine/DBAL/Driver/PDOStatement.php on line 105
```

*PHP Fatal error:  Maximum execution time of 30 seconds exceeded*  
PHP 致命的なエラー。 最大実行時間30秒を超えた。

php.iniに以下の設定変更を行う。

```php.ini
: タイムアウトを60秒に
max_execution_time = 60;

: タイムアウトを無制限に
max_execution_time = 0;
```

```log
3.
[31-Oct-2020 21:39:35 Asia/Tokyo] PHP Fatal error:  Maximum execution time of 0 seconds exceeded in /Applications/MAMP/htdocs/ec-cube3-3.0/vendor/doctrine/dbal/lib/Doctrine/DBAL/Driver/PDOStatement.php on line 105
```

### 3. PHP Fatal error:  Maximum execution time of 0 seconds exceeded

*PHP Fatal error:  Maximum execution time of 30 seconds exceeded*  
PHP 致命的なエラー。 最大実行時間0秒を超えた。

今回は実行処理の都合で'max_input_time'の変更も必要。

```php.ini
: タイムアウトを無制限に
max_input_time = 0

```
