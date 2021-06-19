import styles from "./AppHeader.module.scss";

const DEFAULT_PROPS = {
    IMG: "/images/Avatar.svg",
    TITLE: "Meu título",
};

const AppHeader = ({
    title = DEFAULT_PROPS.TITLE,
    img = DEFAULT_PROPS.IMG,
}) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <img src={img} alt="avatar" />
        </header>
    );
};

export default AppHeader;
