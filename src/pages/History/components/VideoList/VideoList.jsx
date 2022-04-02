import React from "react";
import "./VideoList.css";
import { HorizontalCard } from "../../../../components";

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return (
          <HorizontalCard
            key={video._id}
            video={video}
            mediumCard={true}
            miniText={true}
            miniTitle={true}
          />
        );
      })}
    </div>
  );
};

export { VideoList };
