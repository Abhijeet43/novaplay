import React from "react";
import "./VideoPlay.css";
import { AppDrawer, MobileNav } from "../../components/";
import { Video } from "./components/Video/Video";
import { VideoDetails } from "./components/VideoDetails/VideoDetails";

const VideoPlay = () => {
  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <section className="videos-section">
        <div className="single-video-container">
          <Video link={"https://www.youtube.com/embed/Azy6DD2bDHg"} />
          <VideoDetails
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            views={"3.6M"}
            likes={"98K"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
            name={"Ted Talks"}
            subscribers={"2M"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque facerevero adipisci quo voluptates. Itaque repellendus officiis modi erroromnis quibusdam cum libero quos quaerat quod, molestias fuga optio aut."
            }
          />
        </div>
      </section>
    </main>
  );
};

export { VideoPlay };
