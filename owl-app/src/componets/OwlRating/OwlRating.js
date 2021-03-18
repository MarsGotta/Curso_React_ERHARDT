import { useEffect, useState } from 'react';
import './OwlRating.css';

function OwlRating({ rating, className = '' }) {
  const [totalRating, setTotalRating] = useState(rating - 1);
  const [tempRating, setTempRating] = useState(null);
  const [stars, setStars] = useState([]);

  function handleRate(rating) {
    setTotalRating(rating);
    setTempRating(rating)
  }

  function handleStarOver(rating) {
    setTempRating(totalRating)
    setTotalRating(rating);
  }

  function handleStarOut() {
    setTotalRating(tempRating);
  }

  useEffect(() => {
    let starsArray = [];

    for (let i = 0; i < 5; i++) {
      let klass = 'star-rating__star';
      if (totalRating >= i && totalRating != null) {
        klass += ' is-selected';
      }

      starsArray.push(
        <label
          key={i}
          className={klass}
          onClick={() => handleRate(i)}
          onMouseOver={() => handleStarOver(i)}
          onMouseOut={handleStarOut}>
          ★
          </label>
      );
    }
    setStars(starsArray)
  }, [totalRating, tempRating, rating])

  return (
    <div className={`star-rating ${className}`}>
      {stars}
    </div>
  );
}

export default OwlRating;
