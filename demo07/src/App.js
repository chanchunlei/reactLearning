import React, { Component } from 'react';
import { Provider } from 'react-redux';//所有子组件都能使用store
import { BrowserRouter, Route } from 'react-router-dom';//使用路由
import { GlobalStyle } from './style.js';//公共css
import { GlobalIcon } from './statics/iconfont/iconfont.js';//公用icon
import Home from './pages/home';//引入组件
import Detail from './pages/detail';//同上
import store from './store'
import Header from './common/header';
require('./mock/mock');//引入假数据
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <GlobalStyle/>
          <GlobalIcon/>
          <div>
              <Header/>
              <BrowserRouter>
                  <div>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/detail' exact component={Detail}></Route>
                  </div>
              </BrowserRouter>
          </div>

      </Provider>
    );
  }
}

export default App;
