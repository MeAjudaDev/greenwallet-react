import React from 'react';
import styles from './Header.module.scss'

export default function Header(props) {
    return (
        <div className={styles.container}>

            <header>
                <span className="material-icons">menu</span>
                <h1>{props.title}</h1>
                <span className="material-icons">account_circle</span>
            </header>
        </div>
    );
}
