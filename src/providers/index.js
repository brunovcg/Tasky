import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { NewGoalProvider } from "./newGoal";
import { GroupsProvider } from './groups';

const providers = ({children}) => {
    return(
        <LoginRequestProvider>
            <WindowSizeProvider>
                <NewGoalProvider>
                    <FormDataProvider>
                        <GroupsProvider>
                            {children}
                        </GroupsProvider>
                    </FormDataProvider>
                </NewGoalProvider>
            </WindowSizeProvider>
        </LoginRequestProvider>
    )
}

export default providers;