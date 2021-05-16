import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListCategories from './ListCategories';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <ListCategories title='Despesas' />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
