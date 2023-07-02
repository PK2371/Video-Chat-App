import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { ContextProvider } from './Context.js';

import './styles.css';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root'),
);