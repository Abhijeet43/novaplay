import React, { useState, useEffect } from "react";
import "./VideoInfoActions.css";
import { useNavigate } from "react-router-dom";
import {
  checkLikesAction,
  likesActionHandler,
  openModal,
  checkWatchLaterAction,
  checkWatchLaterActionHandler,
  getVideo,
} from "../../../../../../../../../../utils/";
import {
  useAuth,
  useLike,
  useVideo,
  usePlayListModal,
  useWatchLater,
} from "../../../../../../../../../../context/";

const VideoInfoActions = ({ id, likes: channelLikes }) => {
  const {
    videoState: { videos },
  } = useVideo();

  const [video, setVideo] = useState("");

  const {
    authState: { token },
  } = useAuth();

  const {
    likeState: { likes },
    likeDispatch,
  } = useLike();

  const { playlistModalDispatch } = usePlayListModal();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const navigate = useNavigate();

  useEffect(() => {
    getVideo(id, setVideo, navigate);
  }, [id, navigate]);

  return (
    <div className="video-info-actions">
      <button
        className="video-action-btn"
        onClick={() =>
          likesActionHandler(id, token, likeDispatch, navigate, videos, likes)
        }
      >
        <i
          className={
            token
              ? `${
                  checkLikesAction(id, likes) ? "fa-solid" : "fa-regular"
                } fa-thumbs-up action-icon`
              : "fa-regular fa-thumbs-up action-icon"
          }
        ></i>
        {channelLikes}
      </button>
      <button
        className="video-action-btn"
        onClick={() =>
          checkWatchLaterActionHandler(
            video._id,
            watchLater,
            token,
            watchLaterDispatch,
            navigate,
            videos
          )
        }
      >
        <i
          className={
            token
              ? `${
                  checkWatchLaterAction(video._id, watchLater)
                    ? "fa-solid"
                    : "fa-regular"
                } fa-bookmark action-icon`
              : "fa-regular fa-bookmark action-icon"
          }
        ></i>
        Watch Later
      </button>
      <button
        onClick={() =>
          openModal({ token, playlistModalDispatch, video, navigate })
        }
        className="video-action-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="action-icon iconify iconify--mdi"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2 16h8v-2H2m16 0v-4h-2v4h-4v2h4v4h2v-4h4v-2m-8-8H2v2h12m0 2H2v2h12v-2Z"
          ></path>
        </svg>
        Save
      </button>
    </div>
  );
};

export { VideoInfoActions };
