import { useState } from "react";
import Button from "../../components/Form/Button";
import CheckboxInput from "../../components/Form/CheckboxInput";
import DateInput from "../../components/Form/DateInput";
import RadioInput from "../../components/Form/RadioInput";
import SelectInput from "../../components/Form/SelectInput/SelectInput";
import TextInput from "../../components/Form/TextInput";
import styles from "./ExpenseForm.module.scss";

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

    return <form className={styles.form}>
        <div>
            <TextInput labelText="Valor" />
            <TextInput labelText="Descrição" />
            <SelectInput labelText="Categoria" />
            <fieldset>
                <legend>Tipo</legend>
                <RadioInput inputName="expense-type" labelText="Variável" />
                <RadioInput inputName="expense-type" labelText="Fixa" />
            </fieldset>
            <fieldset>
                <CheckboxInput label="Com vencimento" />
                <DateInput />
            </fieldset>
        </div>
        <Button type="submit" primary>Salvar</Button>
    </form>;
}

export default ExpenseForm;
