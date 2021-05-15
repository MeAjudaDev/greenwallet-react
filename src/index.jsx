import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RegisterExpenses from "./RegisterExpenses";
import EditExpense from "./EditExpense";

ReactDOM.render(
    <React.StrictMode>
        <RegisterExpenses />
        <EditExpense title="Editar Despesa" />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
