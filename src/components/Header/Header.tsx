import React, {useState} from "react";
import imgMenu from "../../assets/menu.svg";
import Avatar from "../Avatar";
import { Menu } from "../Menu/Menu";
import styles from "./Header.module.scss";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    const [open, setOpen] = useState(false);

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
