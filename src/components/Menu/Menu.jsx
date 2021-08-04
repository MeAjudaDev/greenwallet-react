import React from "react";
import { Link } from "react-router-dom";
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

export function Menu({ open, setOpen }) {
    const handleCloseMenu = () => {
        setOpen(false);
    };

    return (
        <>
            <aside
                className={`${styles.wrapper} ${open ? styles.active : ""}`}
                aria-label="menu"
                role="menu-nav"
            >
                <button onClick={handleCloseMenu}>
                    <img src={closeIcon} alt="close icon" />
                </button>
                <div className={styles.brand}>
                    <img src={logo} alt="logo image" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <img src={graphUp} alt="graphUp Icon" />
                                Receitas
                            </Link>
                        </li>
                        <li>
                            <Link to="/despesas/listar">
                                <img src={graphDown} alt="graphDown Icon" />
                                Despesas
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src={dollar} alt="dollar Icon" />
                                Investimentos
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src={newCategory} alt="newCategory Icon" />
                                Nova Categoria
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src={key} alt="Key Icon" />
                                Trocar Senha
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src={config} alt="Config Icon" />
                                Configurações
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={styles.logOut}>
                            <Link to="/">
                                <img src={logOut} alt="Log Out Icon" />
                                Sair
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default React.memo(Menu);
