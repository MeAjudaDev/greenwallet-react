import { useState } from "react";

import Header from '../../components/Header';

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

    return (
        <>
            <Header className={styles.header} title={title} />
            <form action="#" className={`container ${styles.form} ${styles.twoColumns}`}>
                <label className={`${styles.transactionValue} ${styles.twoColumns}`}>
                    <sup>R$</sup>
                    <input
                        type="number"
                        name="value"
                        id="value"
                        value={value}
                        onChange={handleValueChange}
                    />
                </label>
                <label className={`${styles.transactionDescription} ${styles.twoColumns}`}>
                    <strong>Descrição</strong>
                    <TextInput
                        autoFocus
                        onChange={handleDescriptionChange}
                        placeholder="Descrição"
                        value={description}
                    />
                </label>
                <fieldset className={`${styles.categories}`}>
                    <strong>Categoria</strong>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="alimentacao"
                            checked={category === "alimentacao"}
                            onChange={handleCategoryChange}
                        />
                        <span>Alimentação</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="casa"
                            checked={category === "casa"}
                            onChange={handleCategoryChange}
                        />
                        <span>Casa</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="transporte"
                            checked={category === "transporte"}
                            onChange={handleCategoryChange}
                        />
                        <span>Transporte</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="estudo"
                            checked={category === "estudo"}
                            onChange={handleCategoryChange}
                        />
                        <span>Estudo</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="saude"
                            checked={category === "saude"}
                            onChange={handleCategoryChange}
                        />
                        <span>Saúde</span>
                    </label>
                </fieldset>
                <fieldset className={`${styles.expenseType}`}>
                    <strong>Tipo</strong>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="variavel"
                            checked={type === "variavel"}
                            onChange={handleTypeChange}
                        />
                        <span>Variável</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="fixo"
                            checked={type === "fixo"}
                            onChange={handleTypeChange}
                        />
                        <span>Fixo</span>
                    </label>
                </fieldset>
                <label className={`${styles.hasExpiration} ${styles.twoColumns}`}>
                    <input
                        type="checkbox"
                        value="com-vencimento"
                        checked={hasExpiration}
                        onChange={() => setHasExpiration(!hasExpiration)}
                    />
                    <span>Com vencimento</span>
                </label>
                <input
                    className={`${styles.twoColumns} ${styles.expirationDate}`}
                    type="date"
                    name="expiration"
                    id="expiration"
                    value={expirationDate}
                    onChange={handleDateChange}
                />
                <button
                    className={`${styles.twoColumns} ${styles.button} bgSuccess`}
                    type="submit"
                >
                    Salvar
                </button>
                {isEditing && (
                    <button
                        className={`${styles.twoColumns} ${styles.button} bgDanger`}
                        type="button"
                    >
                        Excluir
                    </button>
                )}
                <button
                    className={`${styles.twoColumns} ${styles.button} bgDark`}
                    type="button"
                >
                    Voltar
                </button>
            </form>
        </>
    );
}

export default ExpenseForm;
