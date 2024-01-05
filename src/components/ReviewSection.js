import React from 'react';
import axios from 'axios';
import './css/ReviewSection.css';
import starIcon from '../images/star_icon.svg';

function ReviewSection({ review }) {
  // Function to handle star icon click
  const handleStarClick = async () => {
    // Prompt the user for input
    const userEmail = prompt('Enter your email:');
    const rating = prompt('Enter your rating (1.0-5.0):');
    const reviewDescription = prompt('Enter your review description:');
    
    // Early exit if any of the input is not provided
    if (!userEmail || !rating || !reviewDescription) {
      alert('All fields are required to submit the review.');
      return;
    }

    // Construct the POST request body
    const reviewData = {
      userEmail,
      rating: parseFloat(rating), // Convert rating to a float
      bookId: review.bookId, // Assuming `review` prop has a `bookId` property
      reviewDescription
    };

    // Send the POST request
    try {
      await axios.post('http://localhost:8181/api/user/review', reviewData);
      alert('Thank you for your review!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review.');
    }
  };

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
        {/* Star icon as a button */}
        <button className="star-button" onClick={handleStarClick}>
          <img src={starIcon} alt="Star" className="star-icon" />
        </button>
      </div>
    </div>
  );
}

export default ReviewSection;
