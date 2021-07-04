import styles from "./Select.module.scss";
import imgArrow from "../../assets/dropdown-icon.svg";

export default function Select({
    name,
    options = [
        { value: "value1", label: "Option1" },
        { value: "value2", label: "Option2" },
        { value: "value3", label: "Option3" },
        { value: "value4", label: "Option4" },
        { value: "value5", label: "Option5" },
    ],
}) {
    return (
        <div className={styles.select}>
            <select
                name={name}
                style={{
                    backgroundImage: "url(" + imgArrow + ") no-repeat right #ddd",
                }}
            >
                {options.map((option) => (
                    <option value={option.value}>{option.label} </option>
                ))}
            </select>
            <img src={arrow} alt="" />
        </div>
    );
}
