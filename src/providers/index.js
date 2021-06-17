import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { NewGoalProvider } from "./addNewGoal";
import { UserGoalsProvider } from "./GetGoals";

const providers = ({ children }) => {
    return(
        <LoginRequestProvider>
            <WindowSizeProvider>
                <NewGoalProvider>
                    <FormDataProvider>
                        <UserGoalsProvider.Provider>
                            { children }
                        </UserGoalsProvider.Provider>
                    </FormDataProvider>
                </NewGoalProvider>
            </WindowSizeProvider>
        </LoginRequestProvider>
    )
}

export default providers;