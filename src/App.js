import React from "react";
import { Header, Footer } from "./components/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Liked,
  VideoPlay,
  Library,
  Playlist,
  Login,
  Signup,
} from "./pages/";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:categoryId" element={<Explore />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/videoplay/:videoId" element={<VideoPlay />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
