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
      onChange = {(e) => setCelsius(e.target.value)}

      />
    </div>
    <div>
      <label>fahrenheit</label>
      <input type="number" 
      value={fahrenheit}
      onChange = {(e) => setFahrenheit(e.target.value)}
      
      />
    </div>

    </div>
    
  );
}

export default App
