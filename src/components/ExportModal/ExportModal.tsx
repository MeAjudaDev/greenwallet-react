import Button from "../Form/Button";
import DateInput from "../Form/DateInput";
import RadioInput from "../Form/RadioInput";
import styles from "./ExportModal.module.scss";

export default function ExportModal() {
    return (
        <section className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
                <h2>Exportar</h2>
                <form>
                    <fieldset className={styles.dateWrapper}>
                        <DateInput placeholder="" />
                        <DateInput placeholder="" />
                    </fieldset>
                    <fieldset>
                        <h3>Formato</h3>
                        <div className={styles.radioWrapper}>
                            <RadioInput labelText="CSV" inputName="csv" />
                            <RadioInput labelText="PDF" inputName="pdf" />
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
