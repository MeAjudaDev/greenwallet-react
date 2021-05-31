import { useEffect, useState } from "react";
import { getCategoryById } from "./api/v1/expenses";
import "./EditCategory.css";

function EditCategory({ id, title }) {
    const [category, setCategory] = useState({});

    useEffect(() => {
        getCategoryById(id).then((category) => {
            setCategory(category);
        });
    }, [id]);

    function handleTextInputChange(event) {
        const element = event.target;

        setCategory((prevState) => {
            setCategory({
                ...prevState,
                [element.name]: element.value,
            });
        });
    }

    function handleCheckboxChange(event) {
        const element = event.target;

        setCategory((prevState) => {
            setCategory({
                ...prevState,
                state: element.checked ? "A" : "D",
            });
        });
    }

    return (
        <div className="container">
            <h1>{title}</h1>
            <label id="description">
                Descrição
                <br />
                <input
                    onChange={handleTextInputChange}
                    type="input"
                    name="name"
                    value={category?.name}
                />
            </label>
            <label id="enabled">
                Habilitado?
                <br />
                <input
                    onChange={handleCheckboxChange}
                    checked={category?.state === "A"}
                    name="state"
                    type="checkbox"
                />
            </label>
            <button className="buttonCancelar">Cancelar</button>
            <button className="buttonSalvar">Salvar</button>
        </div>
    );
}

export default EditCategory;
