import ptBR from "date-fns/locale/pt-BR";
import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../../../assets/calendar.svg";
import styles from "./DateInput.module.scss";
registerLocale("pt-BR", ptBR);

interface DateInputProps {
    placeholder: string;
}

export default function DateInput({ placeholder }: DateInputProps) {
    const [date, setDate] = React.useState("");

    return (
        <span className={styles.wrapper}>
            <DatePicker
                closeOnScroll={true}
                selected={new Date(date)}
                dateFormat="dd/MM/yyyy"
                locale="pt-BR"
                onChange={date => setDate(date)}
                className={styles.input}
                placeholderText={placeholder}
            />
            <img src={calendar} />
        </span>
    );
}
