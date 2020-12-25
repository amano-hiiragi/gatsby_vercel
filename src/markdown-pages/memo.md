---
path: '/work_log-1'
date: '2020-12-07'
tags: ['mac', 'bash', 'zsh', 'ffmpeg']
status: 'published'
title: 'ffmpeg h.264からmp4への変換'
description: 'mac環境にて、ffmpeg利用 h.264からmp4への変換について。'
---

## Orverview<span style="font-size:.5em; opacity:.6;">概要</span

```zsh
ffmpeg -i 画面収録\ 2020-12-07\ 18.25.06.mov -movflags faststart -vcodec libx264 -acodec aac -strict experimental test.mp4
```