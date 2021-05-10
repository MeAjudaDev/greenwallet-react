import React, { useState } from "react";
import "./RegisterExpenses.css";

function RegisterExpenses() {
    const [type, setType] = useState("variavel");
    const [category, setCategory] = useState("alimentacao");
    const [hasExpiration, setHasExpiration] = useState(true);

    const handleCategoryChange = ({ target }) => {
        setCategory(target.value);
    };

    const handleTypeChange = ({ target }) => {
        setType(target.value);
    };

    return (
        <div className="container newExpenseContainer">
            <header className="newExpenseHeader twoColumns">
                <h1>Nova Despesa</h1>
                <img src="/images/avatar.svg" alt="avatar" />
            </header>
            <form action="#" className="newExpenseForm twoColumns">
                <label className="newExpenseForm__value twoColumns">
                    <sup>R$</sup>
                    <input type="number" name="value" id="value" />
                </label>
                <label className="newExpenseForm__description twoColumns">
                    <strong>Descrição</strong>
                    <input type="text" autoFocus name="description" />
                </label>
                <fieldset className="newExpenseForm__categories">
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
                        <input type="radio" name="category" value="casa" checked={category === "casa"}
                            onChange={handleCategoryChange} />
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
                        <input type="radio" name="category" value="estudo" checked={category === "estudo"}
                            onChange={handleCategoryChange} />
                        <span>Estudo</span>
                    </label>
                    <label>
                        <input type="radio" name="category" value="saude" checked={category === "saude"}
                            onChange={handleCategoryChange} />
                        <span>Saúde</span>
                    </label>
                </fieldset>
                <fieldset className="newExpenseForm__type">
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
                <label className="newExpenseForm__expiration twoColumns">
                    <input
                        type="checkbox"
                        value="com-vencimento"
                        checked={hasExpiration}
                        onChange={() => setHasExpiration(!hasExpiration)}
                    />
                    <span>Com vencimento</span>
                </label>
                    <input
                        className="twoColumns newExpenseForm__expirationdate"
                        type="date"
                        name="expiration"
                        id="expiration"
                    />
                <button
                    className="twoColumns newExpenseForm__button newExpenseForm__button--primary"
                    type="submit"
                >
                    Salvar
                </button>
                <button
                    className="twoColumns newExpenseForm__button newExpenseForm__button--secondary"
                    type="button"
                >
                    Voltar
                </button>
            </form>
        </div>
    );
}

export default RegisterExpenses;
