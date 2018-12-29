import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';
//Provider下面的组件都有能力来获取store中的内容了
//import * as serviceWorker from './serviceWorker';
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
