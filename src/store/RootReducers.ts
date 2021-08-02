import { combineReducers } from 'redux';
import productsReducer from './Reducers/ProductsReducer';

const RootReducer = combineReducers({ products: productsReducer });

export default RootReducer;
