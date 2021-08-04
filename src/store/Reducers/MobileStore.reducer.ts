import {
    Product,
    ProductDetail,
    MobileStoreDispatchTypes,
    ERROR,
    GET_PRODUCTS,
    GET_PRODUCT_DETAIL,
    IS_ORDERING,
    LOADING,
    SENT_ORDER,
    OrderedProduct,
    GET_ORDERED_PRODUCTS,
} from '../Actions/MobileStore.actions';

interface DefaultState {
    products?: Product[];
    productDetail?: ProductDetail;
    orderedProducts?: OrderedProduct[];
    isOrdering: boolean;
    loading: boolean;
    sent: boolean;
    error: string;
}

const defaultState: DefaultState = {
    products: [],
    orderedProducts: [],
    isOrdering: false,
    loading: false,
    sent: false,
    error: '',
};

const MobileStoreReducer = (
    state: DefaultState = defaultState,
    action: MobileStoreDispatchTypes
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
        case GET_ORDERED_PRODUCTS:
            return {
                ...state,
                loading: false,
                orderedProducts: action.payload,
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
        case SENT_ORDER:
            return {
                ...state,
                loading: false,
                sent: action.payload,
            };
        default:
            return state;
    }
};

export default MobileStoreReducer;
