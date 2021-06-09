import GlobalStyle from './styles/globalStyles';
import Routes from './routes/routes';
import PopUp from './components/pop-up/PopUp';

function App() {
  return (
    <div>
      <GlobalStyle/>
      {/* <Routes/> */}
      <PopUp h1='Resgiter New Ativity' firstInput='title' />
    </div>
  );
}

export default App;
