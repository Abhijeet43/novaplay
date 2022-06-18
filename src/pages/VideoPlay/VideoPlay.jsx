import React, { useEffect, useState } from "react";
import "./VideoPlay.css";
import { AppDrawer, MobileNav, PlaylistModal } from "../../components/";
import { Video } from "./components/Video/Video";
import { VideoDetails } from "./components/VideoDetails/VideoDetails";
import { useParams, useNavigate } from "react-router-dom";
import { useHistory, useAuth, useLoader } from "../../context/";
import { getVideo, addToHistory, removeFromHistory } from "../../utils/";

const VideoPlay = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();

  const { setLoader } = useLoader();

  const { videoId } = useParams();

  const navigate = useNavigate();

  const [videoDetails, setVideoDetails] = useState(null);

  const callAddToHistoryHandler = () => {
    if (token) {
      if (!history.some((item) => item._id === videoId)) {
        addToHistory(videoDetails, historyDispatch, token);
      } else {
        removeFromHistory(videoDetails._id, token, historyDispatch);
        addToHistory(videoDetails, historyDispatch, token);
      }
    }
  };

  useEffect(() => {
    getVideo(videoId, setVideoDetails, navigate, setLoader);
  }, [videoId, navigate, setLoader]);

  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <PlaylistModal />
      <section className="videos-section">
        <div className="single-video-container">
          {videoDetails ? (
            <>
              <Video
                callAddToHistoryHandler={callAddToHistoryHandler}
                youtubeId={videoDetails.youtubeId}
              />
            </>
          ) : null}
          {videoDetails !== null ? (
            <VideoDetails
              id={videoDetails._id}
              title={videoDetails.title}
              views={videoDetails.views}
              likes={videoDetails.likes}
              logo={videoDetails.channelLogo}
              name={videoDetails.name}
              subscribers={videoDetails.subscribers}
              description={videoDetails.description}
              category={videoDetails.category}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
};

export { VideoPlay };
