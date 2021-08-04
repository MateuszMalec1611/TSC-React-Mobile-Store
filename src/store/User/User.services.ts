import api from '@api';
import { Dispatch } from 'redux';
import { GET_USER_DATA, UPDATE_TOTAL_AMOUNT, UserDispatchTypes } from './User.actions';

export const GetUserData = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        const { data, status } = await api().get('/user/details.json');

        if (status !== 200) throw new Error('Failed to get details');

        dispatch({ type: GET_USER_DATA, payload: data ?? { totalAmount: 0, quantityOfOrers: 0 } });
    } catch (error) {
        alert(error);
    }
};
export const UpdateUser =
    (totalAmount: number, quantityOfOrders: number) => async (dispatch: Dispatch<UserDispatchTypes>) => {
        try {
            const { status } = await api().put('/user/details.json', {
                totalAmount,
                quantityOfOrders,
            });

            if (status !== 200) throw new Error('Failed to update');

            dispatch({ type: UPDATE_TOTAL_AMOUNT, payload: { totalAmount, quantityOfOrders } });
        } catch (error) {
            alert(error);
        }
    };
