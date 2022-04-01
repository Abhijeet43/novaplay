import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/";
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
  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <PlaylistModal />
      <section className="videos-section">
        <div className="section-header">
          <h2 className="section-title">Featured Categories</h2>
          <Link to="/explore" className="section-link">
            View All
          </Link>
        </div>
        <div className="video-card-container">
          {getFeaturedCategories(categories).map((cateogry) => {
            return <CategoryCard key={cateogry._id} category={cateogry} />;
          })}
        </div>
        <div className="section-header">
          <h2 className="section-title">Trending Videos</h2>
          <Link to="/explore" className="section-link">
            View All
          </Link>
        </div>
        <div className="video-card-container">
          {getTrendingVideos(videos).map((video) => {
            return <HorizontalCard key={video._id} video={video} />;
          })}
        </div>
        <div className="section-header">
          <h2 className="section-title">Featured Videos</h2>
          <Link to="/explore" className="section-link">
            View All
          </Link>
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
