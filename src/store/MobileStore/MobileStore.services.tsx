import api from '@api';
import { Dispatch } from 'redux';
import {
    MobileStoreDispatchTypes,
    OrderedProduct,
    LOADING,
    ERROR,
    SENT_ORDER,
} from './MobileStore.actions';

export const GetData =
    (url: string, type: any, shift = true) =>
    async (dispatch: Dispatch<MobileStoreDispatchTypes>) => {
        try {
            dispatch({ type: LOADING });
            const { data } = await api().get(`${url}.json`);

            if (!data) throw new Error('Something went wrong');

            if (shift) data.shift();
            dispatch({ type, payload: data });
        } catch (error) {
            dispatch({ type: ERROR, payload: error });
            alert(error);
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
            dispatch({ type: ERROR, payload: error });
        }
    };
