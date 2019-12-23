import { combineReducers } from 'redux';

import auth from './auth'
import repos from './repos'
import user from './user'

const rootReducer = combineReducers({
    auth,
    repos,
    user
})

export default rootReducer;