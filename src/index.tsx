import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import MobileStore from './MobileStore';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <MobileStore />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
