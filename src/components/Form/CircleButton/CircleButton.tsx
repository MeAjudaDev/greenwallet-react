import classNames from "classnames/bind";
import styles from "./CircleButton.module.scss";

let cx = classNames.bind(styles);

interface CircleButtonProps {
    primary?: boolean;
    className?: string;
    icon: string;
}

export default function CircleButton({ primary, icon, className="" }: CircleButtonProps) {
    const classNames = cx({
        [styles.button]: true,
        [styles.primary]: primary
    });

    return (
        <button
            className={`${classNames} ${className}`}
        >
            <img src={icon} />
        </button>
        );
}
