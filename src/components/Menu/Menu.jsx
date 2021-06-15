import React from 'react'
import styles from "./Menu.module.scss";
import closeIcon from "../../assets/close.svg";
import logo from "../../assets/logo.svg";
import graphUp from "../../assets/graph-up.svg";
import graphDown from "../../assets/graph-down.svg";
import dollar from "../../assets/dollar.svg";
import newCategory from "../../assets/new-category.svg";
import key from "../../assets/key.svg";
import config from "../../assets/config.svg";
import logOut from "../../assets/log-out.svg";

function Menu() {

    const [open, setOpen] = React.useState(false)

    const handleCloseMenu = () => {
        setOpen(false)
    }

    const handleOpenMenu = () => {
        setOpen(true)
    }

    return (
        <>
        <button onClick={handleOpenMenu}>Menu</button>
        <aside className={`${styles.wrapper} ${open ? styles.active : ''}`}>
            <button onClick={handleCloseMenu}>
                <img src={closeIcon} alt="close icon" />
            </button>
            <div className={styles.brand}>
                <img src={logo} alt="logo image" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <img src={graphUp} alt="graphUp Icon" />
                            Receitas
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={graphDown} alt="graphDown Icon" />
                            Despesas
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={dollar} alt="dollar Icon" />
                            Investimentos
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={newCategory} alt="newCategory Icon" />
                            Nova Categoria
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={key} alt="Key Icon" />
                            Trocar Senha
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={config} alt="Config Icon" />
                            Configurações
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className={styles.logOut}>
                        <a href="/">
                            <img src={logOut} alt="Log Out Icon" />
                            Sair
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        </>
    );
}

export default Menu;
