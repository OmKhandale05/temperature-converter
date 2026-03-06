import { useState } from "react";
import useCurrencyRate from "./useCurrencyRate";

const useCurrency = () =>{

    const [usd, setUSD] = useState("");
    const [inr, setINR] = useState("");

    const rate = useCurrencyRate();

    // const rate = 91.7;

    const handleUsd = (e) => {
        const value = e.target.value;
        setUSD(value);

        if(rate){
            setINR(value * rate);
        }
    }
        

    const handleInr = (e) => {
        const value = e.target.value;
        setINR(value);
        if(rate){
            setUSD(value / rate);
        }
        
    }
    return{ usd, inr, rate, handleUsd, handleInr}
}

export default useCurrency;