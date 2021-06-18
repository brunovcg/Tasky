
import { Container}              from './styles';
import MyButton                                     from '../button/Button'

export const PopUp = ({ children, title, onClick, onClickClose, ...rest }) => {


  return (
    <Container>
      <div className="popUp">
        <div className="titleBox">
          <h2>{title}</h2>
          <MyButton click={onClickClose}  setColor='red' >X</MyButton>
        </div>
        <div className="formBox">
        <form {...rest} >
          <div className='inputBox'>
            {children}
          </div>
          <div className="buttonBox">
            
            <MyButton click={onClick} type='submit' setColor='var(--green)' setSize='large' >Save</MyButton>
          </div>
        </form>
        </div>
      </div>
    </Container>
  );
};
