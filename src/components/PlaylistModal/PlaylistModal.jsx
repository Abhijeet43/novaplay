import React, { useState } from "react";
import "./PlaylistModal.css";
import { useToggle } from "../../hooks/useToggle";
import { usePlayListModal, useAuth, usePlaylist } from "../../context/";
import {
  createPlaylist,
  addToPlaylist,
  removeFromPlaylist,
  isVideoInPlaylist,
} from "../../utils/";

const PlaylistModal = () => {
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "dummy text",
  });

  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();

  const {
    authState: { token },
  } = useAuth();

  const [openCreatePlaylist, setOpenCreatePlaylist] = useToggle(false);

  const {
    playlistModalState: { isActive, video },
    playlistModalDispatch,
  } = usePlayListModal();

  const playlistNameHandler = (e) => {
    setNewPlaylist({ ...newPlaylist, title: e.target.value });
  };

  const createPlaylistHandler = () => {
    if (
      newPlaylist.title.trim() !== "" &&
      !playlists.some((playlist) => playlist.title === newPlaylist.title)
    ) {
      setOpenCreatePlaylist(false);
      createPlaylist({ playlist: newPlaylist }, token, playlistDispatch, video);
      setOpenCreatePlaylist(false);
      playlistModalDispatch({ type: "CLOSE_MODAL" });
      setNewPlaylist({ title: "", description: "dummy data" });
    }
  };

  const playlistCheckBoxClickHandler = (e) => {
    if (e.target.checked) {
      addToPlaylist({
        token,
        video,
        playlistId: e.target.id,
        playlistDispatch,
      });
    } else {
      removeFromPlaylist({
        token,
        video,
        playlistId: e.target.id,
        playlistDispatch,
      });
    }
  };

  return (
    <div className={`modal-container ${isActive ? "active" : ""}`}>
      <div className="playlist-modal">
        <header className="playlist-modal-header">
          <h3 className="playlist-modal-title">Save to</h3>
          <button
            onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}
          >
            <i className="fas fa-times"></i>
          </button>
        </header>
        <hr />
        <section className="playlist-modal-body">
          {playlists.length > 0
            ? playlists.map((playlist) => {
                return (
                  <div key={playlist._id} className="input-group">
                    <input
                      type="checkbox"
                      onChange={playlistCheckBoxClickHandler}
                      id={playlist._id}
                      checked={isVideoInPlaylist(
                        playlist._id,
                        video._id,
                        playlists
                      )}
                    />
                    <label
                      className="playlist-modal-label"
                      htmlFor={playlist._id}
                    >
                      {playlist.title}
                    </label>
                  </div>
                );
              })
            : "No Playlist To Show"}
        </section>
        <hr />
        <footer className="playlist-modal-footer">
          {openCreatePlaylist ? (
            <div className="create-playlist-section">
              <div className="input-group">
                <input
                  className="playlist-input"
                  type="text"
                  placeholder="Enter Playlist Name..."
                  onChange={playlistNameHandler}
                  value={newPlaylist.title}
                  required
                />
              </div>
              <button
                onClick={createPlaylistHandler}
                className="create-btn btn-primary"
              >
                Create
              </button>
            </div>
          ) : (
            <button
              onClick={setOpenCreatePlaylist}
              className="create-btn-playlist"
            >
              <i className="fa-solid fa-plus create-icon"></i>
              <span>Create New Playlist</span>
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export { PlaylistModal };
