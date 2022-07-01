import React from "react";
import "./HorizontalCard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  removeFromLikesHandler,
  checkLikesAction,
  likesActionHandler,
  removeFromPlaylist,
  openModal,
  checkWatchLaterAction,
  checkWatchLaterActionHandler,
  removeFromWatchLater,
  removeFromHistory,
  getPlaylist,
} from "../../utils/";
import {
  useAuth,
  useLike,
  useVideo,
  usePlaylist,
  usePlayListModal,
  useWatchLater,
  useHistory,
  useLoader,
} from "../../context/";
import { useToggle } from "../../hooks/useToggle";

const HorizontalCard = ({
  video,
  miniCard = false,
  miniTitle = false,
  miniText = false,
  mediumCard = false,
  playlistId = false,
  setPlaylist = "",
}) => {
  const [showMenu, setShowMenu] = useToggle(false);

  const {
    authState: { token },
  } = useAuth();

  const {
    videoState: { videos },
  } = useVideo();

  const {
    likeState: { likes },
    likeDispatch,
  } = useLike();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const { setLoader } = useLoader();

  const { historyDispatch } = useHistory();

  const { playlistDispatch } = usePlaylist();

  const { playlistModalDispatch } = usePlayListModal();

  const navigate = useNavigate();
  const location = useLocation();

  const playlistHandler = () => {
    setShowMenu(false);
    openModal({ token, playlistModalDispatch, video, navigate });
  };

  const {
    _id,
    thumbnail: image,
    videoLength: time,
    title,
    channelName,
    subscribers,
    views,
    likes: channelLikes,
    description,
  } = video;

  const deleteAction = () => {
    switch (location.pathname) {
      case "/watchlater":
        removeFromWatchLater(_id, token, watchLaterDispatch);
        break;
      case `/playlist/${playlistId}`:
        removeFromPlaylist({
          token,
          video,
          playlistId,
          playlistDispatch,
        });
        getPlaylist(token, playlistId, setPlaylist, setLoader);
        break;
      case "/history":
        removeFromHistory(_id, token, historyDispatch);
        break;
      case "/liked":
        removeFromLikesHandler(_id, token, likeDispatch);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`horizontal-video-card ${
        miniCard === true ? "horizontal-card-mini" : ""
      } ${mediumCard === true ? "horizontal-card-medium" : ""}`}
    >
      <Link to={`/videoPlay/${_id}`}>
        <div className="horizontal-video-img-container">
          <img
            className="horizontal-video-img"
            src={image}
            alt="video-img"
            loading="lazy"
          />
          <div className="video-time">{time}</div>
        </div>
      </Link>
      <div className="video-card-body">
        <div className={miniText ? "video-card-text-mini" : "video-card-text"}>
          <Link to={`/videoPlay/${_id}`}>
            <h3
              className={
                miniTitle === true ? "video-title-mini" : "video-title"
              }
            >
              {title}
            </h3>
          </Link>
          <p className="video-channel-name">{channelName}</p>
          <div className="video-stats">
            <p>{subscribers} Subscribers</p>
            <span className="video-stats-dot"></span>
            <p>{views} Views</p>
            <span className="video-stats-dot"></span>
            <p>{channelLikes} Likes</p>
          </div>
          <div className="video-description-text">{description}</div>
        </div>
        {mediumCard === true ? (
          <div>
            <button className="remove-video-icon" onClick={deleteAction}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ) : (
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
              <div
                className="video-actions-item"
                onClick={() =>
                  checkWatchLaterActionHandler(
                    _id,
                    watchLater,
                    token,
                    watchLaterDispatch,
                    navigate,
                    videos
                  )
                }
              >
                <div className="video-actions-icon">
                  <i
                    className={`${
                      checkWatchLaterAction(_id, watchLater)
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-bookmark`}
                  ></i>
                </div>
                <div>
                  {checkWatchLaterAction(_id, watchLater)
                    ? "Remove From Watch Later"
                    : "Add To Watch Later"}
                </div>
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
        )}
      </div>
    </div>
  );
};

export { HorizontalCard };
