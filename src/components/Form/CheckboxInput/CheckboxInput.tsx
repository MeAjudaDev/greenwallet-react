import { ChangeEvent, ChangeEventHandler } from "react";
import styles from "./CheckboxInput.module.scss";

interface CheckboxInputProps {
    checked: boolean;
    checkboxClass: string;
    id: string;
    label: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler;
}

export default function CheckboxInput({
    checked = false,
    checkboxClass = "",
    id,
    label,
    name,
    value,
    onChange,
}: CheckboxInputProps) {
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
