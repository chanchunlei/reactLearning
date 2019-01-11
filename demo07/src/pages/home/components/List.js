import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map(item=>{
                        return (
                            <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <img className='pic' src={item.get('imgUrl')} alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>
                                            {item.get('title')}
                                        </h3>
                                        <p className='desc'>
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文章</LoadMore>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.home.get('articleList'),
        page: state.home.get('articlePage')
    }
}
const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);