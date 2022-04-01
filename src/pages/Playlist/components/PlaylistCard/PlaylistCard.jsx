import React from "react";
import "./PlaylistCard.css";
import { Link } from "react-router-dom";
import { deletePlaylist } from "../../../../utils/";
import { usePlaylist, useAuth } from "../../../../context";

const PlaylistCard = ({ totalVideos, title, image, playlistId }) => {
  const { playlistDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuth();
  return (
    <div className="playlist-card">
      <img className="playlist-img" src={image} alt="playlist-image" />
      <div className="overlay-count">
        {totalVideos}
        <svg width="3rem" height="3rem" viewBox="0 0 24 24">
          <path
            d="M5 10h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 8h6c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm9 .88v4.23c0 .39.42.63.76.43l3.53-2.12c.32-.19.32-.66 0-.86l-3.53-2.12a.508.508 0 0 0-.76.44z"
            fill="var(--secondary-color)"
          ></path>
        </svg>
        <p className="category-title">{title}</p>
      </div>
      <div className="overlay">
        <Link to={`/playlist/${playlistId}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="overlay-action-icon iconify iconify--fa6-brands"
            width="2rem"
            height="2rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              fill="var(--secondary-color)"
              d="M325.3 234.3L104.6 13l280.8 161.2l-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1l-65.7 64.5l65.7 64.5l60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2l-60.1-60.1L104.6 499z"
            ></path>
          </svg>
        </Link>

        <button
          onClick={() => deletePlaylist(token, playlistId, playlistDispatch)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="overlay-action-icon iconify iconify--icomoon-free"
            width="2rem"
            height="2rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="var(--secondary-color)"
              d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H2zm3 9H4V7h1v7zm2 0H6V7h1v7zm2 0H8V7h1v7zm2 0h-1V7h1v7zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM9 2H6v-.987h3V2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export { PlaylistCard };
