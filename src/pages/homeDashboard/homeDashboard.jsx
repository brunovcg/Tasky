import {Container} from './styles';
import Graphic from '../../assets/graphic.png';
import { useLoginData } from '../../providers/login';
import { useState } from 'react';

const HomeDashboard = () => {

    const { userLoginData, setUserLoginData } = useLoginData();

    const [username, setUsername] = useState();

    setUserLoginData['username'] = setUsername

    console.log(userLoginData);
    console.log(username);

    return (
        <>
        {
            // username &&
            <Container>
                <h3>Welcome to your page NAME, ready to accomplish your next task?</h3>
                <img src={Graphic} alt='graphic'/>
            </Container>
        }
        </>
    )
}

export default HomeDashboard;