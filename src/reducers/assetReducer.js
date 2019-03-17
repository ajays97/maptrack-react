import { FETCH_ASSETS_LOCATIONS, FETCH_ASSETS_LIST, FETCH_ASSET_TYPE_LIST } from '../actions/actionTypes';

import asset1 from "../assets/sidenav/asset1.svg";
import asset2 from "../assets/sidenav/asset2.svg";
import asset3 from "../assets/sidenav/asset3.svg";
import asset4 from "../assets/sidenav/asset4.svg";
import asset1Inactive from "../assets/sidenav/asset1-inactive.svg";
import asset2Inactive from "../assets/sidenav/asset2-inactive.svg";
import asset3Inactive from "../assets/sidenav/asset3-inactive.svg";
import asset4Inactive from "../assets/sidenav/asset4-inactive.svg";

const initialState = {
    assets: [],
    assetList: [],
    openIndex: -1,
    assetTypes: [
        {
            imageActive: asset1,
            imageInactive: asset1Inactive,
            count: 1,
            active: false
        },
        {
            imageActive: asset2,
            imageInactive: asset2Inactive,
            count: 2,
            active: false
        },
        {
            imageActive: asset3,
            imageInactive: asset3Inactive,
            count: 2,
            active: false
        },
        {
            imageActive: asset4,
            imageInactive: asset4Inactive,
            count: 2,
            active: false
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ASSETS_LOCATIONS: {
            return {
                ...state,
                assets: action.payload
            };
        }

        case FETCH_ASSETS_LIST: {

            // Make API call and retrieve asset list here

            let index = action.payload;
            let assetTypes = [...state.assetTypes];

            assetTypes.map(function(item, i) {
            if (index === i) {
                item.active = !item.active;
                return true;
            } else {
                item.active = false;
                return true;
            } 
            });

            let openIndex = assetTypes.findIndex((item) => {
                return item.active === true;
            });

            // await this.setState(prevState => ({
            //     items,
            //     openIndex
            // }));

            return {
                ...state,
                assetList: [],
                openIndex
            }
        }

        case FETCH_ASSET_TYPE_LIST: {

            let data = action.payload.data;
            let index = action.payload.openIndex

            let assetTypes = [...state.assetTypes];

            assetTypes.map(function(item, i) {
            if (index === i) {
                item.active = !item.active;
                return true;
            } else {
                item.active = false;
                return true;
            }
            });

            let openIndex = assetTypes.findIndex((item) => {
                return item.active === true;
            });
            
            return {
                ...state,
                assetList: data,
                openIndex: openIndex
            }
        }

        default: {
            return state;
        }
    }
};