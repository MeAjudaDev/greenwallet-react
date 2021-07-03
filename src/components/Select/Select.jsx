export default function Select({ name }) {

    const options = [
        {value: 'value1', label: 'label1'},
        {value: 'value2', label: 'label2'},
        {value: 'value3', label: 'label3'},
        {value: 'value4', label: 'label4'},
        {value: 'value5', label: 'label5'}
    ]

    return <select name={name}>
       {
           options.map(option => (
           ))
       }
    </select>;
}
