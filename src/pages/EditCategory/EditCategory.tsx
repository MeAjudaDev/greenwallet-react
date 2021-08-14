import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "../../api/v1/api";
import { Category } from "../../types/Category";
import { TransactionType } from "../../types/TransactionType";

interface EditCategoryProps {
    id: number;
    title: string;
}

export default function EditCategory({ id, title }: EditCategoryProps) {
    const [category, setCategory] = useState<Category>({
        id: 0,
        name: "",
        type: TransactionType.Expense,
        enabled: true
    });

    useEffect(() => {
        getCategoryById(id).then((category) => {
            setCategory(category.data);
        });
    }, [id]);

    function handleTextInputChange(event: ChangeEvent<HTMLInputElement>) {
        const element = event.target;

        setCategory((prevState) => ({
            ...prevState,
            [element.name]: element.value
        }));
    }

    function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        const element = event.target;

        setCategory((prevState) => ({
            ...prevState,
            enabled: element.checked
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
                        checked={category?.enabled}
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
