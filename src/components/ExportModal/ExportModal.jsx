import React from "react";
import styles from "./ExportModal.module.scss";

export default function ExportModal() {
    return (
        <section className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
                <h2>Export</h2>
                <form action="">
                    <fieldset className={styles.dateWrapper}>
                        <input type="date" />
                        <input type="date" />
                    </fieldset>
                    <fieldset className={styles.radioWrapper}>
                        <h3>Formato</h3>
                        <label>
                            <input type="radio" name="file-format" />
                            CSV
                        </label>
                        <label>
                            <input type="radio" name="file-format" />
                            PDF
                        </label>
                    </fieldset>
                    <fieldset className={styles.buttonWrapper}>
                        <button type="button">Cancelar</button>
                        <button type="submit">Exportar</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
