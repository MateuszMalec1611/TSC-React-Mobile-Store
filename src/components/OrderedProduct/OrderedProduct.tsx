import styles from './OrderedProduct.module.css';

export interface OrderedProductProps {}

const OrderedProduct: React.FC = () => {
    return (
        <div className={styles.orderedProduct}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IPhone_11_White.svg/299px-IPhone_11_White.svg.png"
                alt="Iphone11"
            />
            <div>
                <article className={styles.titleDetail}>
                    <h3>Iphone 11</h3>
                    <p>699 $</p>
                </article>
                <article>
                    <h4>Delivery address</h4>
                    <p>City: Zbylitowska Góra</p>
                    <p>Postal Code: 33-113</p>
                </article>
                <article>
                    <h4>The recipient's details</h4>
                    <p>Name: Mateusz Malec</p>
                    <p>emial: m.mateusz2000@wp.pl</p>
                </article>
                <article>
                    <h4>Date of order:</h4>
                    <p> wtorek, 3 sierpnia 2021 20:51:57</p>
                </article>
            </div>
        </div>
    );
};

export default OrderedProduct;
