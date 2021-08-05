import api from '@api';
import { Dispatch } from 'redux';
import {
    MobileStoreDispatchTypes,
    OrderedProduct,
    LOADING,
    ERROR,
    SENT_ORDER,
    CANCEL_ORDER,
} from './MobileStore.actions';

export const GetData =
    (url: string, type: any, shift = true) =>
    async (dispatch: Dispatch<MobileStoreDispatchTypes>) => {
        try {
            dispatch({ type: LOADING });
            const { data, status } = await api().get(`${url}.json`);

            if (!data && shift) throw new Error('Failed to get data, try again :(');
            if (status !== 200) throw new Error('Failed to get data, try again :(');

            if (shift && data) data.shift();
            dispatch({ type, payload: data });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.message });
        }
    };

export const SendProduct =
    (product: OrderedProduct) => async (dispatch: Dispatch<MobileStoreDispatchTypes>) => {
        try {
            dispatch({ type: LOADING });
            const { status } = await api().post(`/user/ordered-products.json`, product);

            if (status !== 200) throw new Error('Failed to send order');

            dispatch({ type: SENT_ORDER, payload: true });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.message });
        }
    };

export const CancelOrder = (id: string) => async (dispatch: Dispatch<MobileStoreDispatchTypes>) => {
    try {
        dispatch({ type: LOADING });
        const { status } = await api().delete(`/user/ordered-products/${id}.json`);

        if (status !== 200) throw new Error('Failed to cancel the order');

        dispatch({ type: CANCEL_ORDER, payload: id });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
    }
};
