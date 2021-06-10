import { InputDataProvider } from './formData'

const providers = ({children}) => {
    //colocar o children como filho
    
    return (
        <InputDataProvider>
            {children}
        </InputDataProvider>
    )
}

export default providers;