import Button from '../../components/button/Button';
import {Container} from './styles' 
import Task from '../../assets/task2.png'
import TaskMobile from '../../assets/taskMobile.png'
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
            <div className="mobileTop">
                <div className="task">
                    <img src={Task} />
                </div>

                <div className="taskMobile">
                    <img src={TaskMobile} width="50" heigth="50"/>
                </div>
                
                <div className="titleMobile">
                        <h1>Tasky</h1>
                </div>
            </div>
            
            <div className="whiteBox">
                <div className="title">
                    <h1>Tasky</h1>
                </div>
                
                <div className="boxText">
                    <p>
                        Hit your goals through team working.
                    </p>
                </div>
                
                <div className="buttonPlace">
                    
                    <Button 
                        setColor={'var(--red)'} 
                        setSize={'large'} 
                        click={() => handleGoToSignUp('/signup')}
                    >Sign Up</Button>
                    
                    <Button 
                        setColor={'var(--blue)'} 
                        setSize={'large'} 
                        click={() => handleGoToLogin('/login')}
                    >Login</Button>

                </div>
            </div>
            
            
        </Container>
    )
}

export default Home;