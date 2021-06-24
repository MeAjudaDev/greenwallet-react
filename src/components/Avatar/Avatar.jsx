import styles from './Avatar.module.scss';

export default function Avatar({ url }) {
    return (
        <>
            <div style={{ backgroundImage: `url("${url}")` }}
                 className={styles.avatar}></div>
        </>
    );
}
