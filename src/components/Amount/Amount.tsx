import classNames from "classnames/bind";
import { memo, ReactElement } from "react";
import styles from "./Amount.module.scss";

let cx = classNames.bind(styles);

interface Props {
    positive?: boolean,
    negative?: boolean,
    children?: ReactElement[],
};

function Amount({ positive, negative, children }: Props) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.currency}>R$</span>
            <span className={cx({
                [styles.amountValue]: true,
                [styles.positive]: positive,
                [styles.negative]: negative,
            })}>{children}</span>
        </div>
    );
}

export default memo(Amount);
