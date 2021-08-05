import { useHistory } from 'react-router-dom';
import styles from './Product.module.css';

export interface ProductProps {
    name: string;
    img: string;
    price: number;
    id: string;
    visible?: boolean;
}

const Product: React.FC<ProductProps> = ({ name, img, price, id, visible }) => {
    const history = useHistory();

    const handleProductDetail = () => history.push(`/product/${id}`);

    return (
        <li
            style={visible ? { display: 'block' } : { display: 'none' }}
            onClick={handleProductDetail}
            className={`${styles.product} showSlower`}>
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
