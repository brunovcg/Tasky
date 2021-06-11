import {Container} from './styles';
import Graphic from '../../assets/graphic.png';

const HomeDashboard = () => {
    return (
        <Container>
            <h3>Welcome to your page (username), ready to accomplish your next task?</h3>
            <img src={Graphic} alt='graphic'/>
        </Container>
    )
}

export default HomeDashboard;