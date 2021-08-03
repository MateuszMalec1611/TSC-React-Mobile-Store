import api from '@api';
import { Dispatch } from 'redux';
import {
    ProductsDispatchTypes,
    OrderedProduct,
    LOADING,
    ERROR,
    GET_PRODUCTS,
    GET_PRODUCT_DETAIL,
    SENT_ORDER,
} from '../Actions/MobileStore.actions';

export const GetProducts = () => async (dispatch: Dispatch<ProductsDispatchTypes>) => {
    try {
        dispatch({ type: LOADING });
        const { data } = await api().get('/products-header.json');

        if (!data) throw new Error('Something went wrong');

        data.shift();
        dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error });
        alert(error);
    }
};
export const GetProductDetail = (product: string) => async (dispatch: Dispatch<ProductsDispatchTypes>) => {
    try {
        dispatch({ type: LOADING });
        const { data } = await api().get(`/products-description/${product}.json`);

        if (!data) throw new Error('Something went wrong');

        dispatch({ type: GET_PRODUCT_DETAIL, payload: data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error });
        alert(error);
    }
};
export const SendProduct = (product: OrderedProduct) => async (dispatch: Dispatch<ProductsDispatchTypes>) => {
    try {
        dispatch({ type: LOADING });
        const { status } = await api().post(`/user/ordered-products.json`, product);

        if (status !== 200) throw new Error('Failed to send order');

        dispatch({ type: SENT_ORDER, payload: true });
    } catch (error) {
        dispatch({ type: ERROR, payload: error });
    }
};
