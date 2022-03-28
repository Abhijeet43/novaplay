import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="category-card">
      <div className="category-card-thumbnail">
        <img className="category-img" src={image} alt="category-skills" />
      </div>
      <div className="category-overlay">
        <Link to="/explore/1" className="category-overlay-text">
          {title}
        </Link>
      </div>
    </div>
  );
};

export { CategoryCard };
