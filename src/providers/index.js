import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { NewGoalProvider } from "./addNewGoal";
import { GroupsProvider } from './groups';
import { ActivitieProvider } from "./ActivitiesCtx"
import { UserGoalsProvider } from "./GetGoals";

const providers = ({ children }) => {
    return(
        <LoginRequestProvider>
            <WindowSizeProvider>
                <NewGoalProvider>
                    <ActivitieProvider>
                        <FormDataProvider>
                            <GroupsProvider>
                                <UserGoalsProvider>
                                    {children}
                                </UserGoalsProvider>
                            </GroupsProvider>
                        </FormDataProvider>
                    </ActivitieProvider>
                </NewGoalProvider>
            </WindowSizeProvider>
        </LoginRequestProvider>
    )
}

export default providers;