import { combineReducers } from 'redux';
import MobileStoreReducer from './Reducers/MobileStore.reducer';

const rootReducer = combineReducers({ mobileStore: MobileStoreReducer });

export default rootReducer;
