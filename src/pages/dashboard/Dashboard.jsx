import {Header, Container, MainContainer} from './styles';
import SideMenu from '../../components/sideMenu/SideMenu';

const Dashboard = () => {
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
                    
                </MainContainer>
            </div>
        </Container>
    )
}

export default Dashboard;