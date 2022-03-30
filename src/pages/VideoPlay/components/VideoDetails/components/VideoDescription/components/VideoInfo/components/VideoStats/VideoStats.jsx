import React from "react";
import "./VideoStats.css";

const VideoStats = ({ views }) => {
  return (
    <div className="video-info">
      <p>{views} Views</p>
      <span className="video-stats-dot"></span>
    </div>
  );
};

export { VideoStats };
