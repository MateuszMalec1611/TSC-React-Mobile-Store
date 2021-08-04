import { RootStore } from '@store/Store';
import { GetUserData } from '@store/User/User.services';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserDetails.module.css';

export interface UserDetailsProps {}

const UserDetails: React.FC<UserDetailsProps> = () => {
    const dispatch = useDispatch();
    const { totalAmount, quantityOfOrders } = useSelector((state: RootStore) => state.user);

    useEffect(() => {
        dispatch(GetUserData());
    }, [dispatch]);

    return (
        <div className={styles.detailsBox}>
            <article>
                <h4>Total amount of orders</h4>
                <p>{totalAmount} $</p>
            </article>
            <article>
                <h4>Number of orders</h4>
                <p>{quantityOfOrders}</p>
            </article>
        </div>
    );
};

export default UserDetails;
