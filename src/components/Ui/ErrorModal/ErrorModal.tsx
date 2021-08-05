import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export interface ModalProps {
    errorText: string;
}

const Modal: React.FC<ModalProps> = ({ errorText }) => {
    const history = useHistory();

    const returnToMainPage = () => history.replace('/');

    return (
        <div className={styles.errorModal}>
            <div>
                <h2>ERROR</h2>
                <p>{errorText}</p>
                <Button click={returnToMainPage}>try again</Button>
            </div>
        </div>
    );
};

const ErrorModal: React.FC = () => {
    const { error } = useSelector((state: RootStore) => state.mobileStore);

    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return <>{ReactDOM.createPortal(<Modal errorText={error} />, modalRoot)}</>;
};

export default ErrorModal;
