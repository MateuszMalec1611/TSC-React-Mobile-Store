import { Product, UserData } from '@store/Actions/MobileStore.actions';
import styles from './OrderedProduct.module.css';

export interface OrderedProductProps {
    id: string;
    productInfo: Product;
    userData: UserData;
}

const OrderedProduct: React.FC<OrderedProductProps> = ({ id, productInfo, userData }) => {
    const date = userData.date.slice(0, 32);

    return (
        <div className={styles.orderedProduct}>
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
            </div>
        </div>
    );
};

export default OrderedProduct;
