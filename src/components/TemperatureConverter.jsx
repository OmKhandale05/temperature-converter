import useTemperature from "../hooks/useTemperature";

const TemperatureConverter = () => {

    const {celsius, fahrenheit, handleCelcius, handleFahrenheit} = useTemperature();
    return(

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
    )
}
export default TemperatureConverter;