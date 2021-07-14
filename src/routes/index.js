import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditCategory from "../pages/EditCategory";
import ListCategories from "../pages/ListCategories";
import ExpenseForm from "../pages/ExpenseForm";
import ListExpenses from "../pages/ListExpenses";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/categoria/editar">
                    <EditCategory title="Editar Categoria" id={1} />
                </Route>
                <Route path="/categoria/listar">
                    <ListCategories title="Categorias" />
                </Route>
                <Route path="/despesa/editar">
                    <ExpenseForm title="Editar Despesa" isEditing={true} />
                </Route>
                <Route path="/despesas/listar">
                    <ListExpenses title="Despesas" group="Casa" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
