import { useHistory } from 'react-router-dom';
import styles from './Greeting.module.css';
import '../../css/animations.css';

const Greeting: React.FC = () => {
    const history = useHistory();

    const handleRedirect = () => history.push('/home');

    return (
        <header className={styles.greeting}>
            <div className={styles.heroImage}></div>
            <section>
                <h1 className="slideInR">
                    M<span>o</span>bile Store
                </h1>
                <h3 className="slideInL">New phone only for you</h3>
                <button className="show" onClick={handleRedirect}>checkout</button>
            </section>
        </header>
    );
};

export default Greeting;
