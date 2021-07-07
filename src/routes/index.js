import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditCategory from "../pages/EditCategory";
import ListCategories from "../pages/ListCategories";
import ExpenseForm from "../pages/ExpenseForm";
import ListExpenses from "../pages/ListExpenses";
import ExportModal from "../components/ExportModal";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/category/edit">
                    <EditCategory title="Editar Categoria" id={1} />
                </Route>
                <Route path="/category/list">
                    <ListCategories title="Despesas" />
                </Route>
                <Route path="/expense/edit">
                    <ExpenseForm title="Editar Despesa" isEditing={true} />
                </Route>
                <Route path="/expenses/list">
                    <ListExpenses title="Despesas" group="Casa" />
                </Route>
                <Route path="/modal">
                    <ExportModal />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
