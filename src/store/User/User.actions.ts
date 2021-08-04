export const GET_USER_DATA = 'GET_USER_DATA';
export const UPDATE_TOTAL_AMOUNT = 'UPDATE_TOTAL_AMOUNT';

export type Details = {
    totalAmount: number;
    quantityOfOrders: number;
};

interface GetUserData {
    type: typeof GET_USER_DATA;
    payload: Details;
}
interface UpdateTotalAmount {
    type: typeof UPDATE_TOTAL_AMOUNT;
    payload: Details;
}

export type UserDispatchTypes = GetUserData | UpdateTotalAmount;
