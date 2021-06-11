import {Route, Switch} from 'react-router-dom';
import Group from '../pages/group/Group';
import Groups from '../pages/groups/groups';

const routesDashboard = () => {
    return (
        <Switch>
            <Route path='/dashboard/group'>
                <Group/>
            </Route>
            <Route path='/dashboard/groups'>
                <Groups/>
            </Route>
        </Switch>
    )
}

export default routesDashboard;