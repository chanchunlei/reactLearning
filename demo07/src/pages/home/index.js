import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0,0);
    };
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4598/6eab2d9b6506c6302c4b5602405021a9e321408b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    };
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    };
    componentWillUnmount() {//销毁的时候去除方法
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    };
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    };
}
const mapStateToProps = (state) => ({
    showScroll: state.home.get('showScroll')
});
const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
        //console.log(document.documentElement.scrollTop);
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);