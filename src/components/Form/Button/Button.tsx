import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

let cx = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    secondary?: boolean;
    outlined?: boolean;
    textOnly?: boolean;
    danger?: boolean;
}

export default function Button({ primary, secondary, outlined, textOnly, danger, children, type, ...rest }: ButtonProps) {
    return (
        <button
            className={cx({
                [styles.button]: true,
                [styles.primary]: primary,
                [styles.secondary]: secondary,
                [styles.outlined]: outlined,
                [styles.textOnly]: textOnly,
                [styles.danger]: danger,
            })}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: "button",
    children: "default",
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    textOnly: PropTypes.bool,
    outlined: PropTypes.bool,
    danger: PropTypes.bool,
};
