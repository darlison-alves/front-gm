import { api } from "./api";

export const USER_NAME = '@username'
export const LOGIN_SUCCESS = 'LOGIN'
export const LOGIN_FAILED = 'LOGIN'

export const isAuthenticated = () => localStorage.getItem(USER_NAME) !== null;

export const getUsername = () => localStorage.getItem(USER_NAME);

export const login = data => dispatch => {
    
    api.get(`/users/${data.username}`).then( res => {
        localStorage.setItem(USER_NAME, data.username)    
        dispatch({type: LOGIN_SUCCESS, user: res.data})
    }).catch(err => {
        dispatch({ type: LOGIN_FAILED, error: err })
    })    
}