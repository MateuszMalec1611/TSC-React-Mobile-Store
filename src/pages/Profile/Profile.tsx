import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootStore } from '@store/Store';
import pageTransitionFM from '@pages/pageTransition';
import { GetData } from '@store/MobileStore/MobileStore.services';
import { GET_ORDERED_PRODUCTS } from '@store/MobileStore/MobileStore.actions';
import OrderedProduct from '@components/OrderedProduct/OrderedProduct';
import UserDetails from '@components/UserDetails/UserDetails';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootStore) => state.mobileStore.orderedProducts!);

    useEffect(() => {
        dispatch(GetData('/user/ordered-products', GET_ORDERED_PRODUCTS, false));
    }, [dispatch]);

    const orderedProducts = orders?.map(product => <OrderedProduct key={product.id} {...product} />);

    return (
        <motion.div {...pageTransitionFM} className={styles.profile}>
            <h2>
                Your O<span>r</span>ders
            </h2>
            <UserDetails />
            <div className={styles.orderedBox}>
                {orders.length !== 0 ? orderedProducts : <p>You have not placed any orders yet :/</p>}
            </div>
        </motion.div>
    );
};

export default Profile;
