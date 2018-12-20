// TodoList.js
import React, { Component, Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
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
            onChange={this.handleInputChange.bind(this)}
      		/>
      		<button onClick={this.handleBtnClick.bind(this)}>提交</button>
      	</div>
      	<ul>
      	  {
      	  	this.state.list.map((item,index)=>{
      	  		return (
      	  			<div>
      	  				<TodoItem content={item} index={index} deleteItem={this.handleDeleteItem.bind(this)}/>
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
    	    
    	  </ul>
			</Fragment>
      	
			)
	}

	handleInputChange(e){ //获取input值
		// this.state.inputValue = e.target.value;
		 //console.log(e.target.value);
		this.setState({
			inputValue: e.target.value
		})
	}
	handleBtnClick(){  //提交加入
  	this.setState({
  		list: [...this.state.list,this.state.inputValue],
  		inputValue: ''
  	})
	}
	handleDeleteItem(index){   //点击删除此项
		//immutable
		//state不允许我们做任何的改变
    const list = this.state.list;
    list.splice(index,1);
    this.setState({
    	list
    })
	}
}
export default TodoList;