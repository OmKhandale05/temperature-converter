import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import TemperatureConverter from './components/TemperatureConverter';


function App() {

  return (

    <div className='container'>

      <TemperatureConverter/>

      <CurrencyConverter/>

    </div>
  
  );
}

export default App
