## nvm

Windows 下载 [nvm](https://github.com/coreybutler/nvm-windows/releases)，安装好之后切换镜像源

```sh
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

列出远程服务器上所有的可用版本
然后安装你需要的版本，并使用将要使用的版本

```sh
nvm list available
nvm install 14.x.x
nvm use 14.x.x
node -v
npm -v
```

## npm

除了使用 `nvm` 之外，也可以去 [node官网](http://nodejs.cn/) 下载 node

设置源和查看源

```sh
# 修改国内源
npm config set registry https://registry.npmmirror.com

npm config get registry

# 还原
npm config set registry https://registry.npmjs.org
```

查看指定包远程库最新版本

```sh
npm view vue version
```

## yarn

除了使用 `nvm` 之外，也可以去 [node官网](http://nodejs.cn/) 下载 node

```sh
corepack enable
```

升级到最新版，也可以不升级

```sh
yarn set version stable
```
:::tip
使用上面两个命令，前提是 `node` 版本不低于 16
:::

设置镜像源, 并查看镜像源

```sh
yarn config set registry https://registry.npmmirror.com/

yarn config get registry
```
