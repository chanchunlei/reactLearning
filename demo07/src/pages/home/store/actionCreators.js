//使用了redux-thunk，中间件
import axios from "axios/index";
import { actionTypes } from '../store';
import { fromJS } from 'immutable';

const addHomeList = (list,nextPage) => ({ //加载更多派发
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})
export const getHomeInfo = () => {  //首页数据
    return (dispatch) => {
        axios.get('/home' )
            .then((res)=> {
                //console.log(res);
                const result = res.data;
                const action = {
                    type: actionTypes.CHANGE_HOME_DATA,
                    topicList: result.topicList,
                    articleList: result.articleList,
                    recommendList: result.recommendList
                }
                dispatch(action);
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const getMoreList = (page) => { //加载更多
    return (dispatch) => {
        axios.get('/more?page='+ page )
            .then((res)=> {
                //console.log(res);
                const result = res.data;
                console.log(page);
                dispatch(addHomeList(result.articleList, page + 1));
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const toggleTopShow = (scrollB) => {
    return (dispatch) => {
        const action = {
            type: actionTypes.IS_SCROLL,
            scrollB
        }
        dispatch(action);
    }
}
