import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ExpenseForm from "./pages/ExpenseForm";
import ListCategories from "./pages/ListCategories";
import ListExpenses from "./pages/ListExpenses";
import EditCategory from "./pages/EditCategory";
import Menu from "./components/Menu";

ReactDOM.render(
    <React.StrictMode>
        <Menu />
        <ExpenseForm title="Editar Despesa" isEditing={true} />
        <ExpenseForm title="Nova Despesa" />
        <ListCategories title="Despesas" />
        <ListExpenses title="Despesas" group="Casa" />
        <EditCategory title="Editar Categoria" id={1} />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
