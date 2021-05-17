import AppHeader from "./components/AppHeader";
import NavBar from "./components/NavBar";
import "./ListExpenses.css";
import toBRL from "./utils/formatNumber";

export default function ListExpenses(props) {
    const months = [
        {
            label: "Janeiro",
            link: "#",
            selected: false,
        },
        {
            label: "Fevereiro",
            link: "#",
            selected: false,
        },
        {
            label: "Março",
            link: "#",
            selected: false,
        },
        {
            label: "Abril",
            link: "#",
            selected: true,
        },
        {
            label: "Maio",
            link: "#",
            selected: false,
        },
    ];

    const expenses = [
        {
            description: "Água",
            value: 72.13,
        },
        {
            description: "Luz",
            value: 83.00,
        },
        {
            description: "Internet",
            value: 90.99,
        },
        {
            description: "Aluguel",
            value: 513.23,
        },
    ];

    return (
        <>
            <AppHeader title="Casa" />
            <NavBar items={months} />
            <section className="expensesListWrapper">
                <h2 className="expensesList__totalValue">{toBRL(1956)}</h2>
                <ul className="expensesList">
                    {expenses.map(expense=>(
                        <li key={expense.description} className="expensesList__item">
                            <span>{expense.description}</span>
                            <span>{toBRL(expense.value)}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
