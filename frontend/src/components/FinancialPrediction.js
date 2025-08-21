import React, { useState } from "react";
import { fetchPrediction } from "../utils/fetchPrediction";

const FinancialPrediction = () => {
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    if (!investment || !rate || !years) {
      setError("❌ Please enter all values.");
      setPrediction(null);
      return;
    }

    setError(null);
    const result = await fetchPrediction(parseFloat(investment), parseFloat(rate), parseInt(years));
    if (result !== null) {
      setPrediction(result);
    } else {
      setError("⚠️ Error fetching prediction. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📈 AI Financial Prediction</h2>
      
      <div style={styles.inputContainer}>
        <input 
          type="number" 
          placeholder="💰 Investment Amount (₹)" 
          value={investment} 
          onChange={(e) => setInvestment(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="number" 
          placeholder="📊 Expected Rate (%)" 
          value={rate} 
          onChange={(e) => setRate(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="number" 
          placeholder="📅 Years" 
          value={years} 
          onChange={(e) => setYears(e.target.value)} 
          style={styles.input}
        />
      </div>

      <button onClick={handlePredict} style={styles.button}>
        🔍 Predict Future Value
      </button>

      {prediction !== null && (
        <div style={styles.result}>
          <h3>📢 Predicted Value: <span style={{ color: "#007bff" }}>₹{prediction.toFixed(2)}</span></h3>
        </div>
      )}
      
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

// ✅ Styling for better UI
const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  title: {
    color: "#333",
    marginBottom: "15px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "90%",
    margin: "auto",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "95%",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e6f7ff",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default FinancialPrediction;

