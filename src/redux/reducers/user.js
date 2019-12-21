import { LOGIN_SUCCESS } from "../actions/auth";

const INITIAL_STATE = {
    loading_data_user: false
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            console.log(action.user)
            return {
                ...state
            }
        default: 
            return state
    }
}