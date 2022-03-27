import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#" className="nav-title" to="/">
            NOVAPLAY
          </a>
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
            <button className="btn btn-primary">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
