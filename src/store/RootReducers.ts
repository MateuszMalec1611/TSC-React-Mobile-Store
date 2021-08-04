import { combineReducers } from 'redux';
import MobileStoreReducer from './MobileStore/MobileStore.reducer';
import UserReducer from './User/User.reducer';

const rootReducer = combineReducers({ mobileStore: MobileStoreReducer, user: UserReducer });

export default rootReducer;
