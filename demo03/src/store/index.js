import { createStore } from 'redux';
import reducer from './reducer';
//第二个参数是使用redux devtools调试使用
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;