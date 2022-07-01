import React from "react";
import "./VideoList.css";
import { HorizontalCard } from "../../../../components";

const VideoList = ({ videos, playlistId, setPlaylist }) => {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return (
          <HorizontalCard
            key={video._id}
            video={video}
            mediumCard={true}
            miniImg={true}
            miniText={true}
            miniTitle={true}
            playlistId={playlistId}
            setPlaylist={setPlaylist}
          />
        );
      })}
    </div>
  );
};

export { VideoList };
