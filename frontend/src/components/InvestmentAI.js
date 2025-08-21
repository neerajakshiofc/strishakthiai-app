import React, { useState } from "react";
import OpenAI from "openai"; // ✅ Correct Import

// ✅ Initialize OpenAI instance OUTSIDE component
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Load API key from .env
  dangerouslyAllowBrowser: true, // Required for frontend use
});

const InvestmentAI = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeInvestment = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
      });

      setResponse(result.choices[0].message.content);
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("⚠️ Unable to fetch investment insights.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>🤖 AI Investment Analysis</h2>
      <input
        type="text"
        placeholder="Ask about an investment..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={analyzeInvestment} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default InvestmentAI;

