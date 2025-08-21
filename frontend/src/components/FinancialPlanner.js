import React, { useState } from "react";

const FinancialPlanner = () => {
  const [goals, setGoals] = useState([{ goal: "Save ₹50,000", completed: false }]);

  const addGoal = () => {
    const newGoal = prompt("Enter your financial goal:");
    if (newGoal) setGoals([...goals, { goal: newGoal, completed: false }]);
  };

  return (
    <div>
      <h2>🛠 Financial Planner</h2>
      <button onClick={addGoal}>➕ Add Goal</button>
      <ul>
        {goals.map((g, index) => (
          <li key={index}>{g.goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialPlanner;

