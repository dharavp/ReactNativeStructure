import { combineReducers } from 'redux';
import navReducer from './Navigation/reducers';
import authReducer from './Auth/reducers';

const rootReducer = combineReducers({
    nav: navReducer,
    auth: authReducer
});

export default rootReducer;