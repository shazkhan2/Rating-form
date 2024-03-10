import React from "react";
import '../styles.css';

export default function ThankYouMessage({ selectedRating }) {
  return (
    <div className="thank-you-message">
      <img src="/illustration-thank-you.svg" alt="Thank You Illustration" className="thank-you-illustration" />
      <p id="rate">You rated us: {selectedRating} out of 5.</p>
      <h1>Thank you</h1>
      <p>We appreciate you taking the time to give us a rating.<br/> If you ever need more support, don't hesitate <br/>to get in touch!</p>
    </div>
  );
}
