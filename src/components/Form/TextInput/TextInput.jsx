import styles from './TextInput.module.scss';

export default function TextInput({
    autoFocus = false,
    name,
    onChange,
    value,
}) {
    return (
        <input
            autoFocus={autoFocus}
            className={styles.textInput}
            name={name}
            onChange={onChange}
            type="text"
            value={value}
        />
    )
}
