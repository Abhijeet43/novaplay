import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>NovaPlay - a video platform for diversified learning</p>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/explore" className="footer-link">
              Explore
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/playlist" className="footer-link">
              Playlist
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <Link to="/watchlater" className="footer-link">
              Watch Later
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/liked" className="footer-link">
              Liked Videos
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/history" className="footer-link">
              History
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
