import React from "react";
import "./RegisterExpenses.css";

function RegisterExpenses() {
    const [type, setType] = React.useState("variavel");

    const handleChange = ({ target }) => {
        setType(target.value);
    };

    return (
        <div>
            <header>
                <h1>Nova Despesa</h1>
            </header>
            <section className="">
                <main>
                    <form action="#" className="registerForm">
                        <div className="">
                            <span>R$</span>
                            <input type="number" name="value" id="value" />
                        </div>

                        <div className="">
                            <fieldset>
                                <label>
                                    <h2>Descrição</h2>
                                    <input
                                        type="text"
                                        autoFocus
                                        name="description"
                                    />
                                </label>
                            </fieldset>
                            <div className="registerForm__options">
                                <fieldset>
                                    <h2>Categoria</h2>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="alimentacao"
                                            value="alimentacao"
                                        />
                                        <span>Alimentação</span>
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="casa"
                                            value="casa"
                                        />
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
                                        <input
                                            type="checkbox"
                                            name="saude"
                                            value="saude"
                                        />
                                        <span>Saúde</span>
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="lazer"
                                            value="lazer"
                                        />
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
                                    <h2>Tipo</h2>
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
                                <fieldset>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="com-vencimento"
                                            defaultChecked
                                        />
                                        <span>Com vencimento</span>
                                    </label>
                                </fieldset>
                            </div>
                            <div className="registerForm__expiration">
                                <span>08/04/2021</span>
                            </div>
                        </div>
                        <div className="registerForm__buttons">
                            <button type="submit">Salvar</button>
                            <button type="button">Voltar</button>
                        </div>
                    </form>
                </main>
            </section>
        </div>
    );
}

export default RegisterExpenses;
