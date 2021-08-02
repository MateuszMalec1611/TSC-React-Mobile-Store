export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export type Products = {
    id: string;
    img: string;
    name: string;
    price: number;
};

export interface Loading {
    type: typeof LOADING;
}

export interface Error {
    type: typeof ERROR;
}
export interface GetProducts {
    type: typeof GET_PRODUCTS;
    payload: Products[];
}

export type ProductsDispatchTypes = Loading | Error | GetProducts;
