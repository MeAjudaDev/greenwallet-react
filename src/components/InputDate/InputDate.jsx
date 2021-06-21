import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./InputDate.module.scss";
import calendar from "../../assets/calendar.svg";
import ptBR from "date-fns/locale/pt-BR";
registerLocale("pt-BR", ptBR);

export default function InputData({ placeholder }) {
    const [date, setDate] = React.useState("");

    return (
        <span className={styles.wrapper}>
            <DatePicker
                closeOnScroll={true}
                selected={date}
                dateFormat="dd/MM/yyyy"
                locale="pt-BR"
                onChange={(date) => setDate(date)}
                className={styles.input}
                placeholderText={placeholder}
            />
            <img src={calendar} />
        </span>
    );
}
