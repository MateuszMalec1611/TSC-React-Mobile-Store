import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RootStore } from '@store/Store';
import Greeting from './pages/Greeting/Greeting';
import Home from './pages/Home/Home';
import Layout from '@components/layout/Layout';
import ProductDetail from '@pages/ProductDetail/ProductDetail';
import Loader from '@components/Ui/Loader/Loader';

const MobileStore: React.FC = () => {
    const location = useLocation();
    const loading = useSelector((state: RootStore) => state.products.loading);
    console.log(loading);

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location}>
                <Route path="/" exact>
                    <Greeting />
                </Route>
                <Layout>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/product/:productName">{loading ? <Loader /> : <ProductDetail />}</Route>
                </Layout>
            </Switch>
        </AnimatePresence>
    );
};

export default MobileStore;
