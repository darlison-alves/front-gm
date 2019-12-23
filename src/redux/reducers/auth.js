import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAILED } from "../actions/auth";

export const INITIAL_STATE = {
    loading_data_user: false,
    data: {},
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading_data_user: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.user,
                loading_data_user: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error,
                loading_data_user: false
            }        
        default:
            return state
    }
}