import { getUsername } from "./auth";
import { api } from "./api";

export const LOADING_USER = 'LOADING_USER';
export const SUCCESS_USER = 'SUCCESS_USER';
export const FAILED_USER = 'FAILED_USER';

export const getUser = () => (dispatch, getState) => {
    const username = getUsername();
    const { user } = getState();
    
    if(Object.keys(user.data).length) return;

    return api.get(`/users/${username}`).then(res => {
        dispatch({ type: SUCCESS_USER, payload: res.data })
    }).catch(error => {
        dispatch({ type: FAILED_USER, payload: error })
    })
}