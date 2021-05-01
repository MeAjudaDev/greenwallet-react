import React from "react";

function RegisterExpenses() {
    const [type, setType] = React.useState("variavel");

    const handleChange = ({ target }) => {
        setType(target.value);
    };

    return (
        <div>
            <header>
                <span>Plataforma de Gestão Financeira Pessoal</span>
            </header>
            <section className="">
                <main>
                    <h1>Cadastrar Despesa</h1>
                    <div className="">
                        <h2>Valor R$</h2>
                        <span>0,00</span>
                    </div>
                    <form action="">
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
                        <div>
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
                                        checked
                                    />
                                    <span>Com vencimento</span>
                                </label>
                            </fieldset>
                        </div>
                    </form>
                </main>
            </section>
        </div>
    );
}

export default RegisterExpenses;
