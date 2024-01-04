// src/App.js
import React from 'react';
import './App.css';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      {/* <h1>Distributed Library</h1> */}
      <h1>All Books</h1>
      <BookList />
    </div>
  );
}

export default App;
