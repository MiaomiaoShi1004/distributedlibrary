import React from 'react';
import './css/ReviewSection.css'; 
import starIcon from '../images/star_icon.svg'; 

function ReviewSection({ review }) {
  return (
    <div className="review-section">
      <div className="review-content">
        <h1 className="review-description">{review.reviewDescription}</h1>
        <div className="user-email">{review.userEmail}</div>
        <div className="rating">
          <img src={starIcon} alt="Star" className="star-icon" />
          {review.rating}
        </div>
      </div>
      <div className="borrow-section">
        <button className="borrow-button">borrow</button>
        <img src={starIcon} alt="Star" className="star-icon" />
      </div>
    </div>
  );
}

export default ReviewSection;