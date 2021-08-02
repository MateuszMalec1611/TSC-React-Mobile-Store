import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import styles from './ProductDetail.module.css';

const productDetail = {
    name: 'Iphone 11',
    display: ' 6.1", 1792 x 828px, LCD',
    processor: 'Apple A13 Bionic',
    ram: '4 GB',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418',
};

interface ParamTypes {
    productName: string;
}

const ProductDetail: React.FC = () => {
    const { productName } = useParams<ParamTypes>();

    return (
        <motion.div {...pageTransitionFM} className={styles.productDetail}>
            <h2>{productDetail.name}</h2>
            <img src={productDetail.img} alt={productName} />
            <article>
                <h4>Display</h4>
                <p>{productDetail.display}</p>
            </article>
            <article>
                <h4>Processor</h4>
                <p>{productDetail.processor}</p>
            </article>
            <article>
                <h4>RAM</h4>
                <p>{productDetail.ram}</p>
            </article>
        </motion.div>
    );
};

export default ProductDetail;
