import React, { useState } from 'react';
import RatingForm from './Components/RatingForm';
import ThankYouMessage from './Components/ThankYouMessage';

function App() {
  const [submittedRating, setSubmittedRating] = useState(null);

  const handleSubmitRating = (rating) => {
    setSubmittedRating(rating);
  };

  return (
    <div className="App">
      {submittedRating === null ? (
        <RatingForm onSubmit={handleSubmitRating} />
      ) : (
        <ThankYouMessage selectedRating={submittedRating} />
      )}
    </div>
  );
}

export default App;
