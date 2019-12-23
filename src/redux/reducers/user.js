import { LOADING_USER, SUCCESS_USER, FAILED_USER } from "../actions/user";

export const INITIAL_STATE = {
    data: {},
    loading_user: false
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_USER:
            return {
                ...state,
                loading_user: true
            }
        case SUCCESS_USER:
            return {
                ...state,
                data: action.payload,
                loading_user: false
            }
        case FAILED_USER:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}