import Avatar from '../Avatar';

import styles from './Header.module.scss';

export default function Header({ title }) {
    return (
        <header className={styles.header}>
            <span className="material-icons">menu</span>
            <h1>{title}</h1>
            <Avatar url="/images/avatar.svg" />
        </header>
    );
}
