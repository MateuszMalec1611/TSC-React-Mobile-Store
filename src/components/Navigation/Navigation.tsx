import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const handleBar = () => setIsActive(prev => !prev);

    const navBarClasses = isActive ? `${styles.bar} ${styles['bar--active']}` : `${styles.bar}`;
    const navLinksClasses = isActive ? `${styles.navList} ${styles['navList--active']}` : `${styles.navList}`;
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <NavLink to="/home">
                    M.<span>S</span>.
                </NavLink>
            </div>
            <div onClick={handleBar} className={styles.barBox}>
                <div className={navBarClasses}></div>
            </div>

            <div className={navLinksClasses}>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.active} to="/home">
                            H<span>o</span>me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to="/" exact>
                            E<span>x</span>it
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
