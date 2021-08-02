import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootStore } from '@store/Store';
import pageTransitionFM from '@pages/pageTransition';
import Button from '@components/Ui/Button/Button';
import styles from './ProductDetail.module.css';
import { useEffect } from 'react';
import { GetProductDetail } from '@store/Services/MobileStore.services';
interface ParamTypes {
    productName: string;
}

const ProductDetail: React.FC = () => {
    const { productName } = useParams<ParamTypes>();
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector((state: RootStore) => state.products.productDetail);

    useEffect(() => {
        dispatch(GetProductDetail(productName));
    }, [dispatch, productName]);

    const handleForm = () => history.push('/form');

    return (
        <motion.div {...pageTransitionFM} className={styles.productDetail}>
            <h2>{product?.name}</h2>
            <img src={product?.img} alt={productName} />
            <article>
                <h4>Price</h4>
                <p>{product?.price}$</p>
            </article>
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
            <Button click={handleForm}>Order</Button>
        </motion.div>
    );
};

export default ProductDetail;
