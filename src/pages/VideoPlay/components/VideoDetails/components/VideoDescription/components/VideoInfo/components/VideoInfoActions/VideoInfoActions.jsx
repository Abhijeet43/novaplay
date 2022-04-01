import React from "react";
import "./VideoInfoActions.css";
import { useNavigate } from "react-router-dom";
import {
  checkLikesAction,
  likesActionHandler,
  openModal,
} from "../../../../../../../../../../utils/";
import {
  useAuth,
  useLike,
  useVideo,
  usePlayListModal,
} from "../../../../../../../../../../context/";

const VideoInfoActions = ({ id, likes: channelLikes }) => {
  const {
    videoState: { videos },
  } = useVideo();

  const {
    authState: { token },
  } = useAuth();

  const {
    likeState: { likes },
    likeDispatch,
  } = useLike();

  const { playlistModalDispatch } = usePlayListModal();

  const video = videos.find((video) => video._id === id);

  const navigate = useNavigate();

  return (
    <div className="video-info-actions">
      <button
        className="video-action-btn"
        onClick={() =>
          likesActionHandler(id, token, likeDispatch, navigate, videos, likes)
        }
      >
        <i
          className={`${
            checkLikesAction(id, likes) ? "fa-solid" : "fa-regular"
          } fa-thumbs-up action-icon`}
        ></i>
        {channelLikes}
      </button>
      <button className="video-action-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="action-icon iconify iconify--carbon"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2Z"
          ></path>
        </svg>
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
      <button className="video-action-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="action-icon iconify iconify--fa-solid"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132c13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
          ></path>
        </svg>
        Share
      </button>
    </div>
  );
};

export { VideoInfoActions };
