import Navbar from "./Navbar";

function RegisterExpenses() {
    return (
        <div>
            <header>
                <span>Plataforma de Gestão Financeira Pessoal</span>
            </header>
            <Navbar />
            <section className="">
                <main>
                    <h1>Cadastrar Despesa</h1>
                    <div className="">
                        <h2>Valor R$</h2>
                        <span>0,00</span>
                    </div>
                    <form action="">
                        <fieldset>
                            <label htmlFor="description">
                                <h2>Descrição</h2>
                                <input
                                    type="text"
                                    autoFocus
                                    name="description"
                                />
                            </label>
                        </fieldset>
                        <fieldset>
                            <h2>Categoria</h2>
                            <label htmlFor="alimentacao">
                                <input
                                    type="checkbox"
                                    name="alimentacao"
                                    value="alimentacao"
                                />
                                <span>Alimentação</span>
                            </label>
                            <label htmlFor="casa">
                                <input
                                    type="checkbox"
                                    name="casa"
                                    value="casa"
                                />
                                <span>Casa</span>
                            </label>
                            <label htmlFor="transporte">
                                <input
                                    type="checkbox"
                                    name="transporte"
                                    value="transporte"
                                />
                                <span>Transporte</span>
                            </label>
                            <label htmlFor="conhecimento">
                                <input
                                    type="checkbox"
                                    name="conhecimento"
                                    value="conhecimento"
                                />
                                <span>Conhecimento</span>
                            </label>
                            <label htmlFor="saude">
                                <input
                                    type="checkbox"
                                    name="saude"
                                    value="saude"
                                />
                                <span>Saúde</span>
                            </label>
                            <label htmlFor="lazer">
                                <input
                                    type="checkbox"
                                    name="lazer"
                                    value="lazer"
                                />
                                <span>Lazer</span>
                            </label>
                            <label htmlFor="diversos">
                                <input
                                    type="checkbox"
                                    name="diversos"
                                    value="diversos"
                                />
                                <span>Diversos</span>
                            </label>
                        </fieldset>
                    </form>
                </main>
            </section>
        </div>
    );
}

export default RegisterExpenses;
