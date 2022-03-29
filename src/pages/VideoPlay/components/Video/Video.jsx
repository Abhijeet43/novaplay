import React from "react";
import "./Video.css";

const Video = ({ youtubeId }) => {
  return (
    <div className="video-embed">
      <iframe
        className="video-player"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export { Video };
