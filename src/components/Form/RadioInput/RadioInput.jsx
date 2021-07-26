import React from "react";

import styles from "./RadioInput.module.scss";

export default function InputRadio({ checked, labelText, inputName }) {
    return (
        <>
            <label className={styles.inputRadio}>
                <input type="radio" name={inputName} defaultChecked={checked} />
                <span>{labelText}</span>
            </label>
        </>
    );
}
