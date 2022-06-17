import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Header, Footer } from "./components/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RequiresAuth } from "./RequiresAuth";
import {
  Home,
  Explore,
  Liked,
  VideoPlay,
  Library,
  Playlist,
  Login,
  Signup,
  History,
  PlaylistVideos,
  WatchLater,
  Error404,
} from "./pages/";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toast-text"
      />

      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:categoryId" element={<Explore />} />
          <Route
            path="/liked"
            element={
              <RequiresAuth>
                <Liked />
              </RequiresAuth>
            }
          />
          <Route path="/videoplay/:videoId" element={<VideoPlay />} />
          <Route
            path="/playlist"
            element={
              <RequiresAuth>
                <Playlist />
              </RequiresAuth>
            }
          />
          <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
          <Route
            path="/history"
            element={
              <RequiresAuth>
                <History />
              </RequiresAuth>
            }
          />
          <Route path="/library" element={<Library />} />
          <Route
            path="/watchlater"
            element={
              <RequiresAuth>
                <WatchLater />
              </RequiresAuth>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
