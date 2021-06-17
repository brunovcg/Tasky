import {Container} from './styles';
import Graphic from '../../assets/graphic.png';
import { useLoginData } from '../../providers/login';
import { useState } from 'react';

const HomeDashboard = () => {



  

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
    )
}

export default HomeDashboard;