import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import { Product, UserData } from '@store/MobileStore/MobileStore.actions';
import Button from '@components/Ui/Button/Button';
import styles from './OrderedProduct.module.css';
import Loader from '@components/Ui/Loader/Loader';
import { CancelOrder } from '@store/MobileStore/MobileStore.services';

export interface OrderedProductProps {
    id: string;
    productInfo: Product;
    userData: UserData;
}

const OrderedProduct: React.FC<OrderedProductProps> = ({ id, productInfo, userData }) => {
    const loading = useSelector((state: RootStore) => state.mobileStore.loading);
    const dispatch = useDispatch();
    const date = userData.date.slice(0, 32);

    const handleCancelOrder = () => dispatch(CancelOrder(id));

    const orderedProduct = (
        <>
            <img src={productInfo.img} alt={productInfo.name} />
            <div>
                <article className={styles.titleDetail}>
                    <h3>{productInfo.name}</h3>
                    <p>{productInfo.price} $</p>
                </article>
                <article>
                    <h4>Delivery address</h4>
                    <p>City: {userData.city}</p>
                    <p>Postal Code: {userData.postalCode}</p>
                </article>
                <article>
                    <h4>The recipient's details</h4>
                    <p>Name: {userData.name}</p>
                    <p>emial: {userData.email}</p>
                </article>
                <article>
                    <h4>Date of order:</h4>
                    <p>{date}</p>
                </article>
                <Button click={handleCancelOrder}>cancel the order</Button>
            </div>
        </>
    );

    return <div className={styles.orderedProduct}>{loading ? <Loader /> : orderedProduct}</div>;
};

export default OrderedProduct;
