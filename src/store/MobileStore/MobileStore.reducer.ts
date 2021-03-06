import { prepareData } from '@utils/prepareData';
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
    CANCEL_ORDER,
    DISPLAY_PRODUCT,
} from './MobileStore.actions';

interface DefaultState {
    products: Product[];
    productDetail?: ProductDetail;
    orderedProducts: OrderedProduct[];
    isOrdering: boolean;
    loading: boolean;
    noProductsFound: boolean;
    sent: boolean;
    error: string;
}

const defaultState: DefaultState = {
    products: [],
    orderedProducts: [],
    isOrdering: false,
    noProductsFound: false, // REQUIRED FOR SEARCH ENGINE
    loading: false,
    sent: false,
    error: '',
};

const MobileStoreReducer = (
    state: DefaultState = defaultState,
    action: MobileStoreDispatchTypes
): typeof defaultState => {
    switch (action.type) {
        case CANCEL_ORDER:
            const newOrderedProducts = state.orderedProducts.filter(
                product => product.id !== action.payload
            );
            return {
                ...state,
                loading: false,
                error: '',
                orderedProducts: newOrderedProducts,
            };
        case DISPLAY_PRODUCT:
            return {
                ...state,
                products: action.payload.products,
                noProductsFound: action.payload.noProductsFound,
            };
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                error: '',
                products: action.payload ?? [],
                noProductsFound: false,
            };
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                loading: false,
                error: '',
                productDetail: action.payload,
            };
        case GET_ORDERED_PRODUCTS:
            const preparedOrders = prepareData(action.payload);
            return {
                ...state,
                loading: false,
                error: '',
                orderedProducts: preparedOrders! ?? [],
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
                error: '',
                sent: action.payload,
            };
        default:
            return state;
    }
};

export default MobileStoreReducer;
