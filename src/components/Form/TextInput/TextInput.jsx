import styles from './TextInput.module.scss';

export default function TextInput({
    autoFocus = false,
    name,
    onChange,
    placeholder,
    value,
}) {
    return (
        <input
            autoFocus={autoFocus}
            className={styles.textInput}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            value={value}
        />
    )
}
