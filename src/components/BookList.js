import React, { useState, useEffect } from 'react';
import Book from './Book';
import BookInfo from './BookInfo'; 
import './css/Book.css'; 
import axios from 'axios';
// import dummyBooks from '../data/dummyBooks.json'; 

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // setBooks(dummyBooks);
    axios.get('http://localhost:8181/api/user')
    .then(response => {
      console.log(response.data)
      setBooks(response.data);
      if (response.data.length > 0) {
        setSelectedBook(response.data[0]);
      }
      console.log("yes");
    })
    .catch(error => {
      console.error('There was an error fetching the books:', error);
    });
  }, []);

  const handleBookSelect = (id) => {
    if (selectedBook && selectedBook.id === id) {
      setSelectedBook(null);
    }
    // Then set the selected book to the clicked book
    // Using a timeout to ensure the state is set to null before setting the new book
    setTimeout(() => {
      const book = books.find(book => book.id === id);
      setSelectedBook(book);
    }, 0);
  };
  

  return (
    <div>
      <div className="book-list">
        {books.map(book => (
          <Book key={book.id} {...book} onBookSelect={handleBookSelect} />
        ))}
      </div>
      <h1>Learn More</h1>
      {selectedBook && <BookInfo book={selectedBook} />}
    </div>
  );
}

export default BookList;

