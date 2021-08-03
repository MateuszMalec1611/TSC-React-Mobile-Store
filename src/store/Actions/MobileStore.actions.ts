export const ERROR = 'ERROR';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const IS_ORDERING = 'IS_ORDERING';
export const LOADING = 'LOADING';
export const SEND_ORDER = 'SEND_ORDER';

export type Product = {
    id: string;
    img: string;
    name: string;
    price: number;
};
export interface ProductDetail extends Product {
    display: string;
    processor: string;
    ram: string;
}
export interface OrderedProduct extends Product {
    date: string;
}
export interface Error {
    type: typeof ERROR;
}
export interface GetProducts {
    type: typeof GET_PRODUCTS;
    payload: Product[];
}
export interface GetProductDetail {
    type: typeof GET_PRODUCT_DETAIL;
    payload: ProductDetail;
}
export interface IsOrdering {
    type: typeof IS_ORDERING;
    payload: boolean;
}
export interface Loading {
    type: typeof LOADING;
}

export interface SendOrder {
    type: typeof SEND_ORDER;
    payload: OrderedProduct;
}

export type ProductsDispatchTypes = Error | GetProducts | GetProductDetail | IsOrdering | Loading | SendOrder;
