import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="category-card">
      <div className="category-card-thumbnail">
        <img className="category-img" src={image} alt="category-skills" />
      </div>
      <div className="category-overlay">
        <p className="category-overlay-text">{title}</p>
      </div>
    </div>
  );
};

export { CategoryCard };
