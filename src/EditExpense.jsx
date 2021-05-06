import './EditExpense.css';

function EditExpenses(props) {
    return (
        <div className="container">
            <div className="column">
                <h1>{props.title}</h1>
            </div>
            <div className="column">
                <label>
                    <span>Valor R$:</span>
                    <span>99.90</span>
                </label>
            </div>
            <div className="column">
                <label>
                    <span>Descrição</span>
                    <input type="text" placeholder="Compras de Supermercado" />
                </label>
            </div>
            <div className="row">
                <span>Categoria</span>
                <label>
                    <input type="radio" />
                    <span>Alimentação</span>
                </label>
                <label>
                    <input type="radio" />
                    <span>Casa</span>
                </label>
                <label>
                    <input type="radio" />
                    <span>Transporte</span>
                </label>
                <label>
                    <input type="radio" />
                    <span>Conhecimento</span>
                </label>
                <label>
                    <input type="radio" />
                    <span>Saúde</span>
                </label>
                <label>
                    <input type="radio" />
                    <span>Lazer</span>
                </label>
                <label>
                    <input type="radio" />
                    <span>Diverso</span>
                </label>
            </div>
            <div className="row">
                <span>Tipo</span>
                <label>
                    <input type="radio" className="check-item" />
                    <span>Fixa</span>
                </label>
                <label>
                    <input type="radio" className="check-item" />
                    <span>variável</span>
                </label>
            </div>
            <div className="column">
                <label>
                    <input type="checkBox" className="check-item" />
                    <span>Com Vencimento</span>
                </label>
                <span>08/04/2021</span>
            </div>
            <div className="column">
                <button>Cancelar</button>
                <button>Salvar</button>
                <button>Voltar</button>
            </div>
        </div>
    );
}

export default EditExpenses;
