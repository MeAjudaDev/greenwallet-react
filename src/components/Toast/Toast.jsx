import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useToast } from "./ToastProvider";

import { ReactComponent as CloseSvg } from "../../assets/close.svg";

import ProgressBar from "../../components/ProgressBar";

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
    }, [delay]);

    useEffect(() => {
        let timer = null;

        if (className.includes("hide-toast")) {
            timer = setTimeout(() => hideToast(id), 100);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [id, className, hideToast]);

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

            <button className="toast-close" onClick={() => hideToast(id)}>
                <CloseSvg />
            </button>

            <ProgressBar
                progressClass="toast-progress"
                progressBarClass="toast-progressbar"
                max={delay}
                reverse
            />
        </div>
    );
}

Toast.propTypes = {
    id: PropTypes.string.isRequired,
    delay: PropTypes.number,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default Toast;
