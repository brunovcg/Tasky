import {Container, StyledInput} from './styles'

const Input = ({register, name, setBorder, ...rest}) => {
    return (
        
            <StyledInput 
            {...register(name)} 
            { ...rest }
            setBorder={setBorder}
            />
            
       
    )
}

export default Input;