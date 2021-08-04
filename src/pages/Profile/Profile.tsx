import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import OrderedProduct from '@components/OrderedProduct/OrderedProduct';
import { GetData } from '@store/Services/MobileStore.services';
import { GET_ORDERED_PRODUCTS } from '@store/Actions/MobileStore.actions';
import { RootStore } from '@store/Store';
import { prepareData } from '@utils/prepareData';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootStore) => state.mobileStore.orderedProducts!);

    const preparedOrders = prepareData(orders);

    useEffect(() => {
        dispatch(GetData('/user/ordered-products', GET_ORDERED_PRODUCTS, false));
    }, [dispatch]);

    const orderedProducts = preparedOrders?.map(product => <OrderedProduct key={product.id} {...product} />);

    return (
        <motion.div {...pageTransitionFM} className={styles.profile}>
            <h2>Your Orders</h2>
            <div className={styles.orderedBox}>{orderedProducts}</div>
        </motion.div>
    );
};

export default Profile;
