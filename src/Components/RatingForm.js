import React, { useState } from "react";
import '../styles.css';

export default function RatingForm({ onSubmit }) {
  const [rateValue, setRateValue] = useState(0);

  const handleRateClick = (value) => {
    setRateValue(value);
  };

  const handleSubmit = () => {
    onSubmit(rateValue);
  };

  return (
    <div className="rating-form">
      <img src="/icon-star.svg" alt="Star Icon" className="star-icon" />
      <h1>How did we do?</h1>
      <p>Please rate your experience:</p>
      <div className="rating-options">
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={`rating-option ${value === rateValue ? "selected" : ""}`}
            onClick={() => handleRateClick(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
