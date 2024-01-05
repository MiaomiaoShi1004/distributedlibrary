import React from 'react';
import axios from 'axios';
import './css/Landing.css';
import webpageLogo from '../images/webpage_logo.svg';
import landingImage from '../images/landing.png';

function Landing() {
  const handleReturnClick = async () => {
    // Prompt the user for input
    const userEmail = prompt('Enter your email:');
    const bookId = prompt('Enter the book ID:');

    // Early exit if any of the input is not provided
    if (!userEmail || !bookId) {
      alert('Both email and book ID are required.');
      return;
    }

    // Construct the POST request body
    const returnData = {
      userEmail,
      bookId: parseInt(bookId, 10), // Convert bookId to a number
    };

    // Send the POST request
    try {
      const response = await axios.post('http://localhost:8181/api/user/return', returnData);
      // Handle the response as needed, depending on the server's response
      if (response.status === 202) {
        alert('Book returned successfully!');
      } else {
        // Handle any other statuses appropriately
        alert('Book return failed. Please try again.');
      }
    } catch (error) {
      console.error('Error returning book:', error);
      alert('An error occurred while trying to return the book.');
    }
  };

  return (
    <div className="landing">
      <nav className="landing-nav">
        <img src={webpageLogo} alt="Booko Logo" className="landing-logo" />
        <button className="landing-return-button" onClick={handleReturnClick}>return</button>
      </nav>
      <div className="landing-content">
        <div className="landing-text">
          <h1>What Book Are You Looking For?</h1>
          <p>Not sure what to read next?</p>
          <p>Explore our catalog!</p>
        </div>
        <div className="landing-image">
          <img src={landingImage} alt="Books" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
