import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';//公共css
import { GlobalIcon } from './statics/iconfont/iconfont.js';//公用icon
import store from './store'
import Header from './common/header';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <GlobalStyle/>
          <GlobalIcon/>
          <Header/>
      </Provider>
    );
  }
}

export default App;
