import {Route, Switch} from 'react-router-dom';
import Login from '../pages/Login/Login';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
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
            <Route>
                <PageNotFound/>
            </Route>
        </Switch>
    )
}

export default routes;