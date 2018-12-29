import React from 'react';
import 'antd/dist/antd.css'; //引入antd的样式文件
import { Input, Button, List } from 'antd';
//组件中只有UI，数据通过父组件控制，可以创建成无状态组件以提高性能
const TodoListUI = (props) => {
    return(
        <div style={{marginTop: 10,marginLeft: '10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='todo info'
                    style={{width: '300px', marginRight: 10}}
                    onChange={props.handleInputChange}/>
                <Button onClick={props.handleButtonClick} type="primary">提交</Button>
            </div>
            <List
                style={{width: 300,marginTop: '10px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemClick(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop: 10,marginLeft: '10px'}}>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder='todo info'
//                         style={{width: '300px', marginRight: 10}}
//                         onChange={this.props.handleInputChange}/>
//                     <Button onClick={this.props.handleButtonClick} type="primary">提交</Button>
//                 </div>
//                 <List
//                     style={{width: 300,marginTop: '10px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemClick(index)}}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUI;