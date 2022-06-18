import React from "react";
import "./FeaturedStats.css";

const FeaturedStats = ({ totalLikes }) => {
  return (
    <div className="featured-stats">
      <p>
        <strong>
          {totalLikes} {totalLikes > 1 ? "videos" : "video"}
        </strong>
      </p>
    </div>
  );
};

export { FeaturedStats };
