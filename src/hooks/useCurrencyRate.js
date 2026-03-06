import { useEffect, useState } from "react";

const useCurrencyRate = () =>{

    const [rate, setRate] = useState(null);

    useEffect(() => {
        const fetchRate = async () => {
            const response = await fetch("https://open.er-api.com/v6/latest/USD");
            const data = await response.json();
            setRate(data.rates.INR);
        }
        fetchRate();
    }, [])
    return rate;
}

export default useCurrencyRate;