import {
    // LOGIN,
    LOGOUT,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from '../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {
    loggedIn: true,
    user
} : {};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case LOGIN_FAILURE:
            return {};
        case LOGOUT:
            return {};
        
        default:
            return state
    }
}