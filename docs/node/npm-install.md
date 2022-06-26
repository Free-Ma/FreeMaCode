# 拉取代码后执行 npm install 报错

## 问题

从仓库拉取代码后执行 `npm install` 报错

```sh
npm ERR! code 1
npm ERR! path D:\code\front-end\vue-music\node_modules\node-sass
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c node-gyp rebuild
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@7.1.2
npm ERR! gyp info using node@16.14.0 | win32 | x64
npm ERR! gyp info find Python using Python version 3.10.3 found at "C:\Users\admin\AppData\Local\Programs\Python\Python310\python.exe"
npm ERR! gyp http GET https://nodejs.org/download/release/v16.14.0/node-v16.14.0-headers.tar.gz
npm ERR! gyp WARN install got an error, rolling back install
npm ERR! gyp ERR! configure error
npm ERR! gyp ERR! stack Error: connect ETIMEDOUT 104.20.23.46:443
npm ERR! gyp ERR! stack     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1157:16)
npm ERR! gyp ERR! System Windows_NT 10.0.19044
npm ERR! gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\code\\front-end\\vue-music\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild"
npm ERR! gyp ERR! cwd D:\code\front-end\vue-music\node_modules\node-sass
npm ERR! gyp ERR! node -v v16.14.0
npm ERR! gyp ERR! node-gyp -v v7.1.2
npm ERR! gyp ERR! not ok

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\admin\AppData\Local\npm-cache\_logs\2022-03-29T07_32_19_747Z-debug-0.log
```

## 解决

原因是 `npm` 版本不对应

使用 `nvm` 指定 `node` 和 `npm` 版本;或者使用 `yarn` 作为包管理器

::: tip
删除 `package-lock.json` 文件

如果有 `node_modules` 文件夹，也要删除

重新使用 `yarn` 下载 `package.json` 中的依赖包
:::
