import styles from "./Avatar.module.scss";

export default function Avatar({ url }) {
    return (
        <div
            data-testid="avatar"
            style={{ backgroundImage: `url("${url}")` }}
            className={styles.avatar}
        ></div>
    );
}
