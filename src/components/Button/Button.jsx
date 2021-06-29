import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function Button(props) {
    return (
        <button
            className={cx({
                [styles.button]: true,
                [styles.primary]: props.primary,
                [styles.secondary]: props.secondary,
                [styles.outlined]: props.outlined,
                [styles.textOnly]: props.textOnly,
                [styles.danger]: props.danger,
            })}
            type={props.type}
            {...props}
        >
            {props.children}
        </button>
    );
}
Button.defaultProps = {
    type:'button',
    children:'default',
    primary:true
}

Button.prototype = {
    type: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    textOnly: PropTypes.bool,
    outlined: PropTypes.bool,
    danger:PropTypes.bool,
};
