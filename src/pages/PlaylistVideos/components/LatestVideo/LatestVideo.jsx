import React from "react";
import "./LatestVideo.css";
import { FeaturedStats } from "./components/FeaturedStats/FeaturedStats";
import { ChannelDescription } from "./components/ChannelDescription/ChannelDescription";

const LatestVideo = ({ image, totalLikes, channelName, logo }) => {
  return (
    <div className="latest-video-featured">
      <img src={image} alt="video-img" />
      <h3 className="featured-title">Liked Videos</h3>
      <FeaturedStats totalLikes={totalLikes} />
      <hr />
      <ChannelDescription channelName={channelName} logo={logo} />
    </div>
  );
};

export { LatestVideo };
