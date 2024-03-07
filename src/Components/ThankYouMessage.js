import React from "react";
import '../styles.css';

export default function ThankYouMessage({ selectedRating }) {
  return (
    <div className="thank-you-message">
      <img src="/illustration-thank-you.svg" alt="Thank You Illustration" className="thank-you-illustration" />
      <h1>Thank you for your feedback!</h1>
      <p>You rated us: {selectedRating} out of 5.</p>
    </div>
  );
}
