import {Header, Container, MainContainer} from './styles';
import SideMenu from '../../components/sideMenu/SideMenu';
import RoutesDashboard from '../../routes/routesDashboard';
import {useAuth} from '../../providers/Authentication/Authentication'
import { Redirect } from 'react-router';


const Dashboard = () => {

    const {authenticated} = useAuth()

    if(!authenticated) {
        return <Redirect to={"/"}/>
    }


    return (
        <Container>
            <div className='SideMenuContainer'>
                <SideMenu/>
            </div>
            <div className='DivContainer'>
                <Header>
                    <h2>Dashboard</h2>
                    <h1>Tasky</h1>
                </Header>
                <MainContainer>
                    <RoutesDashboard/>
                </MainContainer>
            </div>
        </Container>
    )
}

export default Dashboard;