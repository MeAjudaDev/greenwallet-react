import AppHeader from "./components/AppHeader";
import NavBar from "./components/NavBar";
import "./ListExpenses.css";

export default function ListExpenses(props) {
    const months = [
        {
            label: 'Janeiro',
            link: '#',
            selected: false
        },
        {
            label: 'Fevereiro',
            link: '#',
            selected: false
        },
        {
            label: 'Março',
            link: '#',
            selected: false
        },
        {
            label: 'Abril',
            link: '#',
            selected: true
        },
        {
            label: 'Maio',
            link: '#',
            selected: false
        }
    ]

    return (
        <>
            <AppHeader title="Casa" />
            <NavBar items={months} />
            <section className="expensesListWrapper"></section>
        </>
    );
}
