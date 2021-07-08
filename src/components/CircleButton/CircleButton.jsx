import styles from "./CircleButton.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function CircleButton(props) {
    return (
        <button 
            className={cx({
                [styles.button]: true,
                [styles.primary]: props.primary,
                [styles.secondary]: props.secondary,
                [styles.danger]: props.danger,
                [styles.outlined]: props.outlined,
            })}
        >
            {props.children}
        </button>
    )
}
