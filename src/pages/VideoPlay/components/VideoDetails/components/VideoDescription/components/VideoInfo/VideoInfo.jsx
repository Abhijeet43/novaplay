import React from "react";
import "./VideoInfo.css";
import { VideoStats } from "./components/VideoStats/VideoStats";
import { VideoInfoActions } from "./components/VideoInfoActions/VideoInfoActions";

const VideoInfo = ({ views, likes }) => {
  return (
    <div className="video-info-container">
      <VideoStats views={views} likes={likes} />
      <VideoInfoActions />
    </div>
  );
};

export { VideoInfo };
