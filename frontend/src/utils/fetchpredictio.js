const API_URL = "http://127.0.0.1:5000/predict"; // Flask backend URL

export const fetchPrediction = async (investment, rate, years) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ investment, rate, years }),
    });

    if (!response.ok) throw new Error("Failed to fetch prediction data.");

    const data = await response.json();
    return data.forecast;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
