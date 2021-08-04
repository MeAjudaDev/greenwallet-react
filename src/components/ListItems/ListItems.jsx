import styles from "./ListItems.module.scss";

export default function ListItems({ categories }) {
    if (!categories) {
        return (
            <span data-testid="default-text">
                Não há categorias para serem exibidas.
            </span>
        );
    }

    return (
        <div className={styles.wrapper}>
            <h3>TOTAL POR CATEGORIA</h3>
            <div data-testid="list">
                {categories.map((category, key) => {
                    return (
                        <div key={key} className={styles.category}>
                            <div data-testid="list-description">
                                {category.description}
                            </div>
                            <div data-testid="list-value">
                                R$ {category.value.toFixed(2).replace(".", ",")}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
