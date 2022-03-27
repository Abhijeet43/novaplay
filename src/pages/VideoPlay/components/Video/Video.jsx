import React from "react";
import "./Video.css";

const Video = ({ link }) => {
  return (
    <div className="video-embed">
      <iframe
        className="video-player"
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export { Video };
