// TodoItem.js
import React, { Component } from 'react';
class TodoItem extends Component {
	constructor(props){
	  super(props);
	  this.handleClick = this.handleClick.bind(this);
	}
	shouldComponentUpdate(nextProps,nextState){
	   if(nextProps.content !== this.props.content){
	   	return true;
	   }else{
	   	return false;
	   }
	}
	render() {
	  const { content } = this.props;
      return (
          <li onClick={this.handleClick}>{content}</li>
      	)
	}
	handleClick(){
		const { deleteItem, index } = this.props;
		deleteItem(index);
		// this.props.deleteItem(this.props.index)
		// console.log(this.props.index)
	}
}
export default TodoItem;