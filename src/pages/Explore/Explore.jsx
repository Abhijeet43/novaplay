import React from "react";
import "./Explore.css";
import { TopCategory } from "./components/TopCategory/TopCategory";
import { VideoCard, AppDrawer, MobileNav } from "../../components/";
import { useVideo } from "../../context/";

const Explore = () => {
  const {
    videoState: { videos },
  } = useVideo();
  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <section className="videos-section">
        <div className="video-card-container">
          <TopCategory />
          {videos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      </section>
    </main>
  );
};

export { Explore };
