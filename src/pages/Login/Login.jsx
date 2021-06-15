import { StyledGrid, HeaderGrid, BodyForm, FirstDiv, SecondDiv, ThirdDiv, H1, H1Title, H1text, StyledLink, EachDivInput } from './styles';
import { DivsInputs, DivButton, BottomH1, H1DesktopText, ErrorMSG } from './styles';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { LoginRequestContext } from '../../providers/login';

const Login = () => {

  const { setUserLoginData } = useContext(LoginRequestContext);

  const schema = yup.object().shape({
    username: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });


  const { handleSubmit, register, formState: { errors } } = useForm( { resolver: yupResolver(schema) } )

  const submitFunc = (data) => {
    setUserLoginData(data);
  };

  return (
    <StyledGrid >
      <HeaderGrid>
        <FirstDiv>
          <H1>Tasky</H1>
        </FirstDiv>
        <SecondDiv>
          <H1Title >Login</H1Title>
          <H1DesktopText>Don't have an account yet? <StyledLink to='/signup' >Sign Up</StyledLink> </H1DesktopText>
        </SecondDiv>
        <ThirdDiv>
          <H1text>Don't have an account yet? <StyledLink to='/signup' >Sign Up</StyledLink> </H1text>
          <BottomH1>Tasky</BottomH1>
        </ThirdDiv>
      </HeaderGrid>
      <BodyForm onSubmit={handleSubmit(submitFunc)} >
        <DivsInputs >
          <EachDivInput>
            <Input placeholder='Username' register={register} name='username' />
            <ErrorMSG>{errors.username?.message}</ErrorMSG>
          </EachDivInput>
          <EachDivInput>
            <Input type='password' placeholder='Password' register={register} name='password' />
            <ErrorMSG>{errors.password?.message}</ErrorMSG>
          </EachDivInput>
        </DivsInputs>
        <DivButton>
          <Button type='submit' setColor='red' setSize='large' >Login</Button>
        </DivButton>
      </BodyForm>
    </StyledGrid>
  )
};

export default Login;