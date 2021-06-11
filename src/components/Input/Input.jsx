import {Container, StyledInput} from './styles'

const Input = ({...rest }) => {
    return (
        <Container>
           <StyledInput {...rest}/>
        </Container>
    )
}

export default Input;