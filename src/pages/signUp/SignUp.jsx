import Button from '../../components/button/Button';
import Input from '../../components/Input/Input';
import {Link, useHistory} from 'react-router-dom';
import {Container} from './styles' 
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../service/api'
import { useAuth } from '../../providers/Authentication/Authentication';
import { Redirect } from 'react-router'; 
import { toast } from 'react-toastify';


const SignUp = () => {

    const {authenticated} = useAuth()

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
            toast.success(`Thank's for subscribing!`)
            return history.push('/login')
        })
        .catch((_)=> toast.error("Something went wrong, try again!"))
    };

    if(authenticated) {
        return <Redirect to="/dashboard"/>
    }

    return(
        <Container>
            <div className="transparentBox">

                <div className="headerBox">
                    <h2>Sign Up</h2>
                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                    <h1>Tasky</h1>    
                </div>

                <div className="whiteBox">
                    <h3>Please enter you info:</h3>

                    <form onSubmit={ handleSubmit(onSubmitFunction) }>
                        <div className="whiteForm">
                            
                                <Input
                                    placeholder="Set an Username"    
                                    register={register}
                                    name="username"
                                    setBorder="var(--red)"

                                />
                                <div className={"formError"}>
                                    <p>{errors.username?.message}</p>
                                </div>

                                <Input
                                    placeholder="What's your e-email?"    
                                    register={register}
                                    name="email"
                                    setBorder="var(--red)"
                                />
                                <div className={"formError"}>
                                    <p>{errors.email?.message}</p>
                                </div>

                                <Input
                                    placeholder="Please confirm you e-mail"    
                                    register={register}
                                    name="confirmEmail"
                                    setBorder="var(--red)"
                                />
                                <div className={"formError"}>
                                    <p>{errors.confirmEmail?.message}</p>
                                </div>

                                <Input
                                    placeholder="Set a password"    
                                    register={register}
                                    name="password"
                                    type="password"
                                    setBorder="var(--red)"
                                />
                                <div className={"formError"}>
                                    <p>{errors.password?.message}</p>
                                </div>

                                <Input
                                    placeholder="Please confirm password"    
                                    register={register}
                                    name="confirmPassword"
                                    type="password"
                                    setBorder="var(--red)"
                                />
                                <div className={"formError"}>
                                    <p>{errors.confirmPassword?.message}</p>
                                </div>
                            </div>  

                            <div className="buttonBox">

                                <Button 
                                    setColor={'var(--red)'}
                                    setSize={'huge'}
                                    type="submit"
                                    >Sign Up
                                </Button>
                            </div>
                        </form>
                </div>
            </div>
        </Container>
    )
}

export default SignUp