import Button from '../../components/button/Button';
import {Container} from './styles' 
import Task from '../../assets/task2.png'
import { useHistory } from 'react-router-dom'


const Home = () => {
    const history = useHistory()

    const handleGoToSignUp = (path) => {
        return history.push(path)
    }

    const handleGoToLogin = (path) => {
        return history.push(path)
    }

    
    return (
        <Container>
            <div className="transparentBox">

        
                <div className="headerBox">
                    <img src={Task}/>
                
                    <h1>Tasky</h1>
                </div>

                <div className="descriptionBox">   
                    <p>Hit your goals through team working..</p>
                </div>
            
                <div className="buttonBox">
                
                <Button 
                    setColor={'var(--red)'} 
                    setSize={'huge'} 
                    click={() => handleGoToSignUp('/signup')}
                >Sign Up</Button>
                
                <Button 
                    setColor={'var(--blue)'} 
                    setSize={'huge'} 
                    click={() => handleGoToLogin('/login')}
                >Login</Button>

                 </div>
            </div>
        
        </Container>
    )
}

export default Home;