import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    if (window.innerWidth < 768) {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
    const handleBar = () => setIsActive(prev => !prev);

    const navBarClasses = isActive ? `${styles.bar} ${styles['bar--active']}` : `${styles.bar}`;
    const navLinksClasses = isActive ? `${styles.navList} ${styles['navList--active']}` : `${styles.navList}`;
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <NavLink to="/home">
                    Mobile<span> Store</span>
                </NavLink>
            </div>
            <div onClick={handleBar} className={styles.barBox}>
                <div className={navBarClasses}></div>
            </div>

            <div className={navLinksClasses}>
                <ul>
                    <li>
                        <NavLink onClick={handleBar} activeClassName={styles.active} to="/home">
                            H<span>o</span>me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleBar} activeClassName={styles.active} to="/profile">
                            P<span>r</span>ofile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleBar} activeClassName={styles.active} to="/" exact>
                            E<span>x</span>it
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
