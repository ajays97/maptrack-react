import { combineReducers } from "redux";
import assetReducer from './assetReducer'
import authReducer from './authReducer';

export default combineReducers({ assetStore: assetReducer,
authentication: authReducer });
