import React from 'react';
import './css/BookInfo.css'; // Ensure the path is correct

function BookInfo({ book }) {
  if (!book) {
    return <div className="book-info-placeholder">Select a book to see its details.</div>;
  }

  return (
    <div className="book-info-container">
      <div className="book-info-left-pane" />
      <div className="book-info">
        <div className="book-info-image-container">
          <img src={book.img} alt={book.title} className="book-info-img" />
        </div>
        <div className="book-info-details-container">
          <p className="book-info-title">Description:</p>
          <p className="book-info-description">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
