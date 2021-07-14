import styles from "./CircleButton.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

/**
 * Usage:
 * import {imgAdd} from "path-to-imgAdd.svg";
 * <CircleButton primary icon={imgAdd} />
*/

export default function CircleButton(props) {
    return (
        <button 
            className={cx({
                [styles.button]: true,
                [styles.primary]: props.primary,
            })}
        >
            <img src={props.icon} />
        </button>
    )
}
