import { FETCH_ASSETS_LOCATIONS } from '../actions/actionTypes';

const initialState = {
    assets: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ASSETS_LOCATIONS: {
            console.log('fetching:', action.payload);
            
            return {
                ...state,
                assets: action.payload
            };
        }

        default: {
            return state;
        }
    }
};