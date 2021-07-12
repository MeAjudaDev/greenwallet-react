import styles from "./SelectInput.module.scss";

export default function SelectInput({ labelText, name, options = [] }) {
    return (
        <label className={styles.select}>
            <span>{labelText}</span>
            <select name={name}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
}
