import React from "react";
import "./Explore.css";
import { TopCategory } from "./components/TopCategory/TopCategory";
import {
  VideoCard,
  AppDrawer,
  MobileNav,
  PlaylistModal,
} from "../../components/";
import { useVideo, useCategory } from "../../context/";
import { getCategoryFilteredVideos } from "../../utils/";

const Explore = () => {
  const {
    videoState: { videos },
  } = useVideo();

  const {
    categoryState: { category },
  } = useCategory();

  const filteredCategoryVideos = getCategoryFilteredVideos(category, videos);

  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <section className="videos-section">
        <div className="video-card-container">
          <PlaylistModal />
          <TopCategory />
          {filteredCategoryVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      </section>
    </main>
  );
};

export { Explore };
