import GlobalStyle from './styles/globalStyles';
import Routes from './routes/routes';
import PopUp from './components/pop-up/PopUp';

function App() {
  return (
    <div> 
      <GlobalStyle/>
      <PopUp title='Card test' firstInput='input 1' secondInput='test2' thirdInput='input 3' />
      {/* <Routes/> */}
     
    </div>
  );
}

export default App;
