import {Route, Switch} from 'react-router-dom';
import Groups from '../pages/groups/groups';
import HomeDashboard from '../pages/homeDashboard/homeDashboard';

const routesDashboard = () => {
    return (
        <Switch>
            <Route path='/dashboard/home'>
                <HomeDashboard/>
            </Route>
            <Route path='/dashboard/groups'>
                <Groups/>
            </Route>
        </Switch>
    )
}

export default routesDashboard;