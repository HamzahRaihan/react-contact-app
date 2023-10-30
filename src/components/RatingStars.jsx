import { useState } from 'react';

const RatingStars = () => {
  const [rating, setRating] = useState(0); // Initial rating is 0

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'star active' : 'star'} onClick={() => handleRatingClick(star)}>
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
