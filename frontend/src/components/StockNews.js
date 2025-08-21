import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_STOCK_API_KEY;
const NEWS_API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`;

const StockNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (!API_KEY) throw new Error("API Key is missing.");
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();

        if (data.feed) {
          setNews(data.feed.slice(0, 5)); // Show top 5 news articles
        } else {
          throw new Error("No news data available.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="stock-news-container">
      <h2>📰 Stock Market News</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="news-list">
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockNews;



