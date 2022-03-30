import React from "react";
import "./VideoInfo.css";
import { VideoStats } from "./components/VideoStats/VideoStats";
import { VideoInfoActions } from "./components/VideoInfoActions/VideoInfoActions";

const VideoInfo = ({ views, likes, id }) => {
  return (
    <div className="video-info-container">
      <VideoStats views={views} />
      <VideoInfoActions id={id} likes={likes} />
    </div>
  );
};

export { VideoInfo };
