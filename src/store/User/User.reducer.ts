import { GET_USER_DATA, UPDATE_TOTAL_AMOUNT, UserDispatchTypes } from './User.actions';

interface DefaultState {
    totalAmount: number;
    quantityOfOrers: number;
}

const defaultState: DefaultState = {
    totalAmount: 0,
    quantityOfOrers: 0,
};

const UserReducer = (state: DefaultState = defaultState, action: UserDispatchTypes): typeof defaultState => {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                totalAmount: action.payload.totalAmount ?? 0,
                quantityOfOrers: action.payload.quantityOfOrers ?? 0,
            };
        case UPDATE_TOTAL_AMOUNT:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default UserReducer;
