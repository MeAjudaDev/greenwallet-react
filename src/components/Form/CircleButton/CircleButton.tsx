import classNames from "classnames/bind";
import styles from "./CircleButton.module.scss";

let cx = classNames.bind(styles);

/**
 * Usage:
 * import {imgAdd} from "path-to-imgAdd.svg";
 * <CircleButton primary icon={imgAdd} />
*/
export default function CircleButton({ primary, icon, className }) {
    return <button
        className={cx({
            [styles.button]: true,
            [styles.primary]: primary,
            [className]: className
        })}
    >
        <img src={icon} />
    </button>;
}
