import './EditExpense.css';

function EditExpenses(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <form method="post" action="#" className="editExpenseForm">
                <label className="editExpenseForm__value">
                    <span>R$</span>
                    <input type="number" className="bigInput" />
                </label>
                <fieldset className="editExpenseForm__fields">
                    <label className="twoColumns">
                        <span>Descrição</span>
                        <input type="text" />
                    </label>
                    <fieldset className="editExpenseForm__fieldset">
                        <legend>Categoria</legend>
                        <label>
                            <input type="radio" name="category" />
                            {' '}
                            <span>Alimentação</span>
                        </label>
                        <label>
                            <input type="radio" name="category" />
                            {' '}
                            <span>Casa</span>
                        </label>
                        <label>
                            <input type="radio" name="category" />
                            {' '}
                            <span>Transporte</span>
                        </label>
                        <label>
                            <input type="radio" name="category" />
                            {' '}
                            <span>Conhecimento</span>
                        </label>
                        <label>
                            <input type="radio" name="category" />
                            {' '}
                            <span>Saúde</span>
                        </label>
                        <label>
                            <input type="radio" name="category" />
                            {' '}
                            <span>Lazer</span>
                        </label>
                        <label>
                            <input type="radio" name="category" />
                            {' '}
                            <span>Diverso</span>
                        </label>
                    </fieldset>
                    <fieldset className="editExpenseForm__fieldset">
                        <legend>Tipo</legend>
                        <label>
                            <input type="radio" name="expense-type" />
                            {' '}
                            <span>Fixa</span>
                        </label>
                        <label>
                            <input type="radio" name="expense-type" />
                            {' '}
                            <span>Variável</span>
                        </label>
                    </fieldset>
                    <label className="twoColumns">
                        <input type="checkbox" />
                        {' '}
                        <span>Com Vencimento</span>
                    </label>
                    <input id="dueDate" type="text" className="editExpenseForm__dueDate twoColumns center bigInput" />
                </fieldset>
                <button type="button" className="editExpenseForm__actionButton bgSuccess">Salvar</button>
                <button type="button" className="editExpenseForm__actionButton bgDanger">Cancelar</button>
                <button type="button" className="editExpenseForm__actionButton bgDark">Voltar</button>
            </form>
        </>
    );
}

export default EditExpenses;
