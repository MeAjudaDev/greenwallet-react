import { createPortal } from "react-dom";

import Toast from "./Toast";
import styles from "./ToastContainer.module.scss";

export default function ToastsContainer({ toasts }) {
    return createPortal(
        <div className={styles.toastsContainer}>
            {toasts?.map((content) => (
                <Toast key={content.id} {...content} />
            ))}
        </div>,
        document.body
    );
}
