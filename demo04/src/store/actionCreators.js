import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionType'
import axios from "axios/index";
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (resList) => ({
    type: INIT_LIST_ACTION,
    resList
})
//请求数据的中间件
//使用了redux-thunk
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/data',{
            headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then((res) => {
            //console.log(res.data.list)
            const action = initListAction(res.data.list);
            dispatch(action);
        })
        .catch((run) => {
            console.log(run)
        })
    }
}