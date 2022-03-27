import React from "react";
import "./RelatedVideos.css";
import { HorizontalCard } from "../../../../../../components";

const RelatedVideos = ({ image, time, title, channelName }) => {
  return (
    <div className="related-videos">
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

export { RelatedVideos };
