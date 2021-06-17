import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { GoalsRequestsProvider } from "./addNewGoal";
import { GroupsProvider } from './groups';
import { AuthProvider } from "./Authentication/Authentication";

const providers = ({ children }) => {
    return(
        <AuthProvider>
            <LoginRequestProvider>
                <WindowSizeProvider>
                    <GoalsRequestsProvider>         
                        <FormDataProvider>
                            <GroupsProvider>
                                    {children}
                            </GroupsProvider>
                        </FormDataProvider>
                    </GoalsRequestsProvider>
                </WindowSizeProvider>
            </LoginRequestProvider>
        </AuthProvider>
    )
}

export default providers;