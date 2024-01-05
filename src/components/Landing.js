import React from 'react';
import './css/Landing.css';
import webpageLogo from '../images/webpage_logo.svg';
import landingImage from '../images/landing.png';

function Landing() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <img src={webpageLogo} alt="Booko Logo" className="landing-logo" />
        <button className="landing-return-button">return</button>
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
