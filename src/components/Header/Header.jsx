import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useAuth,
  useLike,
  useHistory,
  usePlaylist,
  useWatchLater,
} from "../../context/";
import { toast } from "react-toastify";
import { getVideos } from "../../utils/";

const Header = () => {
  const {
    authState: { token, user },
    authDispatch,
  } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const timerRef = useRef();
  const searchBarRef = useRef();

  const { likeDispatch } = useLike();
  const { historyDispatch } = useHistory();
  const { playlistDispatch } = usePlaylist();
  const { watchLaterDispatch } = useWatchLater();

  const navigate = useNavigate();

  const location = useLocation();

  const checkStatus = (token) => {
    return token ? "Logout" : "Login";
  };

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    likeDispatch({ type: "CLEAR_LIKES" });
    playlistDispatch({ type: "CLEAR_PLAYLISTS" });
    historyDispatch({ type: "CLEAR_HISTORY" });
    watchLaterDispatch({ type: "CLEAR_WATCHLATER" });
    toast.success("Logged Out Successfully");
  };

  const loginActionHandler = (type) => {
    type === "Login" ? navigate("/login") : logoutHandler();
  };

  useEffect(() => {
    clearTimeout(timerRef.current);
    setIsDebouncing(false);
    timerRef.current = setTimeout(() => {
      const availableVideos = videos.filter(
        (video) =>
          searchQuery.length !== 0 &&
          video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchedVideos(availableVideos);
      setIsDebouncing(true);
    }, 300);
  }, [searchQuery, videos]);

  const navigateHandler = (videoId) => {
    navigate(`videoplay/${videoId}`);
    setSearchQuery("");
  };

  const closeSearchBar = (e) => {
    if (!searchBarRef.current?.contains(e.target)) {
      setShowSearchResult(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSearchBar);

    return () => {
      document.removeEventListener("click", closeSearchBar);
    };
  }, []);

  useEffect(() => getVideos("", setVideos), []);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link className="nav-title" to="/">
            NOVAPLAY
          </Link>
        </div>
        {location.pathname === "/explore" && (
          <div className="nav-search" ref={searchBarRef}>
            <button className="search-icon">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="search"
              className="search-input"
              placeholder="search items here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearchResult(true)}
            />
            {showSearchResult && isDebouncing && searchQuery ? (
              <div className="search-results">
                {searchedVideos.length > 0 ? (
                  searchedVideos.map((video) => (
                    <div
                      key={video._id}
                      className="searched-video"
                      onClick={() => navigateHandler(video._id)}
                    >
                      {video.title}
                    </div>
                  ))
                ) : (
                  <p className="not-found-text">No result found</p>
                )}
              </div>
            ) : null}
          </div>
        )}
        <ul className="nav-items">
          <li className="nav-item">{token ? `Hi ${user.firstName}` : ""}</li>
          <li className="nav-item">
            <button
              onClick={() => loginActionHandler(checkStatus(token))}
              className="btn btn-primary"
            >
              {checkStatus(token)}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
