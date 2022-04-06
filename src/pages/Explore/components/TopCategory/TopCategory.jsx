import React from "react";
import "./TopCategory.css";
import { useVideo, useCategory } from "../../../../context/";

const TopCategory = () => {
  const {
    videoState: { categories },
  } = useVideo();

  const {
    categoryState: { category },
    categoryDispatch,
  } = useCategory();

  return (
    <div className="categories-container">
      <button
        onClick={() =>
          categoryDispatch({
            type: "CLEAR_CATEGORY",
          })
        }
        className={`btn  ${category === "" ? "btn-primary" : "btn-secondary"}`}
      >
        All
      </button>
      {categories.map(({ categoryName, _id }) => {
        return (
          <button
            onClick={() =>
              categoryDispatch({
                type: "SELECT_CATEGORY",
                payload: categoryName,
              })
            }
            key={_id}
            className={`btn ${
              category === categoryName ? "btn-primary" : "btn-secondary"
            }`}
          >
            {categoryName}
          </button>
        );
      })}
    </div>
  );
};

export { TopCategory };
