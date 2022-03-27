import React from "react";
import "./Liked.css";
import { imageOne } from "../../assets/";
import { AppDrawer, MobileNav } from "../../components";
import { LatestVideo } from "./components/LatestVideo/LatestVideo";
import { VideoList } from "./components/VideoList/VideoList";

const Liked = () => {
  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <section className="videos-section">
        <div className="video-card-listing-container">
          <LatestVideo
            image={imageOne}
            totalLikes={"10"}
            updated={"2"}
            channelName={"Channel Name"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
          />
          <VideoList
            image={imageOne}
            time={"3:20"}
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            channelName={"Ted Talks"}
          />
        </div>
      </section>
    </main>
  );
};

export { Liked };
