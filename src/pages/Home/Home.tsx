import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import Products from '@components/Products/Products';
import SearchEngine from '@components/SearchEngine/SearchEngine';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <motion.div {...pageTransitionFM} className={styles.home}>
            <SearchEngine />
            <Products />
        </motion.div>
    );
};

export default Home;
