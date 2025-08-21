const API_URL = "https://api.strishakthi.live/predict"; // Use your actual backend API URL

export const fetchPrediction = async (investment, rate, years) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ investment, rate, years }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch prediction data.");
    }

    const data = await response.json();
    return data.forecast;
  } catch (error) {
    console.error("Error fetching prediction:", error);
    return null;
  }
};
