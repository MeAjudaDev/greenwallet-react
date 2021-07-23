import styles from "./CheckboxInput.module.scss";

export default function CheckboxInput({
    checked = false,
    checkboxClass = "",
    id,
    label,
    name,
    value,
    onChange,
}) {
    return (
        <label className={`${styles.checkboxInput} ${checkboxClass}`}>
            <input
                defaultChecked={checked}
                id={id}
                name={name}
                onChange={onChange}
                type="checkbox"
                value={value}
            />
            <span>{label}</span>
        </label>
    );
}
