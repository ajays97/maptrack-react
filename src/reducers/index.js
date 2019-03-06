import { combineReducers } from "redux";
import assetReducer from './assetReducer'

export default combineReducers({ assetStore: assetReducer });
