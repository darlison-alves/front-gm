import { LOADING_REPO_STARRED, REPO_STARRED, REPO_STARRED_FAILED } from "../actions/repos";

export const INITIAL_STATE = {
    data: [],
    loading_repo: false,
    error: null
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case LOADING_REPO_STARRED:
            return {
                ...state,
                loading_repo: true
            }
        case REPO_STARRED:
            return {
                ...state,
                data: action.payload, 
                loading_repo: false
            }
        case REPO_STARRED_FAILED:
            return {
                ...state,
                error: action.payload,
                loading_repo: false
            }
        default: 
            return state;
    }
}