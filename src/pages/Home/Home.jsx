import { useState } from "react";
import ToastsContainer from "../../components/Toast/ToastContainer";
import { useToast } from "../../components/Toast/ToastProvider";

export default function Home(props) {
    const { addToast } = useToast();

    return (
        <div className="App">
            <button onClick={addToast}>Show toast</button>
        </div>
    );
}
