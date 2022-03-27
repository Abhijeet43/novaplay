import React from "react";
import "./Home.css";
import { imageOne, learning, time, lifeSkills } from "../../assets/";
import {
  CategoryCard,
  HorizontalCard,
  VideoCard,
  AppDrawer,
  MobileNav,
} from "../../components/";

const Home = () => {
  return (
    <main className="main-section">
      <AppDrawer />
      <MobileNav />
      <section className="videos-section">
        <div className="section-header">
          <h2 className="section-title">Featured Categories</h2>
          <a href="#" className="section-link">
            View All
          </a>
        </div>

        <div className="video-card-container">
          <CategoryCard image={learning} title={"Learning"} />
          <CategoryCard image={time} title={"Time Management"} />
          <CategoryCard image={lifeSkills} title={"Life Skills"} />
        </div>

        <div className="section-header">
          <h2 className="section-title">Trending Videos</h2>
          <a href="#" className="section-link">
            View All
          </a>
        </div>

        <div className="video-card-container">
          <HorizontalCard
            image={imageOne}
            time={"3:20"}
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            channelName={"Ted Talks"}
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi consectetur sed alias tempore sint, architecto hic quaerat voluptas? Quia omnis labore iure repudiandae cupiditate, explicabo numquam eum distinctio debitis."
            }
          />

          <HorizontalCard
            image={imageOne}
            time={"3:20"}
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            channelName={"Ted Talks"}
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi consectetur sed alias tempore sint, architecto hic quaerat voluptas? Quia omnis labore iure repudiandae cupiditate, explicabo numquam eum distinctio debitis."
            }
          />

          <HorizontalCard
            image={imageOne}
            time={"3:20"}
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            channelName={"Ted Talks"}
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi consectetur sed alias tempore sint, architecto hic quaerat voluptas? Quia omnis labore iure repudiandae cupiditate, explicabo numquam eum distinctio debitis."
            }
          />
        </div>

        <div className="section-header">
          <h2 className="section-title">Featured Videos</h2>
          <a href="#" className="section-link">
            View All
          </a>
        </div>

        <div className="video-card-container">
          <VideoCard
            image={imageOne}
            time={"3:20"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
          />
          <VideoCard
            image={imageOne}
            time={"3:20"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
          />
          <VideoCard
            image={imageOne}
            time={"3:20"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
          />
          <VideoCard
            image={imageOne}
            time={"3:20"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
          />
          <VideoCard
            image={imageOne}
            time={"3:20"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
          />
          <VideoCard
            image={imageOne}
            time={"3:20"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s68-c-k-c0x00ffffff-no-rj"
            }
            title={
              "Teach life skills and change our world: Jill Siegal Chalsty"
            }
            subscribers={"2M"}
            views={"20K"}
            likes={"30K"}
          />
        </div>
      </section>
    </main>
  );
};

export { Home };
