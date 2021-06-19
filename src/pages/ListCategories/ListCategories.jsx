import Header from "../../components/Header";
import MonthsNavBar from "../../components/MonthsNavBar";
import toBRL from "../../utils/formatNumber";

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
            <section className="categoriesListWrapper">
                <h2 className="categoriesList__totalValue">{toBRL(3599.57)}</h2>
                <h3 className="categoriesList__description">
                    TOTAL POR CATEGORIA
                </h3>
                <hr className="categoriesList__divider" />
                <ul className="categoriesList">
                    {categories.map((category) => (
                        <li
                            key={category.description}
                            className="categoriesList__item"
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
