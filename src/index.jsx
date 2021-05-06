import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EditExpenses from './EditExpenses';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <EditExpenses title="Despesas"/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
