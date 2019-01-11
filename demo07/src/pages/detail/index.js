import React, { Component } from 'react';
class Detail extends Component {
    render() {
        console.log(this.props);
        //参数在this.props.match.params中
        return (
            <div>
                detail~
            </div>
        )
    }
}
export default Detail;