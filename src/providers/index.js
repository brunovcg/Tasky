import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';

const providers = ({children}) => {
    return(
        <WindowSizeProvider>
            <FormDataProvider>
                {children}
            </FormDataProvider>
        </WindowSizeProvider>
    )
}

export default providers;