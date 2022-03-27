import React from "react";
import "./VideoStats.css";

const VideoStats = ({ views, likes }) => {
  return (
    <div className="video-info">
      <p>{views} Views</p>
      <span className="video-stats-dot"></span>
      <p>{likes} Likes</p>
    </div>
  );
};

export { VideoStats };
