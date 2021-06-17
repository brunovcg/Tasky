import {Route, Switch} from 'react-router-dom';
import Groups from '../pages/groups/groups';
import HomeDashboard from '../pages/homeDashboard/homeDashboard';
import Group from '../pages/group/Group';
import Habits from '../pages/Habits/Habits';
import PageNotFound from '../pages/pageNotFound/PageNotFound';

const RoutesDashboard = () => {

    
    return (
        <Switch>
            <Route exact path='/dashboard/'>
                <HomeDashboard/>
            </Route>
            <Route path='/dashboard/habits'>
                <Habits/>
            </Route>
            <Route path='/dashboard/groups'>
                <Groups/>
            </Route>
            <Route path="/dashboard/group">
                <Group/>
            </Route>            
            <Route>
                <PageNotFound/>
            </Route>
        </Switch>
    )
}

export default RoutesDashboard;
