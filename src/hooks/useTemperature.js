import { useState } from "react";

const useTemperature = () =>{

    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");
    

    const handleCelcius = (e) => {

        const value = e.target.value;
        setCelsius(value);

        const f = (value * 9/5) + 32;
        setFahrenheit(f);
    }

    const handleFahrenheit = (e) => {
        const value = e.target.value;
        setFahrenheit(value);

        const c = (value - 32)* 5/9;
        setCelsius(c);
    }
    return {celsius,fahrenheit,handleCelcius,handleFahrenheit}
}
export default useTemperature;