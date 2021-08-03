import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import { GetProducts } from '@store/Services/MobileStore.services';
import Product from './subcomponents/Product/Product';
import styles from './Products.module.css';
import Loader from '@components/Ui/Loader/Loader';

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state: RootStore) => state.mobileStore);
    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]);

    const productsList = products?.map(product => <Product key={product.id} {...product} />);

    return (
        <>
            <ul className={styles.products}>{loading ? <Loader /> : productsList}</ul>
        </>
    );
};

export default Products;
