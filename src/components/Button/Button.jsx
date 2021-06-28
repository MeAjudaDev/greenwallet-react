import propTypes from 'prop-types'

export default function Button({children, type, secondary, primary, textOnly}){
    return(
        <button type="button">Botão</button>
    )
}

Button.prototype = {
    primary: propTypes.bool,
    secondary: propTypes.bool,
    textOnly: propTypes.bool,
    type: propTypes.string.isRequired,
    children:propTypes.string.isRequired
}