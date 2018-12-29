import React, { Component } from 'react';
import store from './store';  //引入store中的index.js
import TodoListUI from './TodoListUI';
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from "./store/actionCreators";//改进action
//import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType'; //引入常量
require('./mock/mock');//引入假数据
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();//获取redux中的数据
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);//订阅store,store数据改变就会执行里面的方法
    }
    render() {
        return (
          <TodoListUI
              inputValue={this.state.inputValue}
              handleInputChange={this.handleInputChange}
              handleButtonClick={this.handleButtonClick}
              list={this.state.list}
              handleItemClick={this.handleItemClick}
          />
        )
    }
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
    handleInputChange(e) {//改变inputValue值
        //封装来
        const action = getInputChangeAction(e.target.value);
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        store.dispatch(action);//将action分发给store
        //console.log(e.target.value)
    }
    handleStoreChange() {//获取state中的数据
        this.setState(store.getState());
    }
    handleButtonClick() { //提交显示在列表中
        const action = getAddItemAction();
        // const action = {
        //     type: ADD_TODO_ITEM,
        // }
        store.dispatch(action);
    }
    handleItemClick(index) {//点击此项进行删除
        //console.log(index)
        const action = getDeleteItemAction(index);
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        store.dispatch(action);
    }
}
export default TodoList;