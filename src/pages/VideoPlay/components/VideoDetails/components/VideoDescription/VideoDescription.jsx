import React from "react";
import "./VideoDescription.css";
import { VideoInfo } from "./components/VideoInfo/VideoInfo";
import { ChannelInfo } from "./components/ChannelInfo/ChannelInfo";

const VideoDescription = ({
  title,
  logo,
  views,
  likes,
  subscribers,
  name,
  description,
}) => {
  return (
    <div className="single-video-description">
      <h3 className="single-video-title">{title}</h3>
      <VideoInfo views={views} likes={likes} />
      <hr />
      <ChannelInfo
        logo={logo}
        name={name}
        subscribers={subscribers}
        description={description}
      />
    </div>
  );
};

export { VideoDescription };
