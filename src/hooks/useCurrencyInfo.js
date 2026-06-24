import { useState, useEffect } from "react"
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  console.log("ReviewPilot test");
  console.log("ReviewPilot test2");

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-06-11/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
  }, [currency])
  return data;
}
export default useCurrencyInfo;
// This custom hook fetches currency information from a public API based on the provided currency code. 