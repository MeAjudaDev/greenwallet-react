import addIcon from "../../assets/add.svg";
import Amount from "../../components/Amount";
import CircleButton from "../../components/Form/CircleButton";
import SelectInput from "../../components/Form/SelectInput";
import ListItems from "../../components/ListItems";
import toBRL from "../../utils/formatNumber";
import styles from "./ListCategories.module.scss";

function ListCategories() {
    const date = new Date();
    const months = [
        { label: "Janeiro", value: 1 },
        { label: "Fevereiro", value: 2 },
        { label: "Março", value: 3 },
        { label: "Abril", value: 4 },
        { label: "Maio", value: 5 },
        { label: "Junho", value: 6 },
        { label: "Julho", value: 7 },
        { label: "Agosto", value: 8 },
        { label: "Setembro", value: 9 },
        { label: "Outubro", value: 10 },
        { label: "Novembro", value: 11 },
        { label: "Dezembro", value: 12 },
    ];

    const year = date.getFullYear();
    const years = Array(21)
        .fill(null)
        .map((_, i) => ({ label: String(year - 10 + i), value: year - 10 + i }));

    const categories = [
        { description: "Alimentação", value: 831.66 },
        { description: "Casa", value: 1956.0 },
        { description: "Transporte", value: 200.0 },
        { description: "Estudo", value: 356.0 },
        { description: "Lazer", value: 256.21 },
        { description: "Saúde", value: 310.0 },
    ];

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.dateInputs}>
                        <SelectInput name="month" labelText="Mês" options={months} />
                        <SelectInput name="year" labelText="Ano" options={years} />
                </div>
                <Amount negative>{toBRL(-1500)}</Amount>

                <ListItems categories={categories} />
            </div>

            <CircleButton primary icon={addIcon} />
        </div>
    );
}

export default ListCategories;
