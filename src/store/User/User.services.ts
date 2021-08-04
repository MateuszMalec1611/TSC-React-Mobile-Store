import api from '@api';
import { Dispatch } from 'redux';
import { GET_USER_DATA, UserDispatchTypes } from './User.actions';

export const GetUserData = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        const { data, status } = await api().get('/user/details.json');

        if (status !== 200) throw new Error('Failed to get details');

        dispatch({ type: GET_USER_DATA, payload: data ?? 0 });
    } catch (error) {
        alert(error);
    }
};
export const UpdateUser =
    (totalAmount: number, quantityOfOrers: number, option: string) =>
    async (dispatch: Dispatch<UserDispatchTypes>) => {
        try {
            const { status } = await api().put('/user/details.json', {
                totalAmount,
                quantityOfOrers,
            });

            if (status !== 200) throw new Error('Failed to update');
        } catch (error) {
            alert(error);
        }
    };
