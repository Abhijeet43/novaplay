import React from "react";
import "./RelatedVideos.css";
import { HorizontalCard } from "../../../../../../components";
import { useVideo } from "../../../../../../context/";
import { getCategoryVideos } from "../../../../../../utils";

const RelatedVideos = ({ category, id }) => {
  const {
    videoState: { videos },
  } = useVideo();
  const categoryVideos = getCategoryVideos(category, id, videos);
  return (
    <div className="related-videos">
      {categoryVideos.map((video) => {
        return (
          <HorizontalCard
            key={video._id}
            video={video}
            miniCard={true}
            miniImg={true}
            miniText={true}
            miniTitle={true}
          />
        );
      })}
    </div>
  );
};

export { RelatedVideos };
