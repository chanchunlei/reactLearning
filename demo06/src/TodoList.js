import React, { Component } from 'react';
import { connect } from 'react-redux';
class TodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button onClick={this.handleClick.bind(this)}>提交</button>
                </div>
                <ul>
                    <li>hello</li>
                </ul>
            </div>
        )
    }
    handleClick() {

    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            //console.log(e.target.value)
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);