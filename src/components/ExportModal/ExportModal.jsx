import React from "react";
import styles from "./ExportModal.module.scss";
import DateInput from "../Form/DateInput";
import RadioInput from "../Form/RadioInput";
import Button from "../Form/Button";

export default function ExportModal() {
    return (
        <section className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
                <h2>Exportar</h2>
                <form>
                    <fieldset className={styles.dateWrapper}>
                        <DateInput />
                        <DateInput />
                    </fieldset>
                    <fieldset>
                        <h3>Formato</h3>
                        <div className={styles.radioWrapper}>
                            <RadioInput label={"CSV"} />
                            <RadioInput label={"PDF"} />
                        </div>
                    </fieldset>
                    <fieldset className={styles.buttonWrapper}>
                        <Button type="button" textOnly>
                            Cancelar
                        </Button>
                        <Button type="submit" primary>
                            Exportar
                        </Button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
