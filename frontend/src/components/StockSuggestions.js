import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_STOCK_API_KEY;
const STOCK_API_URL = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;

const StockSuggestions = () => {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        if (!API_KEY) throw new Error("API Key is missing.");
        const response = await fetch(STOCK_API_URL);
        const data = await response.json();

        if (data.top_gainers) {
          setStocks(data.top_gainers.slice(0, 5)); // Show top 5 gainers
        } else {
          throw new Error("No stock data available.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="stock-suggestions-container">
      <h2>📈 Stock Market Suggestions</h2>
      {loading ? (
        <p>Loading stock data...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="stock-list">
          {stocks.map((stock, index) => (
            <li key={index}>
              {stock.ticker} - {stock.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockSuggestions;


