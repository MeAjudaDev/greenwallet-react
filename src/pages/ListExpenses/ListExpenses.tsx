import { useEffect, useState } from "react";
import { filterExpenses } from "../../api/v1/expenses";
import addIcon from "../../assets/add.svg";
import CircleButton from "../../components/Form/CircleButton";
import SelectInput from "../../components/Form/SelectInput";
import toBRL from "../../utils/formatNumber";
import styles from "./ListExpenses.module.scss";

export default function ListExpenses() {
    const [totalSums, setTotalSums] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    useEffect(() => {
        filterExpenses({ month: 4 }).then(response => {
            if (response.status !== 200)
                throw new Error(response.statusText);
            return response.json();
        }).catch(err => {
            console.error(err);
        }).then(response => {
            setTotalSums(response);
        });
    }, []);

    const months = [
        { value: 1, label: "Janeiro" },
        { value: 2, label: "Fevereiro" },
        { value: 3, label: "Março" },
        { value: 4, label: "Abril" },
        { value: 5, label: "Maio" },
        { value: 6, label: "Junho" },
        { value: 7, label: "Julho" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Setembro" },
        { value: 10, label: "Outubro" },
        { value: 11, label: "Novembro" },
        { value: 12, label: "Dezembro" },
    ];

    const years = Array(5)
        .fill(new Date().getFullYear())
        .map((year, index) => ({ value: year - index, label: year - index }));

    return (
        <div className={styles.listExpenses}>
            <div className={styles.keepsFooterAtBottom}>
                <form>
                    <fieldset className={styles.dateForm}>
                        <SelectInput labelText="Mês" name="month" options={months} />
                        <SelectInput labelText="Ano" name="year" options={years} />
                    </fieldset>
                </form>
                <output className={styles.expensesValue}>-123.000.987,00</output>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th colSpan="2" className={styles.tableTitle}>Total por categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {totalSums && totalSums.map((sum, index) => {
                            <tr key={index}>
                                <td>{sum.category}</td>
                                <td>{toBRL(sum.amount)}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <CircleButton primary icon={addIcon} className={styles.btnAddCategory} />
        </div>
    );
}
