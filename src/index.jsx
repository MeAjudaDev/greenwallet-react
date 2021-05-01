import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EditCategory from "./EditCategory";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <EditCategory title="Nova Categoria De Despesas" />
        <EditCategory title="Editar Categoria De Despesas" />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
