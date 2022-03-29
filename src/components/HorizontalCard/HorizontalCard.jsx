import React from "react";
import "./HorizontalCard.css";
import { Link } from "react-router-dom";

const HorizontalCard = ({
  video,
  miniCard = false,
  miniImg = false,
  miniTitle = false,
  miniText = false,
}) => {
  const {
    _id,
    thumbnail: image,
    videoLength: time,
    title,
    channelName,
    subscribers,
    views,
    likes,
    description,
  } = video;
  return (
    <div
      className={`horizontal-video-card ${
        miniCard === true ? "horizontal-card-mini" : ""
      }`}
    >
      <Link to={`/videoPlay/${_id}`}>
        <div className="horizontal-video-img-container">
          <img className="horizontal-video-img" src={image} alt="video-img" />
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
            <p>{likes} Likes</p>
          </div>
          <div className="video-description-text">{description}</div>
        </div>
        <div className="video-actions">
          <div className="video-actions-menu-button-wrapper">
            <button className="video-menu-button">
              <i className="menu-icon fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div className="video-actions-menu">
            <Link to="/playlist/:playlistId" className="video-actions-item">
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
            </Link>
            <Link to="/watchlater/:watchlaterId" className="video-actions-item">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
