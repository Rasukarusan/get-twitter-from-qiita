get-twitter-from-qiita
====

Qiitaの組織ページから、組織に属するメンバーのTwitterアカウントURLを取得する。

## Demo

```sh
$ node main.js https://qiita.com/organizations/{organization_name}
https://twitter.com/hogehogeman
https://twitter.com/fooofoo
https://twitter.com/fizfizzz
...
```

## Requirement

- node
- npm

## Install
```sh
$ git clone https://github.com/Rasukarusan/get-twitter-from-qiita.git
$ cd get-twitter-from-qiita
$ npm install
```

## Usage

```sh
# get organization_name from https://qiita.com/organizations
$ node main.js https://qiita.com/organizations/{organization_name}
```
