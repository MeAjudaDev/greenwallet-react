import Header from "../../components/Header";
import MonthsNavBar from "../../components/MonthsNavBar";
import toBRL from "../../utils/formatNumber";

import styles from "./ListCategories.module.scss";

function ListCategories(props) {
    const months = [
        { label: "Janeiro", link: "#", selected: false },
        { label: "Fevereiro", link: "#", selected: false },
        { label: "Março", link: "#", selected: false },
        { label: "Abril", link: "#", selected: true },
        { label: "Maio", link: "#", selected: false },
    ];

    const categories = [
        { description: "Alimentação", value: 831.66 },
        { description: "Casa", value: 1956.0 },
        { description: "Transporte", value: 200.0 },
        { description: "Estudo", value: 356.0 },
        { description: "Lazer", value: 256.21 },
        { description: "Saúde", value: 310.0 },
    ];

    return (
        <div>
            <Header title={props.title} />
            <MonthsNavBar items={months} />
            <section className={styles.wrapper}>
                <h2 className={styles.totalValue}>{toBRL(103599.57)}</h2>
                <h3 className={styles.description}>TOTAL POR CATEGORIA</h3>
                <hr className={styles.divider} />
                <ul className={styles.list}>
                    {categories.map((category) => (
                        <li
                            key={category.description}
                            className={styles.listItem}
                        >
                            <span>{category.description}</span>
                            <span>{toBRL(category.value)}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default ListCategories;
