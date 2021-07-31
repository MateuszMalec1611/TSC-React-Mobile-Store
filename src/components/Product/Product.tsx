import styles from './Product.module.css';

export interface ProductProps {
    name: string;
    description: string;
    img: string;
    price: number;
}

const Product: React.FC<ProductProps> = ({ name, img, description, price }) => {
    return (
        <li className={styles.product}>
            <div>
                <article>
                    <h4>{name}</h4>
                    <p>{price} $</p>
                </article>
                <img src={img} alt="1234" />
            </div>
        </li>
    );
};

export default Product;
