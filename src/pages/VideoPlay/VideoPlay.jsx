import React from "react";
import "./VideoPlay.css";
import { AppDrawer, MobileNav, PlaylistModal } from "../../components/";
import { Video } from "./components/Video/Video";
import { VideoDetails } from "./components/VideoDetails/VideoDetails";
import { useParams } from "react-router-dom";
import { useVideo } from "../../context/";
import { getVideo } from "../../utils/";

const VideoPlay = () => {
  const {
    videoState: { videos },
  } = useVideo();
  const { videoId } = useParams();
  const videoDetails = getVideo(videoId, videos);
  const {
    _id,
    youtubeId,
    title,
    views,
    likes,
    channelLogo: logo,
    channelName: name,
    subscribers,
    description,
    category,
  } = videoDetails;
  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <PlaylistModal />
      <section className="videos-section">
        <div className="single-video-container">
          <Video youtubeId={youtubeId} />
          <VideoDetails
            id={_id}
            title={title}
            views={views}
            likes={likes}
            logo={logo}
            name={name}
            subscribers={subscribers}
            description={description}
            category={category}
          />
        </div>
      </section>
    </main>
  );
};

export { VideoPlay };
