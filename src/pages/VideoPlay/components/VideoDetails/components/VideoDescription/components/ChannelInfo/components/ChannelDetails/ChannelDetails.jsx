import React from "react";
import "./ChannelDetails.css";

const ChannelDetails = ({ name, description, subscribers }) => {
  return (
    <div className="channel-details">
      <a href="#" className="channel-details-title">
        {name}
      </a>
      <p className="channel-subscribers">{subscribers} Subscribers</p>
      <p className="single-video-description">{description}</p>
    </div>
  );
};

export { ChannelDetails };
