import './App.css';
import Btn from './components/Button';
import freeCodeCampLogo from './img/fcc_primary_large.svg'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Freecodecamp logo' />
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Btn>1</Btn>
          <Btn>+</Btn>
        </div>
        <div className='row'>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
