import {Route, Switch} from 'react-router-dom';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
import Dashboard from '../pages/dashboard/Dashboard';

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
            </Route> */}
            <Route path='/dashboard'>
                <Dashboard/>
            </Route>
            <Route>
                <PageNotFound/>
            </Route>
        </Switch>
    )
}

export default routes;