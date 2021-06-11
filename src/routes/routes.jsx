import {Route, Switch} from 'react-router-dom';
import Login from '../pages/Login/Login';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
import SignUp from '../pages/signUp/SignUp';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/Home/Home';

const routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/signup'>
                <SignUp/>
            </Route>
            <Route path='/login' >
                <Login />
            </Route>
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