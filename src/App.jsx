import { useState } from 'react';
import './App.css'

function App() {

  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  

  return (
    <div className='container'>
    <h1>Temperature Converter</h1>

    <div className='input-field'>
      <label>Celsius</label>

      <input type="number"
      value={celsius}
      onChange = {(e) => {
        const value = (e.target.value);
        setCelsius(value);

        const f = (value * 9/5) + 32;
        setFahrenheit(f) ;
      }}
      />
      <span> °C </span>
    </div>
    <div className='input-field'>
      <label>fahrenheit</label>

      <input type="number"
      value={fahrenheit}
      onChange = {(e) => {
        const value = e.target.value;
        setFahrenheit(value);

        const c = (value - 32) * 5/9;
        setCelsius(c);
      } }
      
      />
      <span> °F </span>
    </div>

    </div>
    
  );
}

export default App
