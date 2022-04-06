import React from "react";
import "./Explore.css";
import { TopCategory } from "./components/TopCategory/TopCategory";
import {
  VideoCard,
  AppDrawer,
  MobileNav,
  PlaylistModal,
} from "../../components/";
import { useVideo, useCategory, useSearch } from "../../context/";
import {
  getCategoryFilteredVideos,
  getSearchFilteredVideos,
} from "../../utils/";

const Explore = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const {
    videoState: { videos },
  } = useVideo();

  const {
    categoryState: { category },
  } = useCategory();

  const filteredCategoryVideos = getCategoryFilteredVideos(category, videos);
  const filteredSearchVideos = getSearchFilteredVideos(
    searchQuery,
    filteredCategoryVideos
  );

  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <section className="videos-section">
        <div className="video-card-container">
          <div className="nav-search">
            <button className="search-icon">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="search"
              className="nav-search"
              placeholder="search items here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <PlaylistModal />
          <TopCategory />
          {filteredSearchVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      </section>
    </main>
  );
};

export { Explore };
