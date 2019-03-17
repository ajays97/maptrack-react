import {
    // LOGIN,
    LOGOUT,
    LOGIN_REQUEST
} from './actionTypes';
// import {
//     authHeader
// } from '../helpers/auth-header';

import {
    SERVER_URL,
    // API_URL
} from '../config';

import { history } from '../helpers/history';

export const login = (username, password) => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: username,
            password
        })
    };

    fetch(SERVER_URL + '/auth/login/', requestOptions)
        .then(res => res.json())
        .then(user => {
            console.log('user', user);
            
            localStorage.setItem('user', JSON.stringify(user.token));
            
            dispatch({
                type: LOGIN_REQUEST,
                payload: user
            });
            history.push('/');
        });
};

export const logout = () => dispatch => {
    localStorage.removeItem('user');
    dispatch({
        type: LOGOUT,
        payload: ''
    });
}

// function handleResponse(response) {
//     console.log('Login response:', response);
    
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 // location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }