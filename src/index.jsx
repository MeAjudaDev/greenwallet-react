import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import EditExpense from "./EditExpense";
import ListCategories from "./ListCategories";
import ListExpenses from "./ListExpenses";

ReactDOM.render(
    <React.StrictMode>
        <EditExpense title="Editar Despesa" isEditing={true} />
        <EditExpense title="Nova Despesa" />
        <ListCategories title="Despesas" />
        <ListExpenses title="Despesas" group="Casa" />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
