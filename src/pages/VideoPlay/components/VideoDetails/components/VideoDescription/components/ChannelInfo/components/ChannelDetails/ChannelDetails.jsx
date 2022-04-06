import React from "react";
import "./ChannelDetails.css";

const ChannelDetails = ({ name, description, subscribers }) => {
  return (
    <div className="channel-details">
      <p className="channel-details-title">{name}</p>
      <p className="channel-subscribers">{subscribers} Subscribers</p>
      <p className="single-video-description">{description}</p>
    </div>
  );
};

export { ChannelDetails };
