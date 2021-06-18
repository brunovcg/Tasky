import GlobalStyle from './styles/globalStyles';
import Routes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div id="mainBody"> 
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <ToastContainer />
      <Routes/>
    </div>
  );
}

export default App;
