import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className={styles.mainContent}>
                <Routes />
            </main>
        </BrowserRouter>
    );
}

export default App;
