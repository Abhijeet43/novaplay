import React from "react";
import "./ChannelImg.css";

const ChannelImg = ({logo}) => {
  return (
    <div className="channel-img-container">
      <img
        className="channel-img"
        src="https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
        alt="channel-logo"
      />
    </div>
  );
};

export { ChannelImg };
