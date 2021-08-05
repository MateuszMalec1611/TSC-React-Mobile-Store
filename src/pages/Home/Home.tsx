import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootStore } from '@store/Store';
import pageTransitionFM from '@pages/pageTransition';
import Products from '@components/Products/Products';
import SearchEngine from '@components/SearchEngine/SearchEngine';
import Error from '@components/Ui/ErrorModal/ErrorModal';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const { error } = useSelector((state: RootStore) => state.mobileStore);

    return (
        <motion.div {...pageTransitionFM} className={styles.home}>
            <SearchEngine />
            <Products />
            {error !== '' && <Error />}
        </motion.div>
    );
};

export default Home;
