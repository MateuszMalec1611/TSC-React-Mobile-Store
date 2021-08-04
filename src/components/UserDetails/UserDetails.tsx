import styles from './UserDetails.module.css';

export interface UserDetailsProps {}

const UserDetails: React.FC<UserDetailsProps> = () => {
    return (
        <div className={styles.detailsBox}>
            <article>
                <h4>Total amount of orders</h4>
                <p>4500 $</p>
            </article>
            <article>
                <h4>Number of orders</h4>
                <p>3</p>
            </article>
        </div>
    );
};

export default UserDetails;
