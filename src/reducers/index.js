import { combineReducers } from "redux";
import assetReducer from './assetReducer'

export default combineReducers({ assets: assetReducer });
