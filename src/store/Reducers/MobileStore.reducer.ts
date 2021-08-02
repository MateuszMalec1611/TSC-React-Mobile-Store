import {
    Product,
    ProductDetail,
    ProductsDispatchTypes,
    ERROR,
    LOADING,
    GET_PRODUCTS,
    GET_PRODUCT_DETAIL,
} from '../Actions/MobileStore.actions';

interface DefaultState {
    loading: boolean;
    products?: Product[];
    productDetail?: ProductDetail;
}

const defaultState: DefaultState = {
    loading: false,
    products: [],
};

const MobileStoreReducer = (
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
        case GET_PRODUCT_DETAIL:
            return {
                loading: false,
                productDetail: action.payload,
            };
        default:
            return state;
    }
};

export default MobileStoreReducer;
