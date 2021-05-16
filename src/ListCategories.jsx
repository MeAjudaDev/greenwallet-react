import './ListCategories.css';
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar';
import toBRL from './utils/formatNumber';

function ListCategories(props) {
    const months = [
        { label: "Janeiro", link: "#", selected: false },
        { label: "Fevereiro", link: "#", selected: false },
        { label: "Março", link: "#", selected: false },
        { label: "Abril", link: "#", selected: true },
        { label: "Maio", link: "#", selected: false }
    ];

    const categories = [
        { description: 'Alimentação', value: 831.66 },
        { description: 'Casa', value: 1956.00 },
        { description: 'Transporte', value: 200.00 },
        { description: 'Estudo', value: 356.00 },
        { description: 'Lazer', value: 256.21 },
        { description: 'Saúde', value: 310.00 }
    ];

    return (
        <div>
            <AppHeader title={props.title} />
            <NavBar items={months} />
            <section className='categoriesListWrapper'>
                <h2 className='categoriesList__totalValue'>{toBRL(3599.57)}</h2>
                <h3 className='categoriesList__description'>TOTAL POR CATEGORIA</h3>
                <hr className='categoriesList__divider' />
                <ul className='categoriesList'>
                    {categories.map(category =>
                        <li key={category.description} className='categoriesList__item'>
                            <span>{category.description}</span>
                            <span>{toBRL(category.value)}</span>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    );
}

export default ListCategories;
