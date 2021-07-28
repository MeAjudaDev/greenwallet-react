import React from "react";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./components/Toast/ToastProvider";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <ToastProvider>
                <Header />
                <main className={styles.mainContent}>
                    <Routes />
                </main>
            </ToastProvider>
        </BrowserRouter>
    );
}

export default App;
