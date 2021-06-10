import {Route, Switch} from 'react-router-dom';
import Groups from '../pages/groups/groups';

const routesDashboard = () => {
    return (
        <Switch>
            <Route path='/dashboard/groups'>
                <Groups/>
            </Route>
        </Switch>
    )
}

export default routesDashboard;