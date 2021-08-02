import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import Greeting from './pages/StartingPage/StartingPage';
import Home from './pages/Home/Home';
import Layout from '@components/layout/Layout';
import ProductDetail from '@pages/ProductDetail/ProductDetail';
import OrderForm from '@pages/FormOrder/FormOrder';

const MobileStore: React.FC = () => {
    const location = useLocation();

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
                    <Route path="/product/:productName">
                        <ProductDetail />
                    </Route>
                    <Route path="/form/:productName">
                        <OrderForm />
                    </Route>
                </Layout>
            </Switch>
        </AnimatePresence>
    );
};

export default MobileStore;
