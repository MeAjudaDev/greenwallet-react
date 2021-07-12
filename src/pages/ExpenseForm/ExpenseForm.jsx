import { useState } from "react";

import Header from '../../components/Header';

import TextInput from "../../components/Form/TextInput";
import CheckboxInput from "../../components/Form/CheckboxInput";

import styles from "./ExpenseForm.module.scss";
import SelectInput from "../../components/Form/SelectInput/SelectInput";

function ExpenseForm({ title, isEditing = false }) {
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("alimentacao");
    const [type, setType] = useState("variavel");
    const [hasExpiration, setHasExpiration] = useState(true);
    const [expirationDate, setExpirationDate] = useState("");

    const handleValueChange = ({ target }) => {
        setValue(target.value);
    };

    const handleDescriptionChange = ({ target }) => {
        setDescription(target.value);
    };

    const handleCategoryChange = ({ target }) => {
        setCategory(target.value);
    };

    const handleTypeChange = ({ target }) => {
        setType(target.value);
    };

    const handleDateChange = ({ target }) => {
        setExpirationDate(target.value);
    };

    return <>
        <Header title={title} />
        <form className={styles.form}>
            <TextInput labelText="Valor" />
            <TextInput labelText="Descrição" />
            <SelectInput labelText="Categoria" />
            <fieldset>
                <label>
                    
                </label>
            </fieldset>
        </form>
    </>;
}

export default ExpenseForm;
