import {Container} from './styles' 
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { LoginRequestContext } from '../../providers/login';
import { useHistory, Link } from 'react-router-dom';
import {useAuth} from '../../providers/Authentication/Authentication'
import { Redirect } from 'react-router';

const Login = () => {

  const { setUserLoginData } = useContext(LoginRequestContext);

  const history = useHistory();

  const {authenticated, setAuthenticated} = useAuth()

  const schema = yup.object().shape({
    username: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const redirect = () => history.push('/dashboard');

  const { handleSubmit, register, formState: { errors } } = useForm( { resolver: yupResolver(schema) } )

  const submitFunc = (data) => {
    setUserLoginData({data, redirect: redirect()});
  };

  if(authenticated) {
    return <Redirect to="/dashboard"/>
}

  return (
      <Container >

        <div className="transparentBox">

        <div className="headerBox">
            <h2>Login</h2>
            <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
            <h1>Tasky</h1>    
        </div>


        <div className="whiteBox">
          <h3>Please enter you info:</h3>
          <form onSubmit={ handleSubmit(submitFunc) }>
            
          <div className="whiteForm">
               <Input
                  placeholder="Enter your username"    
                  register={register}
                  name="username"
                  setBorder="var(--blue)"
                />
                <div className={"formError"}>
                   <p>{errors.username?.message}</p>
                </div>

                <Input
                  placeholder="Enter your password"
                  type='password'    
                  register={register}
                  name="password"
                  setBorder="var(--blue)"
                />
                <div className={"formError"}>
                   <p>{errors.password?.message}</p>
                </div>

                <div className="buttonBox">
                  <Button 
                      setColor={'var(--blue)'}
                      setSize={'huge'}
                      type="submit"
                      >Login
                  </Button>                
                </div>

             </div>


          </form>


        

           

        
        </div>


        </div> 

             
    </Container>
  )
};

export default Login;