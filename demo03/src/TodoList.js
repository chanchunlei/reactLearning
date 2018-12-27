import React, { Component } from 'react';
import 'antd/dist/antd.css'; //引入antd的样式文件
import { Input, Button, List } from 'antd';
import store from './store';  //引入store中的index.js
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from "./store/actionCreators";//改进action
//import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType'; //引入常量
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();//获取redux中的数据
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        //this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);//订阅store,store数据改变就会执行里面的方法
    }
    render() {
        return (
            <div style={{marginTop: 10,marginLeft: '10px'}}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder='todo info'
                        style={{width: '300px', marginRight: 10}}
                        onChange={this.handleInputChange}/>
                    <Button onClick={this.handleButtonClick} type="primary">提交</Button>
                </div>
                <List
                    style={{width: 300,marginTop: '10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>)}
                />
            </div>

        )
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
        const action = getDeleteItemAction(index);
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        store.dispatch(action);
    }
}
export default TodoList;