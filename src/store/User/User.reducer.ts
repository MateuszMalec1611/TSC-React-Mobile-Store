import { GET_USER_DATA, UPDATE_TOTAL_AMOUNT, UserDispatchTypes } from './User.actions';

interface DefaultState {
    totalAmount: number;
    quantityOfOrders: number;
}

const defaultState: DefaultState = {
    totalAmount: 0,
    quantityOfOrders: 0,
};

const UserReducer = (state: DefaultState = defaultState, action: UserDispatchTypes): typeof defaultState => {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                totalAmount: action.payload.totalAmount ?? 0,
                quantityOfOrders: action.payload.quantityOfOrders ?? 0,
            };
        case UPDATE_TOTAL_AMOUNT:
            return {
                totalAmount: action.payload.totalAmount ?? 0,
                quantityOfOrders: action.payload.quantityOfOrders ?? 0,
            };
        default:
            return state;
    }
};

export default UserReducer;
