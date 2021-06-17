import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { GoalsRequestsProvider } from "./addNewGoal";
import { GroupsProvider } from './groups';
import { ActivitieProvider } from "./ActivitiesCtx"
import { UserGoalsProvider } from "./GetGoals";
import { AuthProvider } from "./Authentication/Authentication";

const providers = ({ children }) => {
    return(
        <AuthProvider>
            <LoginRequestProvider>
                <WindowSizeProvider>
                    <GoalsRequestsProvider>
                        <ActivitieProvider>
                            <FormDataProvider>
                                <GroupsProvider>
                                        {children}
                                </GroupsProvider>
                            </FormDataProvider>
                        </ActivitieProvider>
                    </GoalsRequestsProvider>
                </WindowSizeProvider>
            </LoginRequestProvider>
        </AuthProvider>
    )
}

export default providers;