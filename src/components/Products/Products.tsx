import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import { GetData } from '@store/Services/MobileStore.services';
import Product from './subcomponents/Product/Product';
import Loader from '@components/Ui/Loader/Loader';
import styles from './Products.module.css';
import { GET_PRODUCTS } from '@store/Actions/MobileStore.actions';

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state: RootStore) => state.mobileStore);
    useEffect(() => {
        dispatch(GetData(`/products-header`, GET_PRODUCTS));
    }, [dispatch]);

    const productsList = products?.map(product => <Product key={product.id} {...product} />);

    return (
        <>
            <ul className={styles.products}>{loading ? <Loader /> : productsList}</ul>
        </>
    );
};

export default Products;
