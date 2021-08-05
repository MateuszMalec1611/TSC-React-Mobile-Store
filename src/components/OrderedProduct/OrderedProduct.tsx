import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import { Product, UserData } from '@store/MobileStore/MobileStore.actions';
import { CancelOrder } from '@store/MobileStore/MobileStore.services';
import { UpdateUser } from '@store/User/User.services';
import Button from '@components/Ui/Button/Button';
import Loader from '@components/Ui/Loader/Loader';
import styles from './OrderedProduct.module.css';

export interface OrderedProductProps {
    id: string;
    productInfo: Product;
    userData: UserData;
}

const OrderedProduct: React.FC<OrderedProductProps> = ({ id, productInfo, userData }) => {
    const loading = useSelector((state: RootStore) => state.mobileStore.loading);
    const { totalAmount, quantityOfOrders } = useSelector((state: RootStore) => state.user);
    const dispatch = useDispatch();

    const handleCancelOrder = () => {
        const newTotalAmount = totalAmount - productInfo.price;
        const newQuantityOfOrders = quantityOfOrders - 1;

        dispatch(CancelOrder(id));
        dispatch(UpdateUser(newTotalAmount, newQuantityOfOrders));
    };

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
                    <p>{userData.date.replace('T', ' ')}</p>
                </article>
                <Button click={handleCancelOrder}>cancel the order</Button>
            </div>
        </>
    );

    return (
        <div className={`${styles.orderedProduct} showSlower`}>{loading ? <Loader /> : orderedProduct}</div>
    );
};

export default OrderedProduct;
