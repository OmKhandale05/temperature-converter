import { useState } from 'react';
import './App.css'
import TemperatureConverter from './components/TemperatureConverter';
import useCurrency from './hooks/useCurrency';
import useTemperature from './hooks/useTemperature';

function App() {

  
  const {usd, inr, rate, handleUsd, handleInr} = useCurrency();

  


  return (

    <div className='container'>
      
      <TemperatureConverter/>

      <div>
        <h1>Currency Converter</h1>
        <p>1 USD = {rate} INR</p>
        <div className='input-field'>
          <label>USD</label>

          <input type="number"
          value={usd}
          onChange = {handleUsd}
        
          />
          <span> $ </span>
        </div>
        <div className='input-field'>
          <label >INR</label>
          <input type="number"
          value={inr}
          onChange = {handleInr}
          
          />
          <span> ₹ </span>

        </div>

      </div>
    

    </div>
    

    
    
  );
}

export default App
