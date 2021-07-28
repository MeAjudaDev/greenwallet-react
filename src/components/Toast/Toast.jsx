import React, { useEffect, useState } from "react";
import "./Toast.scss";
import { v4 as uuid } from "uuid";
import { useToast } from "./ToastProvider";

function Toast({ id = uuid(), delay = 2500, message }) {
    const [className, setClassname] = useState("toast-container show-toast");
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassname("toast-container hide-toast");
        }, delay);

        if (className.includes("hide-toast")) {
            removeToast(id);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [className]);

    return <div className={className}>{message}</div>;
}

export default React.memo(Toast);
