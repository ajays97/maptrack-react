import { FETCH_ASSETS_LOCATION } from './actionTypes';

export const loadInitialDataSocket = (socket) => dispatch => {
    socket.on('vehicles_update', (data) => {
        dispatch({
            type: FETCH_ASSETS_LOCATION,
            payload: data
        });
    });
};w