import React from "react";
import "./FeaturedStats.css";

const FeaturedStats = ({ totalLikes, updated }) => {
  return (
    <div className="featured-stats">
      <p>
        <strong>
          {totalLikes} {totalLikes > 1 ? "videos" : "video"}
        </strong>
      </p>
      <span className="video-stats-dot"></span>
      <p>Updated {updated} days ago</p>
    </div>
  );
};

export { FeaturedStats };
