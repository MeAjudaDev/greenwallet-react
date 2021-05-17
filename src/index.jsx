import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RegisterExpenses from "./RegisterExpenses";
import EditExpense from "./EditExpense";
import ListCategories from "./ListCategories";

ReactDOM.render(
    <React.StrictMode>
        <RegisterExpenses />
        <EditExpense title="Editar Despesa" />
        <ListCategories title="Despesas" />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();