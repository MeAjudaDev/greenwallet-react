import React from "react";
import styles from "./ExportModal.module.scss";
import InputDate from "../InputDate";
import InputRadio from "../InputRadio";
import Button from "../Button";

export default function ExportModal() {
    return (
        <section className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
                <h2>Export</h2>
                <form action="">
                    <fieldset className={styles.dateWrapper}>
                        <InputDate />
                        <InputDate />
                    </fieldset>
                    <fieldset>
                        <h3>Formato</h3>
                        <InputRadio label={"CSV"} />
                        <InputRadio label={"PDF"} />
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
