import "./ListExpenses.css";

export default function ListExpenses(props) {
    return (
        <div className="expensesListWrapper">
            <header className="expensesListHeader">
                <div>
                    <h3>{props.title}</h3>
                    <h1>{props.group}</h1>
                </div>

                <button type="button" className="buttonListExpenses">
                    Lançar Despesa
                </button>
            </header>

            <ul className="expensesList">
                <li className="expensesList__item">
                    <div>
                        <h2>Água</h2>
                        <p>Lançado por Yonatha</p>
                    </div>
                    <span className="expenseValue">R$ 72,13</span>
                </li>

                <li className="expensesList__item">
                    <div>
                        <h2>Luz</h2>
                        <p>Lançado por Daniel</p>
                    </div>
                    <span className="expenseValue">R$ 83,00</span>
                </li>

                <li className="expensesList__item">
                    <div>
                        <h2>Internet</h2>
                        <p>Lançado por André</p>
                    </div>
                    <span className="expenseValue">R$ 90,99</span>
                </li>
            </ul>
        </div>
    );
}
