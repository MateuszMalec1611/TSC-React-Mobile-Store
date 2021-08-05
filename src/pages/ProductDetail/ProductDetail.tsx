import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootStore } from '@store/Store';
import pageTransitionFM from '@pages/pageTransition';
import { GetData } from '@store/MobileStore/MobileStore.services';
import { GET_PRODUCT_DETAIL, IS_ORDERING } from '@store/MobileStore/MobileStore.actions';
import Button from '@components/Ui/Button/Button';
import Loader from '@components/Ui/Loader/Loader';
import styles from './ProductDetail.module.css';
import ErrorModal from '@components/Ui/ErrorModal/ErrorModal';
export interface ParamTypes {
    productName: string;
}

const ProductDetail: React.FC = () => {
    const { productName } = useParams<ParamTypes>();
    const dispatch = useDispatch();
    const history = useHistory();
    const { productDetail: product, loading, error } = useSelector((state: RootStore) => state.mobileStore);

    useEffect(() => {
        dispatch(GetData(`/products-description/${productName}`, GET_PRODUCT_DETAIL, false));
    }, [dispatch, productName]);

    const handleForm = () => {
        dispatch({ type: IS_ORDERING, payload: true });
        history.push(`/ordering/${productName}`);
    };

    const productDetails = (
        <div className="showSlower">
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
        </div>
    );

    return (
        <motion.div {...pageTransitionFM} className={styles.productDetail}>
            {loading ? <Loader /> : productDetails}
            {!loading && error !== '' ? <ErrorModal /> : null}
        </motion.div>
    );
};

export default ProductDetail;
