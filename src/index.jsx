import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EditExpense from './EditExpense';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <EditExpense title="Editar Despesa"/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
