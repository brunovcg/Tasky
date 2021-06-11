import { FormDataProvider } from './formData'

const providers = ({children}) => {
    //colocar o children como filho
    
    return (
        <FormDataProvider>
            {children}
        </FormDataProvider>
    )
}

export default providers;