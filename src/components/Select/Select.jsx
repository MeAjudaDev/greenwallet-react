import Styles from "./Select.module.scss"

export default function Select({ name }) {

    const options = [
        {value: 'value1', label: 'label1'},
        {value: 'value2', label: 'label2'},
        {value: 'value3', label: 'label3'},
        {value: 'value4', label: 'label4'},
        {value: 'value5', label: 'label5'}
    ]

    return <select name={name} className={Styles.select}>
       {
           options.map(option => (
               <option value={ option.value }>{ option.label } </option>
            )
           )
       }
    </select>;
}
