import "./styles.css";

const NavBar = ({ items = [] }) => {
    return (
        <nav>
            <ul className="navbar">
                {items.map((item) => (
                    <li
                        key={item.label}
                        className='navbar__item'
                    >
                        <a
                            className={`navbar__link ${item.selected ? 'active' : ''}`}
                            href={item.link ?? "#"}
                        >{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
