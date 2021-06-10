import {Container} from './styles'

const Input = ({ ...rest }) => {
    return (
        <Container>
            <input { ...rest } />
        </Container>
    )
}

export default Input;