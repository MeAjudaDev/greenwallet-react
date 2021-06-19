import { useEffect, useState } from "react";

import Header from "../../components/Header";
import MonthsNavBar from "../../components/MonthsNavBar";

import { filterExpenses } from "../../api/v1/expenses";
import toBRL from "../../utils/formatNumber";

export default function ListExpenses() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        filterExpenses({
            month: 4,
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .catch((err) => {
                console.error(err);
            })
            .then((response) => {
                setExpenses(response);
            });
    }, []);

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

    return (
        <>
            <Header title="Casa" />
            <MonthsNavBar items={months} />
            <section className="expensesListWrapper">
                <h2 className="expensesList__totalValue">{toBRL(1956)}</h2>
                <ul className="expensesList">
                    {expenses &&
                        expenses.map((expense) => (
                            <li key={expense.id} className="expensesList__item">
                                <span>{expense.description}</span>
                                <span>{toBRL(expense.value)}</span>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}
