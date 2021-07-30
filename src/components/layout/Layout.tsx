import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import Navigation from '@components/Navigation/Navigation';
import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navigation />
            <motion.main {...pageTransitionFM} className={styles.main}>
                {children}
            </motion.main>
        </div>
    );
};

export default Layout;
