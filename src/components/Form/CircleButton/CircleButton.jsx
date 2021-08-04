import styles from "./CircleButton.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

/**
 * Usage:
 * import {imgAdd} from "path-to-imgAdd.svg";
 * <CircleButton primary icon={imgAdd} />
*/
export default function CircleButton({ primary, icon }) {
    return <button
        className={cx({
            [styles.button]: true,
            [styles.primary]: primary,
        })}
    >
        <img src={icon} />
    </button>;
}
