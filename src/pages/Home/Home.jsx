import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useVideo, useCategory } from "../../context/";
import {
  getFeaturedVideos,
  getFeaturedCategories,
  getTrendingVideos,
} from "../../utils/";
import {
  CategoryCard,
  HorizontalCard,
  VideoCard,
  AppDrawer,
  MobileNav,
  PlaylistModal,
} from "../../components/";

const Home = () => {
  const {
    videoState: { videos, categories },
  } = useVideo();

  const { categoryDispatch } = useCategory();

  const navigate = useNavigate();

  const viewHandler = () => {
    categoryDispatch({ type: "CLEAR_CATEGORY" });
    navigate("/explore");
  };

  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <PlaylistModal />
      <section className="videos-section">
        <div className="section-header">
          <h2 className="section-title">Featured Categories</h2>
          <button onClick={viewHandler} className="section-link">
            View All
          </button>
        </div>
        <div className="video-card-container">
          {getFeaturedCategories(categories).map((cateogry) => {
            return <CategoryCard key={cateogry._id} category={cateogry} />;
          })}
        </div>
        <div className="section-header">
          <h2 className="section-title">Trending Videos</h2>
          <button onClick={viewHandler} className="section-link">
            View All
          </button>
        </div>
        <div className="video-card-container">
          {getTrendingVideos(videos).map((video) => {
            return <HorizontalCard key={video._id} video={video} />;
          })}
        </div>
        <div className="section-header">
          <h2 className="section-title">Featured Videos</h2>
          <button onClick={viewHandler} className="section-link">
            View All
          </button>
        </div>
        <div className="video-card-container">
          {getFeaturedVideos(videos).map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      </section>
    </main>
  );
};

export { Home };
