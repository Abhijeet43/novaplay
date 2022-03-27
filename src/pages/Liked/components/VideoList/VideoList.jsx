import React from "react";
import "./VideoList.css";
import { HorizontalCard } from "../../../../components";

const VideoList = ({ image, time, title, channelName }) => {
  return (
    <div className="video-list">
      <HorizontalCard
        miniCard={true}
        miniImg={true}
        miniText={true}
        miniTitle={true}
        image={image}
        time={time}
        title={title}
        channelName={channelName}
      />
      <HorizontalCard
        miniCard={true}
        miniImg={true}
        miniText={true}
        miniTitle={true}
        image={image}
        time={time}
        title={title}
        channelName={channelName}
      />
      <HorizontalCard
        miniCard={true}
        miniImg={true}
        miniText={true}
        miniTitle={true}
        image={image}
        time={time}
        title={title}
        channelName={channelName}
      />
      <HorizontalCard
        miniCard={true}
        miniImg={true}
        miniText={true}
        miniTitle={true}
        image={image}
        time={time}
        title={title}
        channelName={channelName}
      />
    </div>
  );
};

export { VideoList };
