import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto"; // Ensure Chart.js is loaded

const ExpenseTracker = () => {
  console.log("ExpenseTracker Component Loaded");

  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ category: "", amount: "" });

  const handleAddExpense = () => {
    if (expense.category && expense.amount) {
      setExpenses([...expenses, { ...expense, amount: parseFloat(expense.amount) }]);
      setExpense({ category: "", amount: "" });
    }
  };

  const data = {
    labels: expenses.map((exp) => exp.category),
    datasets: [
      {
        label: "Expenses",
        data: expenses.map((exp) => exp.amount),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💰 Expense Tracker</h2>

      {/* Expense Input Fields */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="🏷️ Category"
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="💵 Amount (₹)"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          style={styles.input}
        />
        <button onClick={handleAddExpense} style={styles.button}>
          ➕ Add Expense
        </button>
      </div>

      {/* Pie Chart */}
      <div style={styles.chartContainer}>
        {expenses.length > 0 ? (
          <Pie data={data} />
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>No expenses added yet.</p>
        )}
      </div>

      {/* Expense List */}
      {expenses.length > 0 && (
        <div style={styles.expenseList}>
          <h3>📊 Expense Breakdown</h3>
          <ul style={styles.list}>
            {expenses.map((exp, index) => (
              <li key={index} style={styles.listItem}>
                <span>{exp.category}:</span> <strong>₹{exp.amount.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ✅ Styling for a modern UI
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
    backgroundColor: "#28a745",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "95%",
  },
  chartContainer: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  expenseList: {
    marginTop: "20px",
    textAlign: "left",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default ExpenseTracker;



