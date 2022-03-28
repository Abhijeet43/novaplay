import React from "react";
import "./TopCategory.css";
import { NavLink } from "react-router-dom";

const TopCategory = () => {
  return (
    <div className="categories-container">
      <NavLink to="/explore/:all" className="btn btn-secondary">
        All
      </NavLink>
      <NavLink to="/explore/1" className="btn btn-secondary">
        Life Skils
      </NavLink>
      <NavLink to="/explore/2" className="btn btn-secondary">
        Learning
      </NavLink>
      <NavLink to="/explore/3" className="btn btn-secondary">
        Time Management
      </NavLink>
      <NavLink to="/explore/4" className="btn btn-secondary">
        Science
      </NavLink>
      <NavLink to="/explore/5" className="btn btn-secondary">
        Psycology
      </NavLink>
    </div>
  );
};

export { TopCategory };
