import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import { GetData } from '@store/MobileStore/MobileStore.services';
import { GET_PRODUCTS } from '@store/MobileStore/MobileStore.actions';
import Product from './subcomponents/Product/Product';
import Loader from '@components/Ui/Loader/Loader';
import styles from './Products.module.css';

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const { products, loading, noProductsFound } = useSelector(
        (state: RootStore) => state.mobileStore
    );
    useEffect(() => {
        dispatch(GetData(`/products-header`, GET_PRODUCTS));
    }, [dispatch]);

    const productsList = products.map(product => <Product key={product.id} {...product} />);

    const renderProducts =
        productsList.length === 0 ? (
            <p className={styles.productsInfo}>No products are available at the moment</p>
        ) : (
            <ul className={styles.products}>{loading ? <Loader /> : productsList}</ul>
        );

    return (
        <>
            {noProductsFound ? (
                <p className={styles.productsInfo}>No results, please enter a different name</p>
            ) : (
                renderProducts
            )}
        </>
    );
};

export default Products;
