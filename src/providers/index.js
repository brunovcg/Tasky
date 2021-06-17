import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { GoalsRequestsProvider } from "./addNewGoal";
import { GroupsProvider } from './groups';
import { ActivitieProvider } from "./ActivitiesCtx"
import { UserGoalsProvider } from "./GetGoals";

const providers = ({ children }) => {
    return(
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
    )
}

export default providers;