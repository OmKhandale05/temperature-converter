import useCurrency from "../hooks/useCurrency";
const CurrencyConverter = () => {
  const { usd, inr, rate, handleUsd, handleInr } = useCurrency();

  return (
    <div>
      <h1>Currency Converter</h1>
      <p>1 USD = {rate} INR</p>
      <div className="input-field">
        <label>USD</label>

        <input type="number" value={usd} onChange={handleUsd} />
        <span> $ </span>
      </div>
      <div className="input-field">
        <label>INR</label>
        <input type="number" value={inr} onChange={handleInr} />
        <span> ₹ </span>
      </div>
    </div>
  );
};
export default CurrencyConverter;
