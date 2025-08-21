import React, { useEffect } from "react";
import ExpenseTracker from "./components/ExpenseTracker";
import SIPCalculator from "./components/SIPCalculator";
import QuizComponent from "./components/QuizComponent";
import StockNews from "./components/StockNews";
import StockSuggestions from "./components/StockSuggestions";
import OpenAIHelper from "./components/OpenAIHelper"; // ✅ AI Chatbot
import FinancialPrediction from "./components/FinancialPrediction";
import ErrorBoundary from "./components/ErrorBoundary";
import { fetchPrediction } from "./utils/api";
import EducationalResources from "./components/EducationalResources"; // ✅ Financial Learning
import FinancialPlanner from "./components/FinancialPlanner"; // ✅ Goal Tracking
import InvestmentAI from "./components/InvestmentAI"; // ✅ AI Investment
import "./App.css"; // Import custom CSS for styling

function App() {
  useEffect(() => {
    const getForecast = async () => {
      try {
        const forecast = await fetchPrediction(1000, 12, 5);
        console.log("Forecast:", forecast);
      } catch (error) {
        console.error("Error fetching prediction:", error);
      }
    };
    getForecast();
  }, []);

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <h1>🌟 StriShakthi Financial Empowerment App 🌟</h1>
        <p>Empowering women through financial literacy and smart investments.</p>
      </header>

      {/* Features Section */}
      <div className="features-grid">
        <ErrorBoundary>
          <FeatureCard title="💡 AI Chat Assistant" component={<OpenAIHelper />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="📖 Educational Resources" component={<EducationalResources />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="🛠 Financial Planner" component={<FinancialPlanner />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="🤖 AI Investment Analysis" component={<InvestmentAI />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="📈 Financial Prediction" component={<FinancialPrediction />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="📰 Stock Market News" component={<StockNews />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="💰 Expense Tracker" component={<ExpenseTracker />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="📊 SIP Calculator" component={<SIPCalculator />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="🎯 Financial Quiz" component={<QuizComponent />} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCard title="📉 Stock Suggestions" component={<StockSuggestions />} />
        </ErrorBoundary>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2025 StriShakthi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ title, component }) => {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <div className="feature-content">{component}</div>
    </div>
  );
};

// ✅ Debugging: Check if all components are loaded
console.log("🔹 OpenAI API Key Loaded:", process.env.REACT_APP_OPENAI_API_KEY ? "Yes ✅" : "No ❌");
console.log("✅ AI Chatbot Loaded:", OpenAIHelper);
console.log("✅ Educational Resources Loaded:", EducationalResources);
console.log("✅ Financial Planner Loaded:", FinancialPlanner);
console.log("✅ AI Investment Analysis Loaded:", InvestmentAI);

export default App;

