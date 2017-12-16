# Vue + typescript + webpack + jest配置

## 目的
1. vs code中可以用typescript的编辑能力
1. 可以直接测试component,测试快
1. 可以用webpack的alias等方式，方便从测试代码中引用文件

## Setup
** 入口必须是ts文件 **
### node packages
1. jest
1. runtime
1. webpack
### config
#### [.babelrc](./files/.babelrc)
####  [tsconfig.json](./files/tsconfig.json)
要点
1.  要把target设置成es6，因为需要用babel来处理一下，解决commonjs和es6 module的问题
1.  要把module设置成es6，用babel来处理导入
#### [vue.conf.js](./files/vue.conf.js)
如果使用browserify，则需要这个，重点是把ts代码用typescript处理后，再babel一下(从vue-jest中学到的)
#### [jest.conf.js](./files/jest.conf.js)
