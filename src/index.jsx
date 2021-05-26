import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ExpenseForm from "./ExpenseForm";
import ListCategories from "./ListCategories";
import ListExpenses from "./ListExpenses";

ReactDOM.render(
    <React.StrictMode>
        <ExpenseForm title="Editar Despesa" isEditing={true} />
        <ExpenseForm title="Nova Despesa" />
        <ListCategories title="Despesas" />
        <ListExpenses title="Despesas" group="Casa" />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
