import './styles.css';

const DEFAULT_PROPS = {
    IMG: "/images/Avatar.svg",
    TITLE: "Meu título"
};

const AppHeader = ({ title = DEFAULT_PROPS.TITLE, img = DEFAULT_PROPS.IMG }) => {
    return (
        <header className="appHeader">
            <h1 className="appHeader__title">{title}</h1>
            <img className="appHeader__img" src={img} alt="avatar" />
        </header>
    );
}

export default AppHeader;
