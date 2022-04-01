import React from "react";
import "./VideoCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import { useLike, useAuth, useVideo, usePlayListModal } from "../../context/";
import { checkLikesAction, likesActionHandler, openModal } from "../../utils/";

const VideoCard = ({ video }) => {
  const [showMenu, setShowMenu] = useToggle(false);

  const { playlistModalDispatch } = usePlayListModal();

  const {
    likeState: { likes },
    likeDispatch,
  } = useLike();

  const {
    authState: { token },
  } = useAuth();

  const {
    videoState: { videos },
  } = useVideo();

  const navigate = useNavigate();

  const playlistHandler = () => {
    setShowMenu(false);
    openModal({ token, playlistModalDispatch, video, navigate });
  };

  const {
    _id,
    title,
    videoLength: time,
    thumbnail: image,
    likes: videoLikes,
    channelName,
    subscribers,
    views,
    channelLogo: logo,
  } = video;
  return (
    <div className="video-card">
      <div className="video-card-header">
        <Link to={`/videoplay/${_id}`}>
          <div className="video-card-thumbnail">
            <img src={image} alt="video-thumbnail" />
          </div>
        </Link>
        <div className="video-time">{time}</div>
      </div>
      <div className="video-card-body">
        <div className="video-card-icon">
          <img src={logo} allt="channel-logo" />
        </div>
        <div className="video-card-text">
          <Link to={`/videoplay/${_id}`}>
            <h3 className="video-card-title">{title}</h3>
          </Link>
          <p className="video-channel-name">{channelName}</p>
          <div className="video-stats">
            <p>{subscribers} Subscribers</p>
            <span className="video-stats-dot"></span>
            <p>{views} Views</p>
            <span className="video-stats-dot"></span>
            <p>{videoLikes} Likes</p>
          </div>
        </div>
        <div className="video-actions">
          <div className="video-actions-menu-button-wrapper">
            <button className="video-menu-button" onClick={setShowMenu}>
              <i className="menu-icon fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>

          <div className={`video-actions-menu ${showMenu ? "active" : ""}`}>
            <div className="video-actions-item" onClick={playlistHandler}>
              <div className="video-actions-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ic"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"
                  ></path>
                </svg>
              </div>
              <div>Add To Playlist</div>
            </div>
            <div className="video-actions-item">
              <div className="video-actions-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--carbon"
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
              </div>
              <div>Add To Watch Later</div>
            </div>

            <div
              className="video-actions-item"
              onClick={() =>
                likesActionHandler(
                  _id,
                  token,
                  likeDispatch,
                  navigate,
                  videos,
                  likes
                )
              }
            >
              <div className="video-actions-icon">
                <i
                  className={`${
                    checkLikesAction(_id, likes) ? "fa-solid" : "fa-regular"
                  } fa-thumbs-up`}
                ></i>
              </div>
              <div>
                {checkLikesAction(_id, likes)
                  ? "Remove From Likes"
                  : "Like Video"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
