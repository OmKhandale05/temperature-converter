import { useState } from 'react';
import './App.css'
import useCurrency from './hooks/useCurrency';
import useTemperature from './hooks/useTemperature';

function App() {

  const {celsius, fahrenheit, handleCelcius, handleFahrenheit} = useTemperature();
  const {usd, inr, handleUsd, handleInr} = useCurrency();

  


  return (

    <div className='container'>
      <div>
        <h1>Temperature Converter</h1>

        <div className='input-field'>
          <label>Celsius</label>

          <input type="number"
          value={celsius}
          onChange = {handleCelcius}
          />
          <span> °C </span>
        </div>
        <div className='input-field'>
          <label>fahrenheit</label>

          <input type="number"
          value={fahrenheit}
          onChange = {handleFahrenheit}
          
          />
          <span> °F </span>
        </div>

      </div>

      <div>
        <h1>Currency Converter</h1>
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
