import { useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "../../api/v1/expenses";

export default function EditCategory({ id, title }) {
    const [category, setCategory] = useState({
        name: "",
        state: "",
    });

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

    function handleSubmit(event) {
        event.preventDefault();
        updateCategory(category).then((response) => {
            console.log("Enviou dados");
            console.log(response);
        });
    }

    return (
        <>
            <h1>{title}</h1>
            <form
                action="#"
                className="newCategoryForm twoColumns"
                onSubmit={handleSubmit}
            >
                <label id="description">
                    Descrição<br />
                    <input
                        onChange={handleTextInputChange}
                        type="text"
                        name="name"
                        value={category?.name}
                    />
                </label>
                <label id="enabled">
                    Habilitado?<br />
                    <input
                        onChange={handleCheckboxChange}
                        checked={category?.state === "A"}
                        name="state"
                        type="checkbox"
                    />
                </label>
                <button className="buttonCancelar">Cancelar</button>
                <button type="submit" className="buttonSalvar">Salvar</button>
            </form>
        </>
    );
}
