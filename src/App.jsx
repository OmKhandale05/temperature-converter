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
      <input type="number" />
    </div>
    <div>
      <label>fahrenheit</label>
      <input type="number" />
    </div>

    </div>
    
    
  );
}

export default App
