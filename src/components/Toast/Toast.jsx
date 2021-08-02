import React, { useEffect, useState } from "react";

import { useToast } from "./ToastProvider";
import "./Toast.scss";

function Toast({ id, delay = 2500, message }) {
    const [className, setClassName] = useState("show-toast");
    const { hideToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassName("hide-toast");
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        let timer = null;

        if (className.includes("hide-toast")) {
            timer = setTimeout(() => hideToast(id), 600);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [className, hideToast]);

    return (
        <div id={id} className={`toast ${className}`}>
            {message}
        </div>
    );
}

export default Toast;
