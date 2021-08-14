import styles from "./RadioInput.module.scss";

interface Props {
    checked?: boolean;
    labelText: string;
    inputName: string;
};

export default function InputRadio({ checked = false, labelText, inputName }: Props) {
    return (
        <label className={styles.inputRadio}>
            <input type="radio" name={inputName} defaultChecked={checked} />
            <span>{labelText}</span>
        </label>
    );
}
