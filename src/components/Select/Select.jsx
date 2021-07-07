import Styles from "./Select.module.scss";
import arrow from "../../assets/dropdown-icon.svg";

export default function Select({ name, options = [] }) {
    return (
        <div className={Styles.select}>
            <select name={name}>
                {options.map((option) => (
                    <option value={option.value}>{option.label} </option>
                ))}
            </select>
            <img src={arrow} alt="arrow dropdown icon" />
        </div>
    );
}
