import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListExpenses from './ListExpenses';
import EditCategory from './EditCategory';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <ListExpenses title="Despesas" group="Casa"/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
