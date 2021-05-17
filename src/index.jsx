import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RegisterExpenses from "./RegisterExpenses";
import EditExpense from "./EditExpense";
import ListExpenses from './ListExpenses';

ReactDOM.render(
    <React.StrictMode>
        <RegisterExpenses />
        <EditExpense title="Editar Despesa" />
        <ListExpenses title="Despesas" group="Casa"/>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
