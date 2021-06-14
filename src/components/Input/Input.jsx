import {Container, StyledInput} from './styles'

const Input = ({register, name, ...rest}) => {
    return (
        <Container>
            <input {...register(name)} { ...rest }/>
        </Container>
    )
}

export default Input;