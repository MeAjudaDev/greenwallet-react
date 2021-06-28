import propTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button({
    children,
    type,
    secondary,
    primary,
    textOnly,
}) {
    return (
        <button className={styles.button} type="button">
            {children}
        </button>
    );
}

Button.prototype = {
    primary: propTypes.bool,
    secondary: propTypes.bool,
    textOnly: propTypes.bool,
    type: propTypes.string.isRequired,
    children: propTypes.string.isRequired,
};
