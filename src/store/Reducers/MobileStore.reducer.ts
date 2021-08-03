import {
    Product,
    ProductDetail,
    ProductsDispatchTypes,
    ERROR,
    GET_PRODUCTS,
    GET_PRODUCT_DETAIL,
    IS_ORDERING,
    LOADING,
} from '../Actions/MobileStore.actions';

interface DefaultState {
    loading: boolean;
    products?: Product[];
    productDetail?: ProductDetail;
    sent: boolean;
    isOrdering: boolean;
}

const defaultState: DefaultState = {
    loading: false,
    products: [],
    sent: false,
    isOrdering: false,
};

const MobileStoreReducer = (
    state: DefaultState = defaultState,
    action: ProductsDispatchTypes
): typeof defaultState => {
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                loading: false,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                loading: false,
                productDetail: action.payload,
            };
        case IS_ORDERING:
            return {
                ...state,
                isOrdering: action.payload,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default MobileStoreReducer;
