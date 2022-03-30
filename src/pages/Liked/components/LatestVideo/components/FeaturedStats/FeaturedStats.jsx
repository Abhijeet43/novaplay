import React from "react";
import "./FeaturedStats.css";

const FeaturedStats = ({ totalLikes, updated }) => {
  return (
    <div className="featured-stats">
      <p>
        <strong>{totalLikes}</strong> videos
      </p>
      <span className="video-stats-dot"></span>
      <p>Updated {updated} days ago</p>
    </div>
  );
};

export { FeaturedStats };
