import { useEffect, useState } from "react";

import Header from "../../components/Header";
import MonthsNavBar from "../../components/MonthsNavBar";

import { filterExpenses } from "../../api/v1/expenses";
import toBRL from "../../utils/formatNumber";

import styles from "./ListExpenses.module.scss";

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
            <section className={styles.wrapper}>
                <h2 className={styles.totalValue}>{toBRL(1956)}</h2>
                <ul className={styles.list}>
                    {expenses &&
                        expenses.map((expense) => (
                            <li key={expense.id} className={styles.listItem}>
                                <span>{expense.description}</span>
                                <span>{toBRL(expense.value)}</span>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}
