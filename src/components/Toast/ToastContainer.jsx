import Toast from "./Toast";
import styles from "./ToastContainer.module.scss";

export default function ToastsContainer({ toasts, onToastFinished }) {
    return (
        <div className={styles.toastsContainer}>
            {toasts.map((toast, index) => (
                <Toast key={index} {...toast} onHide={onToastFinished} />
            ))}
        </div>
    );
}
