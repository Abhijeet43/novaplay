import React from "react";
import "./Playlist.css";
import { AppDrawer, MobileNav } from "../../components/";
import { PlaylistCard } from "./components/PlaylistCard/PlaylistCard";

const Playlist = () => {
  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <section className="videos-section">
        <h2 className="playlist-title">Playlist</h2>
        <div className="video-card-container">
          <PlaylistCard totalVideos={"12"} />
          <PlaylistCard totalVideos={"11"} />
          <PlaylistCard totalVideos={"24"} />
        </div>
        <div className="playlist-btn-container">
          <button className="btn btn-primary btn-playlist">
            <i className="plus-icon fa-solid fa-plus"></i>
            Create Playlist
          </button>
        </div>
      </section>
    </main>
  );
};

export { Playlist };
