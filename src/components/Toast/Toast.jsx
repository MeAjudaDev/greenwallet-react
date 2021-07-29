import React, { useEffect, useState } from "react";

import { useToast } from "./ToastProvider";
import "./Toast.scss";

function Toast({ delay = 2500, message }) {
    const [className, setClassName] = useState("show-toast");
    const { hideToast } = useToast();

    const id = "Toast__" + Math.random().toString(36).slice(8);

    useEffect(() => {
        const timer = setTimeout(setClassName, delay, "hide-toast");

        if (className.includes("hide-toast")) {
            hideToast(id);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [className]);

    return (
        <div id={id} className={`toast ${className}`}>
            {message}
        </div>
    );
}

export default Toast;
