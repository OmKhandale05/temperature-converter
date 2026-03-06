import { useState } from 'react';
import './App.css'

function App() {

  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  

  return (
    <div>
    <h1>Temperature Converter</h1>

    <div>
      <label>Celsius</label>
      <input type="number"
      value={celsius}
      onChange = {(e) => {
        const value = (e.target.value);
        setCelsius(value);

        const f = (value * 9/5) + 32;
        setFahrenheit(f);
      }}


      />
    </div>
    <div>
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
    </div>

    </div>
    
  );
}

export default App
