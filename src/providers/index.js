import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { NewGoalProvider } from "./newGoal";

const providers = ({children}) => {
    return(
        <LoginRequestProvider>
            <WindowSizeProvider>
                <NewGoalProvider>
                    <FormDataProvider>
                        {children}
                    </FormDataProvider>
                </NewGoalProvider>
            </WindowSizeProvider>
        </LoginRequestProvider>
    )
}

export default providers;