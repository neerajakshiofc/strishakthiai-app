import React, { useState } from "react";

const PredictComponent = () => {
  const [investment, setInvestment] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    try {
      setError(null); // Clear previous error
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ investment, rate, years })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction data.");
      }

      const data = await response.json();
      setForecast(data.forecast); // Store the API response in state
    } catch (err) {
      setError(err.message); // Store error message in state
    }
  };

  return (
    <div>
      <h2>Predict Component</h2>
      <input
        type="number"
        placeholder="Investment"
        value={investment}
        onChange={(e) => setInvestment(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Rate"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Years"
        value={years}
        onChange={(e) => setYears(parseFloat(e.target.value))}
      />
      <button onClick={handlePredict}>Predict</button>
      {forecast && <p>Forecast: {forecast}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PredictComponent;
