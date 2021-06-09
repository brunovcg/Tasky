import {Container} from './styles'

const Input = ({ placeholder, type, ...rest }) => {
    return (
        <Container>
            <input {...rest} />
        </Container>
    )
}

export default Input;