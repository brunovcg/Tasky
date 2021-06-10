import { StyledPaper, StyledGrid, Form, InputsDiv } from './styles';
import { Input, DivH1, H1, DivButton }               from './styles';
import { useForm }                                  from 'react-hook-form';
import * as yup                                     from 'yup';
import { yupResolver }                              from '@hookform/resolvers/yup';
import MyButton                                     from '../button/Button'
import { useContext }                               from 'react';
import { InputDataContext }                         from '../../providers/formData' 

export const PopUp = ({ title, form }) => {

  const { setFormData } = useContext(InputDataContext);

  let firstInput = null;
  let secondInput = null;
  let thirdInput = null;
  let percentage = null;
  let cardOne = false;
  let cardTwo = false;
  let cardThree = false;
  let cardFour = false;

  if (form === 'new Habit') {
    firstInput = 'title';
    secondInput = 'Category';
    thirdInput = 'Frequency';
    cardOne = true
  }
  if (form === 'new Group') {
    firstInput = 'Name';
    secondInput = 'Description';
    thirdInput = 'Category';
    cardTwo = true;
  }
  if (form === 'new Activity') {
    firstInput = 'Title';
    cardThree = true;
  }
  if (form === 'new Goal') {
    firstInput = 'Title';
    secondInput = 'Difficult';
    percentage = '%';
    cardFour = true;
  }


  const schema = 
    (
      cardOne && yup.object().shape({
        [firstInput]: yup.string().required('Este campo é obrigatório'),
        [secondInput]: yup.string().required('Este campo é obrigatório'),
        [thirdInput]: yup.string().required('Este campo é obrigatório'),
      }) 
      || 
      cardTwo && yup.object().shape({
        [firstInput]: yup.string().required('Este campo é obrigatório'),
        [secondInput]: yup.string().required('Este campo é obrigatório'),
        [thirdInput]: yup.string().required('Este campo é obrigatório'),
      })
      || 
      cardThree && yup.object().shape({
        [firstInput]: yup.string().required('Este campo é obrigatório'),
      })
      || 
      cardFour && yup.object().shape({
        [firstInput]: yup.string().required('Este campo é obrigatório'),
        [secondInput]: yup.string().required('Este campo é obrigatório'),
        [percentage]: yup.number().required('Este campo é obrigatório'),
      })
    );

  const { register, handleSubmit, formState: { errors } } = useForm( { resolver: yupResolver(schema) } );

  const onSubmitFunc = data => setFormData(data);

  return (
    <StyledGrid>
      <StyledPaper>
        <DivH1>
          <H1>{title}</H1>
        </DivH1>
        <Form onSubmit={handleSubmit(onSubmitFunc)} >
          <InputsDiv>
            { firstInput && <Input  placeholder={firstInput}   {...register(firstInput)}  erro={errors[firstInput]?.message} /> }

            { secondInput && <Input placeholder={secondInput}  {...register(secondInput)} erro={errors[secondInput]?.message} /> }

            { thirdInput && <Input  placeholder={thirdInput}   {...register(thirdInput)}  erro={errors[thirdInput]?.message} /> }

            { percentage && <Input  placeholder={percentage}   {...register(percentage)}  erro={errors[percentage]?.message} /> }
          </InputsDiv>
          <DivButton>
            <MyButton type='submit' setColor='red' setSize='large' >Salvar</MyButton>
          </DivButton>
        </Form>
      </StyledPaper>
    </StyledGrid>
  );
};
