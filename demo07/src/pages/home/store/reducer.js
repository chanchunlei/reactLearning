import { fromJS } from 'immutable';
const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/8869373-1fd5163382f9a722.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '手绘',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/8869373-1fd5163382f9a722.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
})
export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}