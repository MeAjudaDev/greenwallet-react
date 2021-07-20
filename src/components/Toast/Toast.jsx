import React, { useEffect, useState } from "react";
import "./Toast.scss";
import { v4 as uuid } from "uuid";

function Toast({ id = uuid(), delay = 5500, message, onHide }) {
    const [className, setClassname] = useState("toast-container show-toast");

    console.log("render toast", id);
    useEffect(() => {
        console.log("toast set timeout", id);
        let hideTimeout = null;

        const timeout = setTimeout(() => {
            console.log("toast timeout", id);
            setClassname("toast-container hide-toast");
            console.log("hide toast", id);
            hideTimeout = setTimeout(() => {
                onHide && onHide(id);
            }, 500);
        }, delay);

        return () => {
            console.log("toast clear timeout", id);
            clearTimeout(timeout);
            clearTimeout(hideTimeout);
        };
    }, [id, delay, message]);

    return <div className={className}>{message}</div>;
}

export default React.memo(Toast);
