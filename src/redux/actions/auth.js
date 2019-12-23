import { api } from "./api";
import { SUCCESS_USER } from "./user";

export const USER_NAME = '@username';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_LOADING = 'LOGIN_LOADING'

export const isAuthenticated = () => localStorage.getItem(USER_NAME) !== null;

export const getUsername = () => localStorage.getItem(USER_NAME);

export const login = data => dispatch => {
    dispatch({ type: LOGIN_LOADING })
    return api.get(`/users/${data.username}`).then(res => {
        localStorage.setItem(USER_NAME, data.username)
        dispatch({ type: LOGIN_SUCCESS, user: res.data })
        dispatch({ type: SUCCESS_USER, payload: res.data })
    }).catch(err => {
        if(err.response && err.response.status === 404) 
            dispatch({ type: LOGIN_FAILED, error: 'usuário não encontrado.' })
        else if(err.response) 
            dispatch({ type: LOGIN_FAILED, error: err.response.statusText })
        else 
            dispatch({ type: LOGIN_FAILED, error: 'algo errado aconteceu.' })
    })
}

export const setError = () => dispatch => {
    dispatch({ type: LOGIN_FAILED, error: null })
}

export const logout = () => dispatch => {
    localStorage.clear()
    dispatch({ type: LOGIN_SUCCESS, user: {} })
}