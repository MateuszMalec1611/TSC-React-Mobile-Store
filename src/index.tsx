import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MobileStore from './MobileStore';
import store from './store/Store';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <MobileStore />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
