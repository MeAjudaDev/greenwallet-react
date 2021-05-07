import './EditExpense.css';

function EditExpenses(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <form method="post" action="#" className="editExpenseForm">
                <label className="twoColumns center">
                    <span>R$</span>
                    <input type="number" />
                </label>
                <label className="twoColumns">
                    <span>Descrição</span>
                    <input type="text" />
                </label>
                <fieldset>
                    <legend>Categoria</legend>
                    <label>
                        <input type="radio" name="category" />
                        <span>Alimentação</span>
                    </label>
                    <label>
                        <input type="radio" name="category" />
                        <span>Casa</span>
                    </label>
                    <label>
                        <input type="radio" name="category" />
                        <span>Transporte</span>
                    </label>
                    <label>
                        <input type="radio" name="category" />
                        <span>Conhecimento</span>
                    </label>
                    <label>
                        <input type="radio" name="category" />
                        <span>Saúde</span>
                    </label>
                    <label>
                        <input type="radio" name="category" />
                        <span>Lazer</span>
                    </label>
                    <label>
                        <input type="radio" name="category" />
                        <span>Diverso</span>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Tipo</legend>
                    <label>
                        <input type="radio" name="expense-type" />
                        <span>Fixa</span>
                    </label>
                    <label>
                        <input type="radio" name="expense-type" />
                        <span>variável</span>
                    </label>
                </fieldset>
                <label className="twoColumns">
                    <input type="checkbox" />
                    <span>Com Vencimento</span>
                </label>
                <input type="date" className="twoColumns center" />
                <button type="button" className="twoColumns">Cancelar</button>
                <button type="button" className="twoColumns">Salvar</button>
                <button type="button" className="twoColumns">Voltar</button>
            </form>
        </>
    );
}

export default EditExpenses;
