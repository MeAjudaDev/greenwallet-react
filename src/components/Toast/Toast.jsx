import React, { useEffect, useState } from "react";
import { useToast } from "./ToastProvider";

import { ReactComponent as CloseSvg } from "../../assets/close.svg";

import "./Toast.scss";

function Toast({ id, delay = 2500, message, type, title }) {
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
        <div id={id} className={`toast ${className} ${type ?? ""}`}>
            {type && (
                <img
                    className="toast-icon"
                    src={require(`../../assets/circle-${type}.svg`).default}
                    alt="Ícone do toast"
                />
            )}

            <div className="toast-text">
                <h2 className="toast-title">{title}</h2>
                <p className="toast-message">{message}</p>
            </div>

            <button className="toast-close">
                <CloseSvg />
            </button>
        </div>
    );
}

export default Toast;