import './EditCategory.css';

function EditCategory(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <label id="description">
                Descrição
                <br />
                <input type="input" placeholder="Alimentação" />
            </label>
            <label id="enabled">
                Habilitado?
                <br />
                <input type="checkbox" />
            </label>
            <button className="buttonCancelar">Cancelar</button>
            <button className="buttonSalvar">Salvar</button>
        </div>
    );
}

export default EditCategory;
