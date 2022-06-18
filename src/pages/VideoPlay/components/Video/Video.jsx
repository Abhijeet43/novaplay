import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = ({ youtubeId, callAddToHistoryHandler }) => {
  return (
    <div className="video-embed">
      <ReactPlayer
        width="100%"
        height="100%"
        url={`https://www.youtube.com/embed/${youtubeId}`}
        controls={true}
        onStart={callAddToHistoryHandler}
      />
    </div>
  );
};

export { Video };
