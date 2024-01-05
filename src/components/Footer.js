import React from 'react';
import './css/Footer.css'; 
import facebookIcon from '../images/facebook_icon.svg';
import instagramIcon from '../images/instagram_icon.svg';
import twitterIcon from '../images/twitter_icon.svg';

function Footer() {
  return (
      <footer className="footer">
          <div className="footer-columns">
              <div className="footer-column">
                  <h4>Help</h4>
                  <a href="#!" className="footer-link">Payment</a>
                  <a href="#!" className="footer-link">Delivery</a>
                  <a href="#!" className="footer-link">Return of books</a>
              </div>
              <div className="footer-column">
                  <h4>About</h4>
                  <a href="#!" className="footer-link">About Us</a>
                  <a href="#!" className="footer-link">History</a>
                  <a href="#!" className="footer-link">Privacy Policy</a>
              </div>
              <div className="footer-column">
                  <h4>Catalog</h4>
                  <a href="#!" className="footer-link">Bestsellers</a>
                  <a href="#!" className="footer-link">New Arrivals</a>
                  <a href="#!" className="footer-link">Classics</a>
              </div>
              <div className="footer-column contact-info">
                  <h4>Contact</h4>
                  <a href="mailto:info@booksio.com" className="footer-contact">info@booko.com</a>
                  <a href="tel:+3530888888888" className="footer-contact">+3530888888888</a>
              </div>

          </div>
          <div className="footer-bottom">
              <p>© 2024 Booko.</p>
              
              <div className="footer-social-icons">
                  <a href="#!" className="social-icon">
                      <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="#!" className="social-icon">
                      <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="#!" className="social-icon">
                      <img src={twitterIcon} alt="Twitter" />
                  </a>
              </div>
          </div>
      </footer>
  );
}

export default Footer;