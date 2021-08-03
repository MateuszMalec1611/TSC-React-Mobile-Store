import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import OrderedProduct from '@components/OrderedProduct/OrderedProduct';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
    return (
        <motion.div {...pageTransitionFM} className={styles.profile}>
            <h2>Your Orders</h2>
            <div className={styles.orderedBox}>
                <OrderedProduct />
            </div>
        </motion.div>
    );
};

export default Profile;
