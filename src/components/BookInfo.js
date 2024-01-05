import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/BookInfo.css';
import ReviewSection from './ReviewSection';
import dummyGetReview from '../data/dummyGetReview.json'; 


function BookInfo({ book }) {

  const [review, setReview] = useState(dummyGetReview[0]); 

  useEffect(() => {
    if (book) {
      const fetchReview = async () => {
        try {
          const response = await axios.get(`http://localhost:8181/api/user/getreview?bookId=${book.id}`);
          if (response.data && response.data.length > 0) {
            setReview(response.data[response.data.length - 1]);
          } else {
            console.log("No view for this book yet")
            setReview(dummyGetReview[0]);
          }
        } catch (error) {
          console.error('There was an error fetching the review:', error);
          setReview(dummyGetReview[0]);
        }
      };

      fetchReview();
    }
  }, [book]); // Dependency array ensures the effect runs when `book` changes

  if (!book) {
    return <div className="book-info-placeholder">Select a book to see its details.</div>;
  }


  return (
    <div className="book-info-container">
      <div className="book-info-left-pane">
        <ReviewSection review={review} bookId={book.id}/>
      </div>
      <div className="book-info-right-pane">
        <div className="book-info-image-container">
          <img src={book.img} alt={book.title} className="book-info-img" />
        </div>
        <div className="book-info-details-container">
          <h2 className="book-info-title">Discription</h2>
          <p>Bookid: {book.id}</p>
          <p className="book-info-description">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
