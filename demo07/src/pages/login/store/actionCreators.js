import axios from 'axios';
import { actionTypes } from '../store';
const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
});

export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/login?account=' + account + '&password=' + password)
            .then((res) => {
                const result = res.data.status;
                if(result) {
                    dispatch(changeLogin());
                }else{
                    alert('登录失败！')
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }
};
export const logout = () => ({
    type: actionTypes.LOGOUT,
    value: false
});