import GlobalStyle from './styles/globalStyles';
import Routes from './routes/routes';
import { useContext } from 'react';
import { FormDataContext } from './providers/formData';
import { PopUp } from './components/pop-up/PopUp';

function App() {

  const { formData } = useContext(FormDataContext);
  console.log(formData);

  return (
    <div> 
      <GlobalStyle/>
      <PopUp title='new ativcti' form='new Goal' />
      {/* <Routes/> */}
    </div>
  );
}

export default App;
