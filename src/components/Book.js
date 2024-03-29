import React from 'react';
import './css/Book.css'; 

function Book({ id, title, author, copies, copiesAvailable, img, onBookSelect }) {
  return (
    <div className="book" onClick={() => onBookSelect(id)}>
      <img src={img} alt={title} className="book-img" />
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
      <p className="book-copies">Copies: {copies}</p>
      <p className="book-copies-available">Copies Available: {copiesAvailable}</p>
    </div>
  );
}

export default Book;

