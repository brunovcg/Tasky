import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { NewGoalProvider } from "./newGoal";
import { GroupsProvider } from './groups';
import { ActivitieProvider } from "./ActivitiesCtx"

const providers = ({children}) => {
    return(
        <LoginRequestProvider>
            <WindowSizeProvider>
                <NewGoalProvider>
                    <ActivitieProvider>
                        <FormDataProvider>
                            <GroupsProvider>
                                {children}
                            </GroupsProvider>
                        </FormDataProvider>
                    </ActivitieProvider>
                </NewGoalProvider>
            </WindowSizeProvider>
        </LoginRequestProvider>
    )
}

export default providers;