import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.scss";

function ProgressBar({
    progressClass,
    progressBarClass,
    reverse = false,
    tick = 1000,
    max = 2500,
}) {
    const [progress, setProgress] = useState(reverse ? max : 0);

    useEffect(() => {
        let timer = null;

        timer = setTimeout(() => {
            if (reverse) {
                if (progress > 0) {
                    setProgress(progress - tick);
                }
            } else if (progress < 100) {
                setProgress(progress + tick);
            }
        }, tick);

        return () => {
            clearTimeout(timer);
        };
    }, [reverse, tick, progress, setProgress]);

    return (
        <div className={`${progressClass} ${styles.progress}`}>
            <div
                className={`${styles.progressBar} ${progressBarClass}`}
                style={{ width: `${(progress / max) * 100}%` }}
            ></div>
        </div>
    );
}

export default ProgressBar;
