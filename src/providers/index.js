import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";

const providers = ({children}) => {
    return(
        <LoginRequestProvider>
            <WindowSizeProvider>
                <FormDataProvider>
                    {children}
                </FormDataProvider>
            </WindowSizeProvider>
        </LoginRequestProvider>
    )
}

export default providers;