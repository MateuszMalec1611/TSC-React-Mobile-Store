import { AnimatePresence } from 'framer-motion';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import Home from '@pages/Home/Home';
import Layout from '@components/layout/Layout';
import OrderForm from '@pages/FormOrder/FormOrder';
import ProductDetail from '@pages/ProductDetail/ProductDetail';
import StartingPage from '@pages/StartingPage/StartingPage';
import Profile from '@pages/Profile/Profile';

const MobileStore: React.FC = () => {
    const location = useLocation();
    const isOrdering = useSelector((state: RootStore) => state.mobileStore.isOrdering);

    return (
        <AnimatePresence exitBeforeEnter>
            <Layout>
                <Switch location={location}>
                    <Route path="/" exact>
                        <StartingPage />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/product/:productName">
                        <ProductDetail />
                    </Route>
                    <Route path="/ordering/:productName">
                        {isOrdering ? <OrderForm /> : <Redirect to="/home" />}
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="*">
                        <p>not found</p>
                    </Route>
                </Switch>
            </Layout>
        </AnimatePresence>
    );
};

export default MobileStore;
