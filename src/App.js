import './App.css';
import freeCodeCampLogo from './img/fcc_primary_large.svg';
import Btn from './components/Button';
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    if (input.length < 20) {
      setInput(input + val);
    }
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Freecodecamp logo' />
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Btn handleClick={addInput}>1</Btn>
          <Btn handleClick={addInput}>2</Btn>
          <Btn handleClick={addInput}>3</Btn>
          <Btn handleClick={addInput}>+</Btn>
        </div>
        <div className='row'>
          <Btn handleClick={addInput}>4</Btn>
          <Btn handleClick={addInput}>5</Btn>
          <Btn handleClick={addInput}>6</Btn>
          <Btn handleClick={addInput}>-</Btn>
        </div>
        <div className='row'>
          <Btn handleClick={addInput}>7</Btn>
          <Btn handleClick={addInput}>8</Btn>
          <Btn handleClick={addInput}>9</Btn>
          <Btn handleClick={addInput}>*</Btn>
        </div>
        <div className='row'>
          <ClearBtn handleClear={()=> setInput('')}>
            AC
          </ClearBtn>
          <Btn handleClick={addInput}>0</Btn>
          <Btn handleClick={addInput}>.</Btn>
          <Btn handleClick={addInput}>/</Btn>
        </div>
        <div className='row'>
          <Btn handleClick={calcResult}>=</Btn>
        </div>
      </div>
    </div>
  );
}

export default App;
