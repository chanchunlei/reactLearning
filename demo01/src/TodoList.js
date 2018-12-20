// TodoList.js
import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		};
		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
	}
	render() {
		return (
			<Fragment>
			  <div>
			    {/*注释是这样写的*/}
			    {
			    	//这样写也行
			    }
			    <label htmlFor="inp">输入内容</label>
      		<input 
      		  className='inp'
      		  id='inp'
      			value={this.state.inputValue} 
            onChange={this.handleInputChange}
      		/>
      		<button onClick={this.handleBtnClick}>提交</button>
      	</div>
      	<ul>
      	  { this.getTodoItem() }
    	  </ul>
			</Fragment>  	
		)
	}
  getTodoItem(){
    return this.state.list.map((item,index)=>{
  		return (
  			<div key={index}>
  				<TodoItem 
  				content={item}

  				index={index} 
  				deleteItem={this.handleDeleteItem}/>
    	  	{/*
    	  		<li 
	  			  key={index} 
	  			  onClick={this.handleDeleteItem.bind(this, index)}
	  			  dangerouslySetInnerHTML={{__html:item}}></li>
    	  	*/}
  	  	</div>
  			)
  	  })
  }
	handleInputChange(e){ //获取input值
		// this.state.inputValue = e.target.value;
		 //console.log(e.target.value);
		const value = e.target.value;
		this.setState(() => ({
			inputValue: value
		}))
	}
	handleBtnClick(){  //提交加入
		this.setState((prevState) => ({
			list: [...prevState.list,prevState.inputValue],
  		inputValue: ''
		}))
  	// this.setState({
  	// 	list: [...this.state.list,this.state.inputValue],
  	// 	inputValue: ''
  	// })
	}
	handleDeleteItem(index){   //点击删除此项
		//immutable
		//state不允许我们做任何的改变
    this.setState(() => {
    	const list = this.state.list;
      list.splice(index,1);
    	return {list};
    })
    // this.setState({
    // 	list
    // })
	}
}
export default TodoList;