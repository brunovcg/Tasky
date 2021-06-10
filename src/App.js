import GlobalStyle from './styles/globalStyles';
import Routes from './routes/routes';
import { PopUp } from './components/pop-up/PopUp';
import { useContext } from 'react';
import { FormDataContext } from './providers/formData'

function App() {

  return (
    <div> 
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
