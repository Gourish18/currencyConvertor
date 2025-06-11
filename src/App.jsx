import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const amountNum = parseFloat(amount);
    if (!isNaN(amountNum) && currencyInfo[toCurrency]) {
      setConvertedAmount((amountNum * currencyInfo[toCurrency]).toFixed(2));
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-100 to-white overflow-hidden">
      <h1 className="text-4xl text-blue-700 font-bold mb-8">Currency Converter</h1>

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currency={fromCurrency}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
            currencyOptions={options}
          />

          <div className="flex justify-center my-6">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currency={toCurrency}
            onCurrencyChange={setToCurrency}
            currencyOptions={options}
            amountDisabled={true}
          />

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
