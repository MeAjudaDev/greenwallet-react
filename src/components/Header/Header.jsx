import React from "react";
import Avatar from "../Avatar";
import imgMenu from "../../assets/menu.svg";
import styles from "./Header.module.scss";
import { Menu } from "../Menu/Menu";

export default function Header({ title }) {
    const [open, setOpen] = React.useState(false);

    function handleOpenMenu() {
        setOpen(true);
    }

    return <>
        <Menu open={open} setOpen={setOpen} />
        <header className={styles.header}>
            <button
                role="menuopen"
                className={styles.menuButton}
                onClick={handleOpenMenu}
            >
                <img src={imgMenu} alt="menu open" />
            </button>
            <h1>{title}</h1>
            <Avatar url="/images/avatar.svg" />
        </header>
    </>;
}
