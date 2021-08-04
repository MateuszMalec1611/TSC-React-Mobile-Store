export const ERROR = 'ERROR';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_ORDERED_PRODUCTS = 'GET_ORDERED_PRODUCTS';
export const IS_ORDERING = 'IS_ORDERING';
export const LOADING = 'LOADING';
export const SENT_ORDER = 'SENT_ORDER';

//TYPES
export type Product = {
    id: string;
    img: string;
    name: string;
    price: number;
};
export type UserData = {
    city: string;
    date: string;
    email: string;
    name: string;
    postalCode: string;
};
export type OrderedProduct = {
    productInfo: Product;
    userData: UserData;
};
export interface ProductDetail extends Product {
    display: string;
    processor: string;
    ram: string;
}
//ACTIONS TYPES
export interface Error {
    type: typeof ERROR;
    payload: string;
}
export interface GetProducts {
    type: typeof GET_PRODUCTS;
    payload: Product[];
}
export interface GetProductDetail {
    type: typeof GET_PRODUCT_DETAIL;
    payload: ProductDetail;
}
export interface GetOrderedProducts {
    type: typeof GET_ORDERED_PRODUCTS;
    payload: OrderedProduct[];
}
export interface IsOrdering {
    type: typeof IS_ORDERING;
    payload: boolean;
}
export interface Loading {
    type: typeof LOADING;
}
export interface SentOrder {
    type: typeof SENT_ORDER;
    payload: boolean;
}

export type MobileStoreDispatchTypes =
    | Error
    | GetProducts
    | GetProductDetail
    | GetOrderedProducts
    | IsOrdering
    | Loading
    | SentOrder;
