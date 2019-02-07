import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes';

const INITIAL_STATE = {
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false
            };

        default:
            return state
    }
};
