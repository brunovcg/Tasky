import { StyledPaper, StyledGrid, Form, InputsDiv, Input, DivH1, H1, DivInput } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const PopUp = ({ h1, firstInput, secondInput, thirdInput}) => {

  const schema = yup.object().shape({
    firstInput: yup.string().required('Este campo é obrigatório'),
    secondInput: yup.string().required('Este campo é obrigatório'),
    thirdInput: yup.string().required('Este campo é obrigatório'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm( { resolver: yupResolver(schema) } );

  const onSubmitFunc = data => console.log(data);

  return (
    <StyledGrid>
      <StyledPaper>
        <DivH1>
          <H1>{h1}</H1>
        </DivH1>
        <Form onSubmit={handleSubmit(onSubmitFunc )} >
          <InputsDiv>
            { firstInput && <Input placeholder={firstInput} {...register('firstInput')} /> }

            { secondInput && <Input placeholder={secondInput} {...register('secondInput')} /> }

            { thirdInput && <Input placeholder={thirdInput} {...register('thirdInput')} /> }
          </InputsDiv>
          <button type='submit' >Salvar</button>
        </Form>
      </StyledPaper>
    </StyledGrid>
  );
};

export default PopUp;