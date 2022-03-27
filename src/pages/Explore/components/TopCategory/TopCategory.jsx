import React from "react";
import "./TopCategory.css";

const TopCategory = () => {
  return (
    <div className="categories-container">
      <button className="btn btn-secondary">All</button>
      <button className="btn btn-secondary">Life Skils</button>
      <button className="btn btn-secondary">Learning</button>
      <button className="btn btn-secondary">Time Management</button>
      <button className="btn btn-secondary">Science</button>
      <button className="btn btn-secondary">Psycology</button>
    </div>
  );
};

export { TopCategory };
