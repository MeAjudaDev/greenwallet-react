import styles from "./MonthsNavBar.module.scss";

export default function MonthsNavBar({ items = [] }) {
    return (
        <nav>
            <ul className={`${styles.navbar}`}>
                {items.map((item) => (
                    <li key={item.label}>
                        <a
                            className={`${styles.link} ${
                                item.selected ? "active" : ""
                            }`}
                            href={item.link ?? "#"}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
