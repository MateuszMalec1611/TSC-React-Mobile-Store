import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import Navigation from '@components/Navigation/Navigation';
import styles from './Layout.module.css';

export interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const pagePath = children.props.location.pathname;
    const shouldBeWrapped = pagePath !== '/';

    return (
        <div className={styles.container}>
            {shouldBeWrapped && (
                <>
                    <Navigation />
                    <motion.main {...pageTransitionFM} className={styles.main}>
                        {children}
                    </motion.main>
                </>
            )}
            {!shouldBeWrapped && children}
        </div>
    );
};

export default Layout;
