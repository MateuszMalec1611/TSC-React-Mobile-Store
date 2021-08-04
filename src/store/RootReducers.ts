import { combineReducers } from 'redux';
import MobileStoreReducer from './MobileStore/MobileStore.reducer';

const rootReducer = combineReducers({ mobileStore: MobileStoreReducer });

export default rootReducer;
