import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';//使用中间件
import reducer from './reducer';
//参数是使用redux devtools调试使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const store = createStore(
    reducer,
    enhancer
);
export default store;