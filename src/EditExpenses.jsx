import './EditExpenses.css';

function EditExpenses(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Valor R$</p>
            <span>99,90</span>
            <label>
                Descrição
                <input type="input" placeholder="Internet" />
            </label>
            <div style={{display:'flex'}}>
                <div>
                    <span>Categoria</span>
                    <div className="container-item">
                        <input type="checkBox" className="check-item"/>
                        <input type="checkBox" className="check-item"/>
                        <input type="checkBox" className="check-item"/>
                        <input type="checkBox" className="check-item"/>
                        <input type="checkBox" className="check-item"/>
                        <input type="checkBox" className="check-item"/>
                        <input type="checkBox" className="check-item"/>
                        </div>
                    </div>
                <div>
                    <span>Tipo</span>
                    <div className="container-item">
                        <input type="radio" className="check-item"/>
                        <input type="radio" className="check-item"/>
                    </div>
                </div>
            </div>
                <label>
                    <input type="checkBox" className="check-item"/>
                    Com vencimento
                </label>
                    <span>Valor R$</span>
                    <p>99,90</p>
                    <button className="">Cancelar</button>
                    <button className="">Salvar</button>
        </div>
    );
}

export default EditExpenses;
