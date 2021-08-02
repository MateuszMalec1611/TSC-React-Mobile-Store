import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
interface ParamTypes {
    productName: string;
}

const ProductDetail: React.FC = () => {
    const { productName } = useParams<ParamTypes>();

    return <motion.div {...pageTransitionFM}>{productName}</motion.div>;
};

export default ProductDetail;
