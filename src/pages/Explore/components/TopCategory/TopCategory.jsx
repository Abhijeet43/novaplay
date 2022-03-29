import React from "react";
import "./TopCategory.css";
import { useVideo } from "../../../../context/";

const TopCategory = () => {
  const {
    videoState: { categories },
  } = useVideo();
  return (
    <div className="categories-container">
      <button className="btn btn-secondary">All</button>
      {categories.map(({ categoryName, _id }) => {
        return (
          <button key={_id} className="btn btn-secondary">
            {categoryName}
          </button>
        );
      })}
    </div>
  );
};

export { TopCategory };
