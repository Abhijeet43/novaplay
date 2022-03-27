import React from "react";
import "./VideoDetails.css";
import { imageOne } from "../../../../assets/";
import { VideoDescription } from "./components/VideoDescription/VideoDescription";
import { RelatedVideos } from "./components/RelatedVideos/RelatedVideos";

const VideoDetails = ({
  title,
  views,
  likes,
  logo,
  name,
  subscribers,
  description,
}) => {
  return (
    <div className="single-video-details-container">
      <VideoDescription
        title={title}
        views={views}
        likes={likes}
        logo={logo}
        name={name}
        subscribers={subscribers}
        description={description}
      />
      <RelatedVideos
        image={imageOne}
        time={"3:20"}
        title={"Teach life skills and change our world: Jill Siegal Chalsty"}
        channelName={"Ted Talks"}
      />
    </div>
  );
};

export { VideoDetails };
