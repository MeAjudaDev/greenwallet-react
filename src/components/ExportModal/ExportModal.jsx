import React from "react";
import styles from "./ExportModal.module.scss";
import InputDate from "../InputDate";
import InputRadio from "../InputRadio";
import Button from "../Button";

export default function ExportModal() {
    return (
        <section className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
                <h2>Exportar</h2>
                <form>
                    <fieldset className={styles.dateWrapper}>
                        <InputDate />
                        <InputDate />
                    </fieldset>
                    <fieldset>
                        <h3>Formato</h3>
                        <div className={styles.radioWrapper}>
                            <InputRadio label={"CSV"} />
                            <InputRadio label={"PDF"} />
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