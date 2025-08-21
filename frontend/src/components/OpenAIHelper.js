import React, { useState } from "react";
import OpenAI from "openai"; // ✅ Correct Import

// ✅ Initialize OpenAI instance OUTSIDE the component
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Load API key from .env
  dangerouslyAllowBrowser: true, // Required for frontend use
});

const OpenAIHelper = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!input) return;
    setLoading(true);

    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      });

      setResponse(result.choices[0].message.content);
    } catch (error) {
      console.error("OpenAI API Error:", error);
      setResponse("⚠️ Error fetching AI response.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>🤖 AI Chat Assistant</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about investments..."
      />
      <button onClick={handleAskAI} disabled={loading}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>
      {response && <p><strong>AI:</strong> {response}</p>}
    </div>
  );
};

export default OpenAIHelper;



