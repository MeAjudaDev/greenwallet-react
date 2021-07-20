import { useState } from "react";
import ToastsContainer from "../../components/Toast/ToastContainer";

export default function Home(props) {
    const [toasts, setToasts] = useState([]);

    const showToast = () => {
        const id = toasts.length;
        const toast = {
            id,
            message: `This is the ${id + 1} toast message`,
            delay: 2500,
        };
        setToasts([...toasts, toast].reverse());
    };

    const onToastFinished = (id) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    return (
        <div className="App">
            <button onClick={showToast}>Show toast</button>
            <ToastsContainer
                toasts={toasts}
                onToastFinished={onToastFinished}
            />
        </div>
    );
}
