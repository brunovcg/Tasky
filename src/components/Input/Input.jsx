import {Container, StyledInput} from './styles'

const Input = ({register, name, ...rest}) => {
    return (
        
            <StyledInput 
            {...register(name)}
            { ...rest }/>
       
    )
}

export default Input;