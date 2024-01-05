// src/App.js
import React from 'react';
import './App.css';
import BookList from './components/BookList';
import Footer from './components/Footer';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      {/* <h1>Distributed Library</h1> */}
      <Landing />
      <h1>All Books</h1>
      <BookList />
      <Footer />
    </div>

  );
}

export default App;
