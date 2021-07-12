import styles from "./SelectInput.module.scss";
import imgArrow from "../../../assets/dropdown-icon.svg";

export default function SelectInput({ labelText, name, options = [] }) {
    return (
        <label className={styles.select}>
            <span>{labelText}</span>
            <select name={name}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <img src={imgArrow} alt="arrow dropdown icon" />
        </label>
    );
}
