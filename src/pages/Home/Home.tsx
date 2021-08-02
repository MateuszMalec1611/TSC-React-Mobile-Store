import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import Products from '@components/Products/Products';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <motion.div {...pageTransitionFM} className={styles.home}>
            <Products />
        </motion.div>
    );
};

export default Home;
