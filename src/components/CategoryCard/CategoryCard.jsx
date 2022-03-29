import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, categoryName, image } = category;
  return (
    <div className="category-card">
      <div className="category-card-thumbnail">
        <img className="category-img" src={image} alt="category-skills" />
      </div>
      <div className="category-overlay">
        <Link to={`/explore/${_id}`} className="category-overlay-text">
          {categoryName}
        </Link>
      </div>
    </div>
  );
};

export { CategoryCard };
