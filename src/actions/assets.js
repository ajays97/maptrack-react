import { FETCH_ASSETS_LOCATIONS } from '../actions/actionTypes';

export const fetchAssetsLocations = (socket) => dispatch => {
    console.log('fetching');
    
    socket.on('vehicles_update', (data) => {
        dispatch({
            type: FETCH_ASSETS_LOCATIONS,
            payload: data
        });
    });
};