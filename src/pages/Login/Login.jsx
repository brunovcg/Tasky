import { StyledGrid, HeaderGrid, BodyGrid, FirstDiv, SecondDiv, ThirdDiv, H1, H1Title, H1text, StyledLink, InputDiv } from './styles'
import Input from '../../components/Input/Input'

const Login = () => {

  return (
    <StyledGrid container justify='column' >
      <HeaderGrid item>
        <FirstDiv>
          <H1>Tasky</H1>
        </FirstDiv>
        <SecondDiv>
          <H1Title>Login</H1Title>
        </SecondDiv>
        <ThirdDiv>
          <H1text>Don't have an account yet? <StyledLink>Sign In</StyledLink> </H1text>
        </ThirdDiv>
      </HeaderGrid>
      <BodyGrid item>
        <InputDiv>
          <Input />
        </InputDiv>
      </BodyGrid>
    </StyledGrid>
  )
};

export default Login;