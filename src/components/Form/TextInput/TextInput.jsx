import styles from './TextInput.module.scss';

export default function TextInput({
    autoFocus = false,
    className,
    labelText,
    name,
    onChange,
    placeholder,
    value,
}) {
    return (
        <label className={className ?? ''}>
            <span className={styles.labelText}>{labelText}</span>
            <input
                autoFocus={autoFocus}
                className={styles.textInput}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                type="text"
                value={value} />
        </label>
    )
}
