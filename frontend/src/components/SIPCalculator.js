import React, { useState } from "react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const calculateSIP = () => {
    setError(null);
    if (monthlyInvestment <= 0 || rate <= 0 || years <= 0) {
      setError("❌ All values must be positive numbers.");
      setResult(null);
      return;
    }

    const months = years * 12;
    const ratePerMonth = rate / 100 / 12;
    const maturity =
      monthlyInvestment *
      ((Math.pow(1 + ratePerMonth, months) - 1) / ratePerMonth) *
      (1 + ratePerMonth);
      
    setResult(maturity.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📈 SIP Calculator</h2>

      <div style={styles.inputContainer}>
        <input
          type="number"
          placeholder="💰 Monthly Investment (₹)"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="📊 Expected Rate of Return (%)"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="📅 Investment Duration (Years)"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          style={styles.input}
        />
      </div>

      <button onClick={calculateSIP} style={styles.button}>
        🔍 Calculate Maturity
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {result !== null && (
        <div style={styles.result}>
          <h3>📢 Maturity Amount: <span style={{ color: "#007bff" }}>₹{result}</span></h3>
        </div>
      )}
    </div>
  );
};

// ✅ Styling for a better UI
const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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

export default SIPCalculator;
