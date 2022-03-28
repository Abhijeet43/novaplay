import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = ({ image, time, logo, title, subscribers, views, likes }) => {
  return (
    <div className="video-card">
      <div className="video-card-header">
        <div className="video-card-thumbnail">
          <img src={image} alt="video-thumbnail" />
        </div>
        <div className="video-time">{time}</div>
      </div>
      <div className="video-card-body">
        <div className="video-card-icon">
          <img src={logo} />
        </div>
        <div className="video-card-text">
          <h3 className="video-card-title">{title}</h3>
          <p className="video-channel-name">Ted Talks</p>
          <div className="video-stats">
            <p>{subscribers} Subscribers</p>
            <span className="video-stats-dot"></span>
            <p>{views} Views</p>
            <span className="video-stats-dot"></span>
            <p>{likes} Likes</p>
          </div>
        </div>
        <div className="video-actions">
          <div className="video-actions-menu-icon">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.96 122.88"
              className="dots-icon"
            >
              <defs></defs>
              <title>3-vertical-dots</title>
              <path
                className="cls-1"
                d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"
              />
            </svg>
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

export { VideoCard };
