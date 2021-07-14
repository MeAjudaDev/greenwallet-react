import { useEffect, useState } from "react";

import Header from "../../components/Header";
import SelectInput from "../../components/Form/SelectInput";

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

    const months = [
        {
            value: 1,
            label: "Janeiro"
        },

        {
            value: 2,
            label: "Fevereiro"
        },

        {
            value: 3,
            label: "Março"
        },

        {
            value: 4,
            label: "Abril"
        },

        {
            value: 5,
            label: "Maio"
        },

        {
            value: 6,
            label: "Junho"
        },

        {
            value: 7,
            label: "Julho"
        },

        {
            value: 8,
            label: "Agosto"
        },

        {
            value: 9,
            label: "Setembro"
        },

        {
            value: 10,
            label: "Outubro"
        },

        {
            value: 11,
            label: "Novembro"
        },

        {
            value: 12,
            label: "Dezembro"
        },
    ];

    const years =
        [

        ];

    return <>
        <Header title="Casa" />
        <form>
            <fieldset>
                <SelectInput labelText="Mês" name="month" options={months} />
                <SelectInput labelText="Ano" name="year" />
            </fieldset>
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
