import Avatar from "../Avatar";
import menu from "../../assets/menu.svg";
import styles from "./Header.module.scss";

export default function Header({ title }) {
    return (
        <header className={styles.header}>
            <button className={styles.menuButton}>
                <img src={menu} alt="" />
            </button>
            <h1>{title}</h1>
            <Avatar url="/images/avatar.svg" />
        </header>
    );
}
