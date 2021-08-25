import { useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "../../api/v1/expenses";
import TextInput from "../../components/Form/TextInput";
import RadioInput from "../../components/Form/RadioInput";
import Button from "../../components/Form/Button";
import styles from "./EditCategory.module.scss";

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

    function handleSubmit(event) {
        event.preventDefault();
        updateCategory(category).then((response) => {
            console.log("Enviou dados");
            console.log(response);
        });
    }

    return (
        <form 
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div className={styles.formContainer}>
                <TextInput                  
                    labelText="Descrição" 
                    onChange={handleTextInputChange}
                />
                <fieldset>
                    <legend>Tipo</legend>
                    <div className={styles.formRadioInputContainer}>
                        <RadioInput inputName="expense-type" labelText="Despesa" checked />
                    </div>
                    <div className={styles.formRadioInputContainer}>
                        <RadioInput inputName="expense-type" labelText="Receita" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Status</legend>
                    <div className={styles.formRadioInputContainer}>
                        <RadioInput inputName="expense-status" labelText="Habilitado" checked />
                    </div>
                    <div className={styles.formRadioInputContainer}>
                        <RadioInput inputName="expense-status" labelText="Desabilitado" />
                    </div>
                </fieldset>
            </div>
            <div className={styles.formButtonsContainer}>
                <Button type="submit" primary>Salvar</Button>
                <Button type="submit" secondary>Voltar</Button>
            </div>
        </form>
    );
}
