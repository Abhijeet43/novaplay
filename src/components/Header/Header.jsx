import React from "react";
import "./Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth, useSearch } from "../../context/";

const Header = () => {
  const {
    authState: { token, user },
    authDispatch,
  } = useAuth();

  const { searchQuery, setSearchQuery } = useSearch();

  const navigate = useNavigate();

  const location = useLocation();

  const checkStatus = (token) => {
    return token ? "Logout" : "Login";
  };

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const loginActionHandler = (type) => {
    type === "Login" ? navigate("/login") : logoutHandler();
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link className="nav-title" to="/">
            NOVAPLAY
          </Link>
        </div>
        {location.pathname === "/explore" && (
          <div className="nav-search">
            <button className="search-icon">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="search"
              className="nav-search"
              placeholder="search items here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
        <ul className="nav-items">
          <li className="nav-item">{token ? `Hi ${user.firstName}` : ""}</li>
          <li className="nav-item">
            <button
              onClick={() => loginActionHandler(checkStatus(token))}
              className="btn btn-primary"
            >
              {checkStatus(token)}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
