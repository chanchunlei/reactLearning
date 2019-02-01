## react入门开始

### 1 基础

#### 1.1 环境安装

- nodejs,yarn(可不安装)这两个都是去官网下载安装包；
- create-react-app(官方推荐),使用：npm install -g create-react-app;
- 创建项目：create-react-app [file name]
- 有yarn使用yarn start运行，没有则是npm start。

#### 1.2 react常用文件

1. src文件下的index.js是整个项目的入口文件；
2. app.js加载组件等；
3. PWA缓存；
4. 组件开头字母必须为大写；

#### 1.3 组件

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

#### 1.4 虚拟dom

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

#### 1.5 无状态组件与有状态组件

**无状态组件：**无状态组件(Stateless Component)是最基础的组件形式，由于没有状态的影响所以就是纯静态展示的作用。一般来说，各种UI库里也是最开始会开发的组件类别。如按钮、标签、输入框等。它的基本组成结构就是属性（`props`）加上一个渲染函数（`render`）。由于不涉及到状态的更新，所以这种组件的复用性也最强。

**有状态组件：**在无状态组件的基础上，如果组件内部包含状态（`state`）且状态随着事件或者外部的消息而发生改变的时候，这就构成了有状态组件（Stateful Component）。有状态组件通常会带有生命周期(lifecycle)，用以在不同的时刻触发状态的更新。这种组件也是通常在写业务逻辑中最经常使用到的，根据不同的业务场景组件的状态数量以及生命周期机制也不尽相同。

而在React中，我们通常通过`props`和`state`来处理两种类型的数据。`props`是只读的，只能由父组件设置。`state`在组件内定义，在组件的生命周期中可以更改。基本上，无状态组件（也称为哑组件）使用`props`来存储数据，而有状态组件（也称为智能组件）使用`state`来存储数据。

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

### 3 react中使用第三方模块实现动画效果

github搜索react-transition-group，安装

yarn add react-transition-group

引入动画组件和多个动画组件

```
import { CSSTransition, TransitionGroup } from 'react-transition-group'
```

组件淡入`appear`，进场`enter`,出场`exit`时，CSSTransition组件应用了一系列className名来对这些动作进行描述。首先`appear`被应用到组件className上，接着添加“active”类名来激活CSS动画。在动画完成后，原class改变为`done`表明组件动画已经应用完成并加载完成。

当组件的`in`属性变为true时，组件的className将被赋值为`example-enter`，并在下一刻添加`example-enter-active`的CSS class名。这些都是基于`className`属性的约定。即：原组件带有`className="animate-rotate"`，则enter状态时，变为`"animate-rotate-enter"`。

##### 属性

##### `in`

```
控制组件应用动画的属性值，通常将一个react的组件`state`赋值给它，通过改变`state`，从而开启和关闭动画
```

##### `classNames`|`type:string`

```
classNames[注意带s]属性用于当组件被应用动画时，不同的动画状态（enter,exits,done）将作为className属性的后缀来拼接为新的className，如： 
className="fade"会被应用为fade-enter,fade-enter-active,fade-enter-done,fade-exit,fade-exite-active,fade-exit-done, fade-appear以及fade-appear-active.每一个独立的className都对应着单独的状态，如：
```

```javascript
classNames={{
     appear: 'my-appear',
     appearActive: 'my-active-appear',
     enter: 'my-enter',
     enterActive: 'my-active-enter',
     enterDone: 'my-done-enter,
     exit: 'my-exit',
     exitActive: 'my-active-exit',
     exitDone: 'my-done-exit,
}}
```

##### 钩子函数

##### `onEnter`

```
<Transition>组件的回调函数，当组件enter或appear时会立即调用。
```

##### `onEntering`

```
也是一个过渡组件的回调函数，当组件enter-active或appear-active时，立即调用此函数
```

##### `onEntered`

```
同样是回调函数，当组件的enter,appearclassName被移除时，意即调用此函数
```

##### `onExit`

```
当组件应用exit类名时，调用此函数
```

##### `onExiting`

```
当组件应用exit-active类名时，调用此函数
```

##### `onExited`

```
当组件`exit`类名被移除，且添加了`exit-done`类名时，调用此函数
```

##### 实例：

```jsx
<TransitionGroup>
    {
        this.state.list.map((item,index)=>{
            return (
                <CSSTransition
                    timeout={1000}
                    unmountOnExit
                    classNames='fade'
                    onEntered={(el) => {el.style.color="blue"}}
                    appear={true}
                    key={index}
                    >
                    <div>{item}</div>
                </CSSTransition>
            )
        })
    }
</TransitionGroup>
```

```css
.fade-enter, .fade-appear{
    opacity: 0;
}
.fade-enter-active, .fade-appear-active{
    opacity: 1;
    transition: opacity 1s ease-in;
}
.fade-enter-done{
    opacity: 1;
}
.fade-exit{
    opacity: 1;
}
.fade-exit-active{
    opacity: 0;
    transition: opacity 1s ease-in;
}
.fade-exit-done{
    opacity: 0;
}
```

### 4 引入redux

第一步：

```
npm install --save redux
   or
yarn add redux
```

第二步：

```
npm install --save react-redux
      or
yarn add react-redux
```

开发建议翻墙在google浏览器中下载redux-devtools插件进行调试。

使用redux,应用中所有的state都以一个对象树的形式储存在一个单一的store中，改变state的唯一方式就是触发action。描述action如何改变state树，需要编写reducers。当action的方法很多时，建议编写actionTypes存入常量，方便调试。同时触发action需要改变state时，可以将这些方法封装入actionCreatros中，使用时引入此文件对应需要的模块，并进行dispatch。

#### store

```javascript
import { createStore } from 'redux';//引入需要的模块
import reducer from './reducer';
//第二个参数是使用redux devtools调试使用
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
```

#### reducer

```javascript
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType';
const defaultState = {
    inputValue: '',
    list: []
};  //state中的默认数据
//reducer可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {
    //console.log(state, action);
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}
```

#### actionTypes

```javascript
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
```

#### actionCreators

```javascript
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
// export const
```

- #### redux进阶使用

  - 在一个项目中数据会非常的繁杂，我们一般建议将数据存入store中，结合reducer、actionCreators、actionTypes来进行管理。如果项目足够大，不可能将所有数据都存入一个store中，所以我们按照组件对应的去创建store；主入口的store如同图书馆，有各个书库的reducer(图书馆管理员)进行管理，最后汇总到主入口的reducer去。

  主reducer实例：

  ```javascript
  import { combineReducers } from 'redux';
  import { reducer as headerReducer } from '../common/header/store';
  const reducer = combineReducers({
      header: headerReducer
  });
  export default reducer;
  
  ```

  需要使用redux中的combineReducers这个模块。

  - 全局使用

  我们通过react-redux提供的顶层组件Provider传入store然后把要展示的ControlPanel写入顶层组件就行了，      Provider提供了整个全局的store供所有的子组件进行调用。

  ```javascript
  <Provider store = {store}>
      <团长/>
  <Provider>
  ```



  - connect ：连接数据处理组件和内部UI组件；

    ```javascript
    import { connect } from 'react-redux';
    ...
    const mapStateToProps = (state) => {
        return {
            focused: state.header.get('focused')
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            handleInputFocus() {
                dispatch(actionCreators.searchFocus());
            },
            handleInputBlur() {
                dispatch(actionCreators.serchBlur());
            }
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Header);
    ```


### 5 使用中间件

#### redux-thunk

安装：

```
yarn add redux-thunk
```

修改store中的配置，并引入redux-thunk

```javascript
import { createStore, applyMiddleware, compose } from 'redux';//引入所需要的模块
import thunk from 'redux-thunk';//使用中间件
import reducer from './reducer';
//参数是使用redux devtools调试使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),//使用thunk
    // other store enhancers if any
);
const store = createStore(
    reducer,
    enhancer
);
export default store;
```

此时就可以使用中间件了，将中间件getTodoList方法封装入actionCreators中：

```javascript
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionType'
import axios from "axios/index";
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (resList) => ({
    type: INIT_LIST_ACTION,
    resList
})
//请求数据的中间件
//使用了redux-thunk
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/data',{
            headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then((res) => {
            //console.log(res.data.list)
            const action = initListAction(res.data.list);
            dispatch(action);
        })
        .catch((run) => {
            console.log(run)
        })
    }
}
```

使用实例：

```javascript
 componentDidMount(){//挂载前生命周期
        const action = getTodoList();//使用中间件
        store.dispatch(action);
        // axios.get('/data')
        // .then((res) => { //不使用中间件方式
        //     const action = initListAction(res.data.list);
        //     store.dispatch(action);
        // })
        // .catch((run) => {
        //     console.log(run)
        // })
    }
```

#### redux-saga

安装：

```
yarn add redux-saga
```

在store中引入：

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; //使用saga中间件
import todoSagas from './sagas';//中间件文件,封装异步
import reducer from './reducer';
//参数是使用redux devtools调试使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();//引入saga的模块
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);//跑起这个文件
export default store;
```

sagas.js封装起异步

```javascript
import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionType';
import { initListAction } from './actionCreators';
import axios from "axios/index";
//generator函数
function* getInitList() {
    try{//监听状态
        const res = yield axios.get('/data');
        const action = initListAction(res.data.list);
        yield put(action);
    }catch (e) {
        console.log(e)
    }
}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;
```

在组件中的使用同thunk一样：

```javascript
componentDidMount(){//挂载前生命周期
        //下面使用saga
        const action = getInitList();
        store.dispatch(action);
        //下面使用thunk
        // const action = getTodoList();
        // store.dispatch(action);
        //下面不使用中间件
        // axios.get('/data')
        // .then((res) => {
        //     //console.log(res.data.list)
        //     const action = initListAction(res.data.list);
        //     store.dispatch(action);
        // })
        // .catch((run) => {
        //     console.log(run)
        // })
    }
```

### 6 CSS模块styled-components

安装

```
yarn add styled-components
```

### 7 react中使用路由

安装

```
yarn add react-router-dom
```

#### HashRouter和BrowserRouter

它们两个是路由的基本，就像盖房子必须有地基一样，我们需要将它们包裹在最外层，我们只要选择其一就可以了。现在讲它们的不同：

##### HashRouter

如果你使用过react-router2或3或者vue-router，你经常会发现一个现象就是url中会有个#，例如localhost:3000/#，HashRouter就会出现这种情况，它是通过hash值来对路由进行控制。如果你使用HashRouter，你的路由就会默认有这个#。

##### BrowserRouter

很多情况下我们则不是这种情况，我们不需要这个#，因为它看起来很怪，这时我们就需要用到BrowserRouter。它的原理是使用HTML5 history API (pushState, replaceState, popState)来使你的内容随着url动态改变的， 如果是个强迫症或者项目需要就选择BrowserRouter吧。下面我们将主要结合它来讲解。这里讲一个它们的基础api，basename。如果你的文件放在服务器的二级目录下则可以使用它。当你的主页前面是有一级目录calendar时，同样会显示主页的内容。它常常配合Link使用。

#### Route

Route是路由的一个原材料，它是控制路径对应显示的组件。我们经常用的是exact、path以及component属性。exact控制匹配到/路径时不会再继续向下匹配，path标识路由的路径，component表示路径对应显示的组件。后面我们将结合NavLink完成一个很基本的路由使用。同时我们可以设置例如/second/:id的方式来控制页面的显示，这需要配合Link或者NavLink配合使用。

#### Link和NavLink的选择

两者都是可以控制路由跳转的，不同点是NavLink的api更多，更加满足你的需求。Link主要api是to，to可以接受string或者一个object，来控制url。NavLink它可以为当前选中的路由设置类名、样式以及回调函数等。exact用于严格匹配，匹配到/则不会继续向下匹配，to则是控制跳转的路径，activeClassName是选中状态的类名，我们可以为其添加样式。

#### match

match是在使用router之后被放入props中的一个属性，在class创建的组件中我们需要通过this.props.match来获取match之中的信息。match中包含的信息如下。

#### Switch

Switch常常会用来包裹Route，它里面不能放其他元素，用来只显示一个路由。

#### withRouter

目的就是让被修饰的组件可以从属性中获取history,location,match；路由组件可以直接获取这些属性，而非路由组件就必须通过withRouter修饰后才能获取这些属性了。

#### 小问题：

路由中activeClassName不生效：activeClassName 无效是因为导航组件未被激活，也就是该组件的路由并未被刷新，很有可能题者公用导航，导航组件并未路由，写死固定在哪里。点击导航时，只是在切换body中的路由，导航组件未被更新，activeClassName是根据导航组件所在的路由去改变的。解决方法就是使用withRouter并确保是最外层：

```
import { Link, NavLink, withRouter } from 'react-router-dom';
...
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
```

此时即可获取到history,location,match属性了。

### 8 性能提升

项目中组件繁多，当这个组件并没有数据刷新的时候就不运行这个组件中的render；这是就如下改

```
import React, { Component } from 'react';
 改成
import React, { PureComponent } from 'react';
 同时下面那个使用Component的地方也改成PureComponent;
```

可以减少组件的比对来提升性能。

### 9 组件懒加载(异步加载)

安装react-loadable模块：

```
yarn add react-loadable
```

