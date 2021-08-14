import React from "react";
import imgMenu from "../../assets/menu.svg";
import Avatar from "../Avatar";
import { Menu } from "../Menu/Menu";
import styles from "./Header.module.scss";

export default function Header({ title }) {
    const [open, setOpen] = React.useState(false);

    function handleOpenMenu() {
        setOpen(true);
    }

    return (
        <>
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
        </>
    );
}
