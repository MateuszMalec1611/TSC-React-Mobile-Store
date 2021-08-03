import { AnimatePresence } from 'framer-motion';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import { IS_ORDERING } from '@store/Actions/MobileStore.actions';
import Home from '@pages/Home/Home';
import Layout from '@components/layout/Layout';
import OrderForm from '@pages/FormOrder/FormOrder';
import ProductDetail from '@pages/ProductDetail/ProductDetail';
import StartingPage from '@pages/StartingPage/StartingPage';

const MobileStore: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isOrdering = useSelector((state: RootStore) => state.mobileStore.isOrdering);

    const pathName = location.pathname;
    if (pathName.search('/ordering') === -1) dispatch({ type: IS_ORDERING, payload: false });

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
                    <Route path="*">
                        <p>not found</p>
                    </Route>
                </Switch>
            </Layout>
        </AnimatePresence>
    );
};

export default MobileStore;
