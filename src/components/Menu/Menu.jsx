import styles from "./Menu.module.scss";
import closeIcon from "../../assets/close.svg";
import logo from "../../assets/logo.svg";
import graphUp from '../../assets/graph-up.svg'

function Menu() {
    return (
        <aside className={styles.wrapper}>
            <button>
                <img src={closeIcon} alt="close icon" />
            </button>
            <div className={styles.brand}>
                <img src={logo} alt="logo image" />
            </div>
            <nav className={styles.menuWrapper}>
                <ul className={styles.menu} >
                    <li className={styles.menuItem}>
                        <a href="/">
                        <img src={graphUp} alt="graphUp Icon" />
                        Receitas
                        </a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>
                    <li>
                        <a href="/"></a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;
