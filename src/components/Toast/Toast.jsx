import React, { useEffect, useState } from "react";
import { useToast } from "./ToastProvider";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Toast.module.scss";

import { ReactComponent as CloseSvg } from "../../assets/close.svg";

import ProgressBar from "../../components/ProgressBar";

function Toast({ id, delay = 2500, message, type, title }) {
    const [className, setClassName] = useState("show");
    const { hideToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassName("hide");
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay]);

    useEffect(() => {
        let timer = null;

        if (className.includes("hide")) {
            timer = setTimeout(() => hideToast(id), 100);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [id, className, hideToast]);

    return (
        <div
            id={id}
            className={cx(styles.toast, styles[className], styles[type])}
        >
            {type && (
                <img
                    className={styles.icon}
                    src={require(`../../assets/circle-${type}.svg`).default}
                    alt="Ícone do toast"
                />
            )}

            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.message}>{message}</p>
            </div>

            <button className={styles.close} onClick={() => hideToast(id)}>
                <CloseSvg />
            </button>

            <ProgressBar
                progressClass={styles.progress}
                progressBarClass={styles.progressBar}
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
