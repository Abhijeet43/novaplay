import React from "react";
import "./ChannelDescription.css";

const ChannelDescription = ({ channelName, logo }) => {
  return (
    <div className="channel-description">
      <img className="channel-description-img" src={logo} alt="channel-logo" />
      <p className="channel-name-featured">{channelName}</p>
    </div>
  );
};

export { ChannelDescription };
