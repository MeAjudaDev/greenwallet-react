import styles from "./Select.module.scss";
import imgArrow from "../../assets/dropdown-icon.svg";

export default function Select({ name, options = [] }) {
    return (
        <div className={styles.select}>
            <select name={name}>
                {options.map((option) => (
                    <option value={option.value}>{option.label} </option>
                ))}
            </select>
            <img src={imgArrow} alt="arrow dropdown icon" />
        </div>
    );
}
