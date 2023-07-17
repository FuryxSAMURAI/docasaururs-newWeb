import React, { useState } from 'react';
import styles from './permutations.css';

function factorial(number) {
  let result = 1;
  for (let count = number; count > 1; count--) {
    result *= count;
  }
  return result;
}

function Permutations() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const calculateFactorial = () => {
    const factorialResult = factorial(number);
    setResult(factorialResult);
  };

  return (
    <div>
      <div className='title'>Калькулятор для обчислення кількості перестановок з n елементів Pn</div>
      <div>
        <div className='input'>
          <label htmlFor="factorial">Число</label>
          <input id='factorial' onChange={(e) => setNumber(Number(e.target.value))} type="number" />
        </div>
        <button className='btn' onClick={calculateFactorial} type='submit'>Знайти число перестановок</button>
        <div className='result'>Результат : {result}</div>
        <div className='formula'>Формула : Pn = n!</div>
      </div>
    </div>
  );
}

export default Permutations;
