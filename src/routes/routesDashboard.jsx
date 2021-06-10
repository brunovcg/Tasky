import {Route, Switch} from 'react-router-dom';
import Group from '../pages/group/Group';

const routesDashboard = () => {
    return (
        <Switch>
            <Route path='/dashboard/group'>
                <Group/>
            </Route>
        </Switch>
    )
}

export default routesDashboard;