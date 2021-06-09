import { StyledPaper, StyledGrid, Form, InputsDiv } from './styles';
import { Input, DivH1, H1, DivButton }               from './styles';
import { useForm }                                  from 'react-hook-form';
import * as yup                                     from 'yup';
import { yupResolver }                              from '@hookform/resolvers/yup';
import MyButton                                     from '../button/Button'


const PopUp = ({ title, firstInput, secondInput, thirdInput, chooseGoal }) => {

  const objectShape = () => {

    let object = {};
    if (firstInput)   object[firstInput]  = yup.string().required('Este campo é obrigatório');
    if (secondInput)  object[secondInput] = yup.string().required('Este campo é obrigatório');
    if (thirdInput)   object[thirdInput]  = yup.string().required('Este campo é obrigatório');
    if (chooseGoal)   object[chooseGoal]  = yup.string().required('Este campo é obrigatório');

    return object;
  }

  const schema = yup.object().shape(objectShape);

  const { register, handleSubmit, formState: { errors } } = useForm( { resolver: yupResolver(schema) } );

  const onSubmitFunc = data => console.log(data);

  return (
    <StyledGrid>
      <StyledPaper>
        <DivH1>
          <H1>{title}</H1>
        </DivH1>
        <Form onSubmit={handleSubmit(onSubmitFunc )} >
          <InputsDiv>
            { firstInput && <Input  placeholder={firstInput}   {...register(firstInput)}  /> }

            { secondInput && <Input placeholder={secondInput}  {...register(secondInput)} /> }

            { thirdInput && <Input  placeholder={thirdInput}   {...register(thirdInput)}  /> }

            { chooseGoal && <Input  placeholder={chooseGoal}   {...register(chooseGoal)}  /> }
          </InputsDiv>
          <DivButton>
            <MyButton type='submit' setColor='red' >Salvar</MyButton>
          </DivButton>
        </Form>
      </StyledPaper>
    </StyledGrid>
  );
};

export default PopUp;