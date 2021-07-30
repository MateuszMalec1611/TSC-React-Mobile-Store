import { Route, Switch } from 'react-router-dom';
import Greeting from './pages/Greeting/Greeting';
import Home from './pages/Home/Home';
import Layout from '@components/layout/Layout';

const MobileStore = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Greeting />
                </Route>
                <Layout>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Layout>
            </Switch>
        </>
    );
};

export default MobileStore;
