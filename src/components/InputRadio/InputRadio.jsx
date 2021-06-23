import React from "react";

import styles from "./InputRadio.module.scss";

export default function InputRadio({ checked, label, inputName }) {
    return (
        <>
            <label className={styles.inputRadio}>
                <input type="radio" name={inputName} checked={checked} />
                <span>{label}</span>
            </label>
        </>
    );
}
