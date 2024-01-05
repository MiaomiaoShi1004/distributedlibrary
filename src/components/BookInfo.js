import React from 'react';
import './css/BookInfo.css';
import ReviewSection from './ReviewSection';
import dummyGetReview from '../data/dummyGetReview.json'; 


function BookInfo({ book }) {
  if (!book) {
    return <div className="book-info-placeholder">Select a book to see its details.</div>;
  }

  const review = dummyGetReview[0]; 

  return (
    <div className="book-info-container">
      <div className="book-info-left-pane">
        <ReviewSection review={review} />
      </div>
      <div className="book-info-right-pane">
        <div className="book-info-image-container">
          <img src={book.img} alt={book.title} className="book-info-img" />
        </div>
        <div className="book-info-details-container">
          <h2 className="book-info-title">Discription</h2>
          <p className="book-info-description">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
