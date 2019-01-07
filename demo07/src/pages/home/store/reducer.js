import { fromJS } from 'immutable';
import { actionTypes } from '../store';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,//加载更多页码
    showScroll: false  //是否显示回顶部
});
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                'articlePage': action.nextPage,
                'articleList': state.get('articleList').concat(action.list)
            })
        case actionTypes.IS_SCROLL:
            return state.set('showScroll', action.scrollB)
        default:
            return state;
    }
}