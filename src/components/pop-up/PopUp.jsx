import { StyledPaper, StyledGrid, Form, InputsDiv } from './styles';
import { Input, DivH1, H1, DivButton, Select }              from './styles';
import MyButton                                     from '../button/Button'

export const PopUp = ({ children, title, onClick, ...rest }) => {


  return (
    <StyledGrid>
      <StyledPaper>
        <DivH1>
          <H1>{title}</H1>
        </DivH1>
        <Form {...rest} >
          <InputsDiv>
            {children}
          </InputsDiv>
          <DivButton>
            <MyButton click={onClick} type='submit' setColor='red' setSize='large' >Salvar</MyButton>
          </DivButton>
        </Form>
      </StyledPaper>
    </StyledGrid>
  );
};
