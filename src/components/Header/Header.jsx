import Avatar from "../Avatar";
import imgMenu from "../../assets/menu.svg";
import styles from "./Header.module.scss";

export default function Header({ title }) {
    return (
        <header className={styles.header}>
            <button role="menuopen" className={styles.menuButton}>
                <img src={imgMenu} alt="menu open" />
            </button>
            <h1>{title}</h1>
            <Avatar url="/images/avatar.svg" />
        </header>
    );
}
