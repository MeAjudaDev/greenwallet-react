import Styles from "./Select.module.scss";
import arrow from "../../assets/dropdown-icon.svg";

export default function Select({
    name,
    options = [
        { value: "value1", label: "label1" },
        { value: "value2", label: "label2" },
        { value: "value3", label: "label3" },
        { value: "value4", label: "label4" },
        { value: "value5", label: "label5" },
    ],
}) {
    return (
        <div className={Styles.select}>
            <select
                name={name}
                style={{
                    backgroundImage: "url(" + arrow + ") no-repeat right #ddd",
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
