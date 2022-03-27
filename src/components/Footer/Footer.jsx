import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>NovaPlay - a video platform for diversified learning</p>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Home
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Explore
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Playlist
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Watch Later
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Liked Videos
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              History
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
