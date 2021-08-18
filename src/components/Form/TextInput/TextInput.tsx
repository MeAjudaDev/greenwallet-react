import { InputHTMLAttributes } from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
}

export default function TextInput({
    autoFocus = false,
    className,
    labelText,
    name,
    onChange,
    placeholder,
    value,
}: TextInputProps) {
    return (
        <label className={`${styles.textInputLabel} ${className ?? ''}`}>
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
