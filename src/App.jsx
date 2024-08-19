import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [arr, setArr] = useState([])
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));

      } catch {
        setResult('Error');
      }
      setInput('');
    } 
    else if(value==='C'){
      setResult('')
      setInput('')
    }
    else {
      setInput(input + value);
    }
  };
  console.log(arr);

  return (
    <div className='container'>
      <h2>Калькулятор</h2>
      <div className='instructions'>
        {/* {<div></div>} */}
        <div className='input'>{input || result}</div>
        <div className='buttons'>
          <div>
            <button onClick={() => handleClick('7')} className='button number-7'>7</button>
            <button onClick={() => handleClick('8')} className='button number-8'>8</button>
            <button onClick={() => handleClick('9')} className='button number-9'>9</button>
            <button onClick={() => handleClick('*')} className='button number-um'>*</button>
          </div>
          <div>
            <button onClick={() => handleClick('4')} className='button number-4'>4</button>
            <button onClick={() => handleClick('5')} className='button number-5'>5</button>
            <button onClick={() => handleClick('6')} className='button number-6'>6</button>
            <button onClick={() => handleClick('/')} className='button number-bo'>/</button>
          </div>
          <div>
            <button onClick={() => handleClick('1')} className='button number-1'>1</button>
            <button onClick={() => handleClick('2')} className='button number-2'>2</button>
            <button onClick={() => handleClick('3')} className='button number-3'>3</button>
            <button onClick={() => handleClick('+')} className='button number-ko'>+</button>
          </div>
          <div>
            <button onClick={() => handleClick('0')} className='button number'>0</button>
            <button onClick={() => handleClick('C')} className='button number'>C</button>
            <button onClick={() => handleClick('=')} className='button number-='>=</button>
            <button onClick={() => handleClick('-')} className='button number-mi'>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App