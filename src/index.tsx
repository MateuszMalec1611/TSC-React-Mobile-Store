import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MobileStore from './MobileStore';
import store from './store/Store';
import './index.css';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <React.StrictMode>
            <Provider store={store}>
                <MobileStore />
            </Provider>
        </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
);
