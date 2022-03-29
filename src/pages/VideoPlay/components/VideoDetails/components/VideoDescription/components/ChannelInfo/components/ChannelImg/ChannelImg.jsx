import React from "react";
import "./ChannelImg.css";

const ChannelImg = ({ logo }) => {
  return (
    <div className="channel-img-container">
      <img className="channel-img" src={logo} alt="channel-logo" />
    </div>
  );
};

export { ChannelImg };
