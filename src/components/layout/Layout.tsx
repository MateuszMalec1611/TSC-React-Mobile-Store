import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
    return <main className={styles.main}>{children}</main>;
};

export default Layout;
