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

### 1.4 虚拟dom

第一种：

1. state 数据
2. jsx 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM

缺陷：

第一次生成了一个完整的DOM片段

第二次生成了一个完整的DOM片段

第二次的DOM替换第一次的DOM，非常耗性能。

第二种改进：

1. state 数据
2. jsx 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
6. 新的DOM（DocumentFragment）和原始的DOM做对比，找差异
7. 找出input框发生了变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

缺陷：性能的提升并不明显

第三种方案：

1. state 数据
2. jsx 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）
5. state发生变化
6. 生成新的虚拟DOM
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别直接操作这个DOM改变其中的内容（极大的提升性能）

### 2 生命周期

#### 2.1 Initialization

页面初始化

setup props and state

#### 2.2 Mounting

1.  componentWillMount

在组件即将被挂载到页面的时候自动执行（执行一次）；

2. render
3. componentDidMount

组件被挂载到页面之后，自动被执行（执行一次）；

#### 2.3 Updation(组件的更新)

##### 2.3.1 states

1. shouldComponentUpdate

组件更新前，他会自动被执行；返回true或者false；

2. componentWillUpdate

如果shouldComponentUpdate返回的true，这个函数就会执行，false则不执行；

3. render

4. componentDidUpdate

组件更新完成之后，他会被执行；

##### 2.3.2 props

1. componentWillReceiveProps

一个组件从父组件接收参数， 只要父组件的render函数被执行了，子组件的这个生命周期函数就被执行；如果这组件第一次存在于父组件中，不会执行；如果这个组件之前已经存在于父组件中，才会执行。

2. shouldComponentUpdate

3. componentWillUpdate

4. render

5. componentDidUpdate

#### 2.4 Unmounting

componentWillUnmount

当这个组件即将被从页面中剔除时，他会被执行