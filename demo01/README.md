## 一、react入门开始

### 1.1 环境安装

- nodejs,yarn(可不安装)这两个都是去官网下载安装包；
- create-react-app(官方推荐),使用：npm install -g create-react-app;
- 创建项目：create-react-app [file name]
- 有yarn使用yarn start运行，没有则是npm start。

### 1.2 react常用文件

1. src文件下的index.js是整个项目的入口文件；
2. app.js加载组件等；
3. PWA缓存；
4. 组件开头字母必须为大写；

### 1.3 组件

- import React, { Component, Fragment} from 'react';  其中Fragment是包括render中的内容取消占位符；

- jsx语法细节

  ```
   {/*注释是这样写的*/}
   {
   //这样写也行
   }
   识别html标签用下面属性
   dangerouslySetInnerHTML={{__html:item}}
  ```

- this.props.xxx接受父组件传递的值，对象，方法等；

