import {Route, Switch} from 'react-router-dom';
import Login from '../pages/Login/Login';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
// import Groups from '../pages/groups/groups';
import Dashboard from '../pages/dashboard/Dashboard';

const routes = () => {
    return (
        <Switch>
            <Route exact path='/' >
                {/* <Home/> */}
            </Route>
            {/* <Route>
                <Signup/>
            </Route> */}
            <Route path='/login' >
                <Login />
            </Route>
            {/* <Route path='/dashboard'>
                <Dashboard/>
            </Route> */}
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