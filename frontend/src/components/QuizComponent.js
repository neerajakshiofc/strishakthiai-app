import React, { useState } from "react";

const QuizComponent = () => {
  const questions = [
    {
      question: "What is the best way to save money?",
      options: ["Invest in stocks", "Save in a bank account", "Spend less than you earn"],
      correct: 2,
    },
    {
      question: "What does SIP stand for?",
      options: ["Systematic Investment Plan", "Savings in Portfolio", "Simple Interest Plan"],
      correct: 0,
    },
    {
      question: "What is the safest investment option?",
      options: ["Stocks", "Fixed Deposits", "Cryptocurrency"],
      correct: 1,
    },
    {
      question: "Which factor affects your credit score the most?",
      options: ["Age", "Loan Repayment History", "Location"],
      correct: 1,
    },
    {
      question: "What is an emergency fund?",
      options: [
        "Money saved for unexpected expenses",
        "Extra cash for shopping",
        "Investment in stocks",
      ],
      correct: 0,
    },
    {
      question: "Which investment option offers the highest risk but potential high returns?",
      options: ["Government Bonds", "Stocks", "Savings Account"],
      correct: 1,
    },
    {
      question: "What is the main benefit of a budget?",
      options: [
        "Helps track income and expenses",
        "Prevents spending",
        "Increases bank account balance automatically",
      ],
      correct: 0,
    },
    {
      question: "Which is an example of a depreciating asset?",
      options: ["Gold", "Car", "Land"],
      correct: 1,
    },
    {
      question: "What is inflation?",
      options: [
        "Increase in the value of money",
        "Increase in prices over time",
        "Decrease in savings",
      ],
      correct: 1,
    },
    {
      question: "What does 'diversification' mean in investing?",
      options: [
        "Investing all money in one stock",
        "Spreading investments across different assets",
        "Selling all investments quickly",
      ],
      correct: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelectedOption(index);
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
      setSelectedOption(null);
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>Financial Quiz</h2>
      {showResults ? (
        <div>
          <h3>Your Score: {score}/{questions.length}</h3>
          {score === questions.length ? (
            <p style={{ color: "green", fontSize: "18px" }}>🎉 Perfect Score! You earned a badge! 🎉</p>
          ) : score > questions.length / 2 ? (
            <p style={{ color: "blue", fontSize: "18px" }}>👍 Great Job! Keep Learning.</p>
          ) : (
            <p style={{ color: "red", fontSize: "18px" }}>📚 Keep Practicing!</p>
          )}
          <button onClick={handleRestart} style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h4>{currentQuestion + 1}. {questions[currentQuestion].question}</h4>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedOption !== null}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px",
                width: "100%",
                backgroundColor: selectedOption === index ? "#D3D3D3" : "#f0f0f0",
                border: "1px solid #ccc",
                cursor: selectedOption === null ? "pointer" : "not-allowed",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
