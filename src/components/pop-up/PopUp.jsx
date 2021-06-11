import { StyledPaper, StyledGrid, Form, InputsDiv } from './styles';
import { Input, DivH1, H1, DivButton, Select }              from './styles';
import { useForm }                                  from 'react-hook-form';
import * as yup                                     from 'yup';
import { yupResolver }                              from '@hookform/resolvers/yup';
import MyButton                                     from '../button/Button'
import { useContext }                               from 'react';
import { FormDataContext }                          from '../../providers/formData' 

export const PopUp = ({ title, form }) => {

  const { setFormData } = useContext(FormDataContext);

  let firstInput  = null;
  let secondInput = null;
  let thirdInput  = null;
  let percentage  = null;
  let completeAct = null;
  let cardOne     = false;
  let cardTwo     = false;
  let cardThree   = false;
  let cardFour    = false;
  let cardFive    = false;

  if (form === 'new Habit') {
    firstInput  = 'title';
    secondInput = 'category';
    thirdInput  = 'frequency';
    cardOne = true
  }
  if (form === 'new Group') {
    firstInput  = 'name';
    secondInput = 'description';
    thirdInput  = 'category';
    cardTwo = true;
  }
  if (form === 'new Activity') {
    firstInput  = 'title';
    cardThree   = true;
  }
  if (form === 'new Goal') {
    firstInput  = 'title';
    secondInput = 'difficult';
    percentage  = '%';
    cardFour    = true;
  }
  if (form === 'completed Activity') {
    completeAct  = 'complete Activity';
    cardFive     = true;
  }


  const schema = 
    (
      cardOne && yup.object().shape({
        [firstInput]:   yup.string().required('Este campo é obrigatório'),
        [secondInput]:  yup.string().required('Este campo é obrigatório'),
        [thirdInput]:   yup.string().required('Este campo é obrigatório'),
      }) 
      || 
      cardTwo && yup.object().shape({
        [firstInput]:   yup.string().required('Este campo é obrigatório'),
        [secondInput]:  yup.string().required('Este campo é obrigatório'),
        [thirdInput]:   yup.string().required('Este campo é obrigatório'),
      })
      || 
      cardThree && yup.object().shape({
        [firstInput]:   yup.string().required('Este campo é obrigatório'),
      })
      || 
      cardFour && yup.object().shape({
        [firstInput]:   yup.string().required('Este campo é obrigatório'),
        [secondInput]:  yup.string().required('Este campo é obrigatório'),
        [percentage]:   yup.number().required('Este campo é obrigatório'),
      })
      || 
      cardFive && yup.object().shape({
        [completeAct]:   yup.string().required('Este campo é obrigatório'),
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

            { completeAct && <Select {...register(completeAct)} > { ['one', 'two', 'tree', 'four'].map( (el) => <option> {el} </option> ) } </Select> }
          </InputsDiv>
          <DivButton>
            <MyButton type='submit' setColor='red' setSize='large' >Salvar</MyButton>
          </DivButton>
        </Form>
      </StyledPaper>
    </StyledGrid>
  );
};
