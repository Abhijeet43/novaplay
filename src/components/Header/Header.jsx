import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link className="nav-title" to="/">
            NOVAPLAY
          </Link>
        </div>
        <div className="nav-search">
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="search"
            className="nav-search"
            placeholder="search items here"
          />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
