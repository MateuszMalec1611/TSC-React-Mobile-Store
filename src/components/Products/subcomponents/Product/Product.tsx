import { useHistory } from 'react-router-dom';
import styles from './Product.module.css';

export interface ProductProps {
    name: string;
    img: string;
    price: number;
}

const Product: React.FC<ProductProps> = ({ name, img, price }) => {
    const history = useHistory();
    console.log(name);

    const handleProductDetail = () => history.push(`/product/${name.trim()}`);

    return (
        <li onClick={handleProductDetail} className={styles.product}>
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
