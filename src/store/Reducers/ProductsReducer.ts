import { Products, ProductsDispatchTypes, ERROR, LOADING, GET_PRODUCTS } from '../Actions/ProductActionTypes';

interface DefaultState {
    loading: boolean;
    products?: Products[];
}

const defaultState: DefaultState = {
    loading: false,
};

const productsReducer = (
    state: DefaultState = defaultState,
    action: ProductsDispatchTypes
): typeof defaultState => {
    switch (action.type) {
        case ERROR:
            return {
                loading: false,
            };
        case LOADING:
            return {
                loading: true,
            };
        case GET_PRODUCTS:
            return {
                loading: false,
                products: action.payload,
            };
    }

    return state;
};

export default productsReducer;
