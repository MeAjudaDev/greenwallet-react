import { Route, Switch } from "react-router-dom";
import EditCategory from "../pages/EditCategory";
import ExpenseForm from "../pages/ExpenseForm";
import ListCategories from "../pages/ListCategories";
import ListExpenses from "../pages/ListExpenses";
import Home from "../pages/Home";

export default function Routes() {
    return <Switch>
        <Route path="/">
            <Home />
        </Route>
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
    </Switch>;
}
