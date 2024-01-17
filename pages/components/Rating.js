// Rating.js
import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(5);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingClick(star)}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
      {/* <p>Selected Rating: {rating}</p> */}
    </div>
  );
};

export default Rating;
