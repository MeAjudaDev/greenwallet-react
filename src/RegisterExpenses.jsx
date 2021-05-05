import React, { useState } from "react";
import "./RegisterExpenses.css";

function RegisterExpenses() {
    const [type, setType] = useState("variavel");

    const handleChange = ({ target }) => {
        setType(target.value);
    };

    return (
        <div>
            <header>
                <h1>Nova Despesa</h1>
            </header>
            <form action="#" className="registerForm">
                <label>
                    <span>R$</span>
                    <input type="number" name="value" id="value" />
                </label>
                <label>
                    <span>Descrição</span>
                    <input type="text" autoFocus name="description" />
                </label>
                <fieldset>
                    <legend>Categoria</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="alimentacao"
                            value="alimentacao"
                        />
                        <span>Alimentação</span>
                    </label>
                    <label>
                        <input type="checkbox" name="casa" value="casa" />
                        <span>Casa</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="transporte"
                            value="transporte"
                        />
                        <span>Transporte</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="conhecimento"
                            value="conhecimento"
                        />
                        <span>Conhecimento</span>
                    </label>
                    <label>
                        <input type="checkbox" name="saude" value="saude" />
                        <span>Saúde</span>
                    </label>
                    <label>
                        <input type="checkbox" name="lazer" value="lazer" />
                        <span>Lazer</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="diversos"
                            value="diversos"
                        />
                        <span>Diversos</span>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Tipo</legend>
                    <label>
                        <input
                            type="radio"
                            name="grupo-radio"
                            value="variavel"
                            checked={type === "variavel"}
                            onChange={handleChange}
                        />
                        <span>Variável</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="grupo-radio"
                            value="fixo"
                            checked={type === "fixo"}
                            onChange={handleChange}
                        />
                        <span>Fixo</span>
                    </label>
                </fieldset>
                <label>
                    <input
                        type="checkbox"
                        value="com-vencimento"
                        defaultChecked
                    />
                    <span>Com vencimento</span>
                </label>
                <input type="date" name="expiration" id="expiration" />
                <button type="submit">Salvar</button>
                <button type="button">Voltar</button>
            </form>
        </div>
    );
}

export default RegisterExpenses;
