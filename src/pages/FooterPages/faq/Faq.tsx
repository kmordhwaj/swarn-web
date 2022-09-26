import React, { useState } from "react";
import "./faq.css";
import { Rating } from "react-simple-star-rating";

const Faq = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
    
  };

  return (
    <div className="faqClass">
      Rate Me
      <Rating
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
      />
    </div>
  );
};

export default Faq;
