import styles from "./SelectInput.module.scss";
interface SelectInputProps {
    labelText?: string;
    name: string;
    options: { label: string; value: string | number }[];
}

export default function SelectInput({ labelText, name, options}: SelectInputProps) {
    return (
        <label className={styles.select}>
            <span>{labelText}</span>
            <select name={name}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
}
