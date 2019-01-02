import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'
const Header = (props) => { //无状态组件
    return (
        <HeaderWrapper >
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch
                            className={props.focused ? 'focused':''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe60b;</i>
                </SearchWrapper>

            </Nav>
            <Addition>
                <Button className='writting'><i className="iconfont">&#xe62a;</i>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}
const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.serchBlur());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);