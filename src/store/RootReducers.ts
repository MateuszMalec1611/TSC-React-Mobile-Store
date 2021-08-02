import { combineReducers } from 'redux';
import MobileStoreReducer from './Reducers/MobileStore.reducer';

const rootReducer = combineReducers({ products: MobileStoreReducer });

export default rootReducer;
