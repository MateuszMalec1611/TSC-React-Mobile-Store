import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootStore } from '@store/Store';
import pageTransitionFM from '@pages/pageTransition';
import styles from './ProductDetail.module.css';
interface ParamTypes {
    productName: string;
}

const ProductDetail: React.FC = () => {
    const { productName } = useParams<ParamTypes>();
    const product = useSelector((state: RootStore) => state.products.productDetail);

    return (
        <motion.div {...pageTransitionFM} className={styles.productDetail}>
            <h2>{product?.name}</h2>
            <img src={product?.img} alt={productName} />
            <article>
                <h4>Display</h4>
                <p>{product?.display}</p>
            </article>
            <article>
                <h4>Processor</h4>
                <p>{product?.processor}</p>
            </article>
            <article>
                <h4>RAM</h4>
                <p>{product?.ram}</p>
            </article>
        </motion.div>
    );
};

export default ProductDetail;
