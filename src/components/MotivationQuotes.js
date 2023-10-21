import React, { useEffect, useState } from "react";
import axios from "axios";

const MotivationalQuote = () => {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        const randomIndex = Math.floor(Math.random() * response.data.length);
        setQuote(response.data[randomIndex].text);
      } catch (err) {
        setError(
          "Failed to fetch a motivational quote. Please try again later."
        );
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className=" p-4 shadow rounded-lg mt-4 text-center">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Motivational Quote
      </h2>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : quote ? (
        <p className="text-lg text-white">{quote}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MotivationalQuote;
