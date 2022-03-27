import React from "react";
import "./ChannelInfo.css";
import { ChannelDetails } from "./components/ChannelDetails/ChannelDetails";
import { ChannelImg } from "./components/ChannelImg/ChannelImg";

const ChannelInfo = ({ logo, name, subscribers, description }) => {
  return (
    <div className="channel-info-container">
      <ChannelImg logo={logo} />
      <ChannelDetails
        name={name}
        subscribers={subscribers}
        description={description}
      />
    </div>
  );
};

export { ChannelInfo };
