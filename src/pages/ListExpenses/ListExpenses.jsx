import { useEffect, useState } from "react";

import Header from "../../components/Header";

import { filterExpenses } from "../../api/v1/expenses";
import toBRL from "../../utils/formatNumber";

import styles from "./ListExpenses.module.scss";

export default function ListExpenses() {
    const [totalSums, setTotalSums] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    useEffect(() => {
        filterExpenses({ month: 4 }).then((response) => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }

            return response.json();
        }).catch((err) => {
            console.error(err);
        }).then((response) => {
            setTotalSums(response);
        });
    }, []);

    return <>
        <Header title="Casa" />
        <form>

        </form>
        <table>
            <thead>
                <th colSpan="2">Total por categoria</th>
            </thead>
            <tbody>
                {totalSums.map(sum => {
                    <tr>
                        <td>{sum.category}</td>
                        <td>{toBRL(sum.amount)}</td>
                    </tr>
                })}
                <tr></tr>
            </tbody>
        </table>
    </>;
}
