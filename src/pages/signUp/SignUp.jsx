import Button from '../../components/button/Button';
import Input from '../../components/Input/Input';
import {Link} from 'react-router-dom';
import {Container} from './styles' 



const SignUp = () => {

    return(
        <Container>
            <div className="whiteBox">
                <div className="whiteBoxTitle">
                    <h2>Sign Up</h2>
                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                </div>
                <div className="whiteBoxName">
                    <h1>Tasky</h1>
                </div>

            </div>

            <div className="blueBox">
                <div className="blueBoxForm">

                    <Input
                        placeholder="User Name"    
                        register={""}
                        name="userName"
                    />
                    <div className={"blueBoxFormError"}>
                        <p>{"erro teste"}</p>
                    </div>

                    <Input
                        placeholder="What's your e-email?"    
                        register={""}
                        name="email"
                    />
                    <div className={"blueBoxFormError"}>
                        <p>{""}</p>
                    </div>

                    <Input
                        placeholder="Please confirm you e-mail"    
                        register={""}
                        name="confirmEmail"
                    />
                    <div className={"blueBoxFormError"}>
                        <p>{""}</p>
                    </div>

                    <Input
                        placeholder="Chose a password"    
                        register={""}
                        name="password"
                        type="password"
                    />
                    <div className={"blueBoxFormError"}>
                        <p>{""}</p>
                    </div>

                    <Input
                        placeholder="Please confirm password"    
                        register={""}
                        name="confirmPassword"
                        type="password"
                    />
                    <div className={"blueBoxFormError"}>
                        <p>{"erro teste 2"}</p>
                    </div>
                </div>  
                <div className="blueBoxButton">

                    <Button 
                        setColor={'var(--red)'}
                        setSize={'large'}
                        click={()=>console.log("test sign up")}
                        type="submit"
                        >Sign Up
                    </Button>
                </div>
                
            </div>

        </Container>
    )
}

export default SignUp