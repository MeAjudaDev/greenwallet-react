import styles from "./Avatar.module.scss";

interface Props {
    url: string;
}

export default function Avatar({ url }: Props) {
    return (
        <div
            data-testid="avatar"
            style={{ backgroundImage: `url("${url}")` }}
            className={styles.avatar}
        ></div>
    );
}
