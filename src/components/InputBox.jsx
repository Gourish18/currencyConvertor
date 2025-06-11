import { useId } from "react";
import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  currency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gray-50 p-4 rounded-xl shadow-inner flex items-center gap-4 mb-4 ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-500 text-sm font-medium mb-2 block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-white rounded-lg py-2 px-3 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
          type="text"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(e.target.value);
          }}
        />
      </div>

      <div className="w-1/2 text-right">
        <label className="text-gray-500 text-sm font-medium mb-2 block">
          Currency Type
        </label>
        <select
          className="w-full bg-white rounded-lg py-2 px-3 text-gray-700 border border-gray-300 cursor-pointer focus:ring-2 focus:ring-blue-400 transition"
          value={currency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currencyOption) => (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
