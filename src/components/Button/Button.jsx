import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

export default function Button({
    children,
    type,
    secondary,
    primary,
    textOnly,
    outlined,
    ...props
}) {
    return (
        <button
            className={cx({
                [styles.button]:true,
                [styles.primary]:primary,
                [styles.secondary]:secondary,
                [styles.outlined]:outlined,
                [styles.textOnly]:textOnly
            })}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}

Button.prototype = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    textOnly: PropTypes.bool,
    outlined: PropTypes.bool,
};
