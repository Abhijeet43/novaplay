import React from "react";
import "./VideoList.css";
import { HorizontalCard } from "../../../../components";

const VideoList = ({ likes }) => {
  return (
    <div className="video-list">
      {likes.map((video) => {
        return (
          <HorizontalCard
            key={video._id}
            video={video}
            mediumCard={true}
            miniImg={true}
            miniText={true}
            miniTitle={true}
          />
        );
      })}
    </div>
  );
};

export { VideoList };
