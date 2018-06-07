# web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 初次使用Vue 脱坑指南
## 1. 打包编译后，打不开？
—— 原因是：默认使用绝对路径，应该修改为 相对路径。
## 2. 创建组件以后，直接使用，但只有本地 npm run dev 或者 修改几个字符运行的时候，会出现。其他时候 都无法显示?
—— 原因是：经过排查，原来是创建的组件必须 在 new Vue() 之前注册，不能放到之后。
## 3. 新建组件以后，页面瞬间无法使用正常显示？
—— 原因是：不能在 我们自己的 .vue 文件中 注册组件，只能在 main.js 里面注册组件。
