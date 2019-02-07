import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILURE
} from './actionTypes';

const loginRequest = (dispatch, email) => {
    dispatch({
        type: LOGIN_REQUEST,
        payload: email
    });
};


const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
};

const loginFailure = (dispatch, error) => {
    dispatch({
        type: LOGIN_FAILURE,
        payload: error
    });
};

export const login = (userObj) => {
    return (dispatch) => {

        // loginRequest(dispatch, {});

        // loginSuccess(dispatch, {});

        // loginFailure(dispatch, {});

    }
}
