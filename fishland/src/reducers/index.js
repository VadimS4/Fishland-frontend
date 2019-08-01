import { combineReducers } from 'redux';
import appReducer from './appReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

export default combineReducers({
    appReducer,
    loginReducer,
    signupReducer
})