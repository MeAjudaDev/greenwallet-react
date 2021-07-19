import React from "react";
import Header from "./components/Header";
import Routes from "./routes";

import styles from "./App.module.scss";

function App() {
    return (
        <>
            <Header />
            <main className={styles.mainContent}>
                <Routes />
            </main>
        </>
    );
}

export default App;
