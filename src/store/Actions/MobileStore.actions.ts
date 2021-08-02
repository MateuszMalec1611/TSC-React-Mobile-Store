export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';

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

export interface Loading {
    type: typeof LOADING;
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

export type ProductsDispatchTypes = Loading | Error | GetProducts | GetProductDetail;
