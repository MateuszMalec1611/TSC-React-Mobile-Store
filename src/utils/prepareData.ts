import { OrderedProduct} from '@store/MobileStore/MobileStore.actions';

export const prepareData = (data: OrderedProduct[]) => {
    if (!data) return;
    const orderedProducts = [];

    for (const [key, value] of Object.entries(data)) {
        orderedProducts.push({
            id: key,
            productInfo: value.productInfo,
            userData: value.userData,
        });
    }

    return orderedProducts;
};
