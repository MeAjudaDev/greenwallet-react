import styles from './CheckboxInput.module.scss'

export default function TextInput({
    checked = false,
    checkboxClass = '',
    id,
    label,
    name,
    value,
    onChange,
}) {
    return (
        <label className={`${styles.checkboxInput} ${checkboxClass}`}>
            <input
                checked={checked}
                id={id}
                name={name}
                onChange={onChange}
                type="checkbox"
                value={value}
            />
            <span>{label}</span>
        </label>
    )
}
