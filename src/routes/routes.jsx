import {Route, Switch} from 'react-router-dom';
import PageNotFound from '../pages/pageNotFound/PageNotFound';

const routes = () => {
    return (
        <Switch>
            {/* <Route>
                <Home/>
            </Route>
            <Route>
                <Signup/>
            </Route>
            <Route>
                <Login/>
            </Route>
            <Route>
                <Dashboard/>
            </Route>
            <Route>
                <Habits/>
            </Route>
            <Route>
                <Groups/>
            </Route>
            <Route>
                <Group/>
            </Route> */}
            <Route>
                <PageNotFound/>
            </Route>
        </Switch>
    )
}

export default routes;