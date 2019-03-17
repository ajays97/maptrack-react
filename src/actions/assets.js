import { FETCH_ASSETS_LOCATIONS, FETCH_ASSETS_LIST, FETCH_ASSET_TYPE_LIST } from '../actions/actionTypes';
import assetTypes from '../models/AssetType';
import axios from 'axios';

import { SERVER_URL, API_URL } from '../config';

export const fetchAssetsLocations = (socket) => dispatch => {

    socket.on('vehicles_update', (data) => {
        console.log(data);
        
        dispatch({
            type: FETCH_ASSETS_LOCATIONS,
            payload: data
        });
    });
};

export const fetchAssetsList = (index) => dispatch => {
    dispatch({
        type: FETCH_ASSETS_LIST,
        payload: index
    });
};

export const fetchAssetTypeList = (index) => dispatch => {
    let assetType = assetTypes[index];

    axios.get(SERVER_URL + API_URL + 'users/devices?type=' + assetType, {
        headers: {
            'X-Access-Token': localStorage.getItem('user').slice(1, -1)
        }
    })
    .then(response => {
        let data = {
            data: response.data,
            openIndex: index
        };
        dispatch({
            type: FETCH_ASSET_TYPE_LIST,
            payload: data
        });
    }).catch(error => {
        console.log(error);
        
    });


    
};