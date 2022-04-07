import React from "react";
import "./CategoryCard.css";
import { useCategory } from "../../context/";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { categoryName, image } = category;

  const { categoryDispatch } = useCategory();

  const navigate = useNavigate();

  const categoryHandler = () => {
    categoryDispatch({ type: "SELECT_CATEGORY", payload: categoryName });
    navigate("/explore");
  };
  return (
    <div className="category-card">
      <div className="category-card-thumbnail">
        <img
          className="category-img"
          src={image}
          alt="category-skills"
          loading="lazy"
        />
      </div>
      <div className="category-overlay">
        <div className="category-overlay-text">
          <button onClick={categoryHandler} className="category-btn">
            {categoryName}
          </button>
        </div>
      </div>
    </div>
  );
};

export { CategoryCard };
