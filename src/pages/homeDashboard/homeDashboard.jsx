import {Container} from './styles';
import Graphic from '../../assets/graphic.png';

const HomeDashboard = () => {

<<<<<<< HEAD
    return (
        <Container>
            <h3>Welcome to your page NAME, ready to accomplish your next task?</h3>
            <img src={Graphic} alt='graphic'/>
        </Container>
=======


  

    const [username] = useState(JSON.parse(localStorage.getItem('@tasky/login/user')) || '');




   

    return (
        <>
        {
        
            <Container>
                <h3>{`Welcome to your page ${username}, ready to accomplish your next task?`}</h3>
                <img src={Graphic} alt='graphic'/>
            </Container>
        }
        </>
>>>>>>> e194bf77344644dd9662e4e28e9ff285199c207b
    )
}

export default HomeDashboard;