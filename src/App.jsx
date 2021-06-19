import React from "react";
import { BrowserRouter, Switch as Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EditCategory from "./pages/EditCategory";
import ExpenseForm from "./pages/ExpenseForm";
import ListCategories from "./pages/ListCategories";
import ListExpenses from "./pages/ListExpenses";
import ExportModal from './components/ExportModal';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/edit-category">
                    <EditCategory title="Editar Categoria" id={1} />
                </Route>
                <Route path="/edit-expense">
                    <ExpenseForm title="Editar Despesa" isEditing={true} />
                </Route>
                <Route path="/new-expense">
                    <ExpenseForm title="Nova Despesa" />
                </Route>
                <Route path="/">
                    <ExportModal/>
                </Route>
                <Route path="/list-category">
                    <ListCategories title="Despesas" />
                </Route>
                <Route path="/list-expenses">
                    <ListExpenses title="Despesas" group="Casa" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
