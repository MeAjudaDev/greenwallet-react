import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { memo } from "react";
import styles from "./Amount.module.scss";

let cx = classNames.bind(styles);

Amount.proptype = {
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    children: PropTypes.element.isRequired,
};

function Amount(props) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.currency}>R$</span>
            <span className={cx({
                [styles.amountValue]: true,
                [styles.positive]: props.positive,
                [styles.negative]: props.negative,
            })}>{props.children}</span>
        </div>
    );
}

export default memo(Amount);
