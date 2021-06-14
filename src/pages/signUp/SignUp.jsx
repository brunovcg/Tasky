import Button from '../../components/button/Button';
import Input from '../../components/Input/Input';
import {Link, useHistory} from 'react-router-dom';
import {Container} from './styles' 
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../service/api'





const SignUp = () => {
    const formSchema = yup.object().shape({
        
        username: yup.string().required("User is required"),
        email: yup
                            .string()
                            .email("Invalid E-mail")
                            .required("E-mail is required"),
        confirmEmail: yup
                            .string()
                            .oneOf([yup.ref("email")], "E-mail is not same")
                            .email("Invalid E-mail")
                            .required("E-mail confirm is required"),            
        password: yup
                            .string()
                            .min(6)
                            .required("Password is required"),
        confirmPassword: yup
                            .string()
                            .oneOf([yup.ref("password")], "Password is not same")
                            .required("Password confirm is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const history = useHistory()

    const onSubmitFunction = ({username, email, password}) => {
        const user = {username, email, password};
        console.log(user);
        api
        .post("/users/", user)
        .then((_) => {
            return history.push('/login')
        })
        // .catch(alert("Alguma coisa me parece errada, tente outro E-mail"))
    };

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
                <form onSubmit={ handleSubmit(onSubmitFunction) }>
                    <div className="blueBoxForm">
                        
                            <Input
                                placeholder="User Name"    
                                register={register}
                                name="username"
                            />
                            <div className={"blueBoxFormError"}>
                                <p>{errors.username?.message}</p>
                            </div>

                            <Input
                                placeholder="What's your e-email?"    
                                register={register}
                                name="email"
                            />
                            <div className={"blueBoxFormError"}>
                                <p>{errors.email?.message}</p>
                            </div>

                            <Input
                                placeholder="Please confirm you e-mail"    
                                register={register}
                                name="confirmEmail"
                            />
                            <div className={"blueBoxFormError"}>
                                <p>{errors.confirmEmail?.message}</p>
                            </div>

                            <Input
                                placeholder="Chose a password"    
                                register={register}
                                name="password"
                                type="password"
                            />
                            <div className={"blueBoxFormError"}>
                                <p>{errors.password?.message}</p>
                            </div>

                            <Input
                                placeholder="Please confirm password"    
                                register={register}
                                name="confirmPassword"
                                type="password"
                            />
                            <div className={"blueBoxFormError"}>
                                <p>{errors.confirmPassword?.message}</p>
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
                    </form>
            </div>
            
        </Container>
    )
}

export default SignUp