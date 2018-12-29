import { createStore, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';//使用thunk中间件
import createSagaMiddleware from 'redux-saga'; //使用saga中间件
import todoSagas from './sagas';//中间件文件,封装异步
import reducer from './reducer';
//参数是使用redux devtools调试使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();//引入saga的模块
const enhancer = composeEnhancers(
    //applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);
export default store;