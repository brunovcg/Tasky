import {Route, Switch} from 'react-router-dom';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
// import Groups from '../pages/';
import Dashboard from '../pages/dashboard/Dashboard';
import SignUp from '../pages/signUp/SignUp';

const routes = () => {
    return (
        <Switch>
            {/* <Route exact path='/'>
                <Home/>
            </Route> */}
            <Route path='/signup'>
                <SignUp/>
            </Route>
            {/* <Route>
                <Login/>
            </Route> */}
            <Route path='/dashboard'>
                <Dashboard/>
            </Route>
            {/* <Route>
                <Habits/>
            </Route> */}
            {/* <Route>
                <Group/>
            </Route> */}
            <Route>
                <PageNotFound/>
            </Route>
        </Switch>
    )
}

export default routes;