import React from "react";
import "./VideoDetails.css";
import { VideoDescription } from "./components/VideoDescription/VideoDescription";
import { RelatedVideos } from "./components/RelatedVideos/RelatedVideos";

const VideoDetails = ({
  id,
  title,
  views,
  likes,
  logo,
  name,
  subscribers,
  description,
  category,
}) => {
  return (
    <div className="single-video-details-container">
      <VideoDescription
        id={id}
        title={title}
        views={views}
        likes={likes}
        logo={logo}
        name={name}
        subscribers={subscribers}
        description={description}
      />
      <RelatedVideos category={category} id={id} />
    </div>
  );
};

export { VideoDetails };
