import api from '@api';
import { Dispatch } from 'redux';
import { ProductsDispatchTypes, LOADING, ERROR, GET_PRODUCTS } from '../Actions/ProductActionTypes';

export const GetProducts = () => async (dispatch: Dispatch<ProductsDispatchTypes>) => {
    try {
        dispatch({ type: LOADING });
        const { data } = await api().get('/products-header.json');
        data.shift();
        dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
        dispatch({ type: ERROR });
        alert(error);
    }
};
