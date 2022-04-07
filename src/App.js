import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Header, Footer } from "./components/";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import { useAuth } from "./context/";

const App = () => {
  const {
    authState: { token, user },
  } = useAuth();

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
          <Route
            path="/login"
            element={token ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate replace to="/" /> : <Signup />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:categoryId" element={<Explore />} />
          <Route
            path="/liked"
            element={user ? <Liked /> : <Navigate replace to="/login" />}
          />
          <Route path="/videoplay/:videoId" element={<VideoPlay />} />
          <Route
            path="/playlist"
            element={token ? <Playlist /> : <Navigate replace to="/login" />}
          />
          <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
          <Route
            path="/history"
            element={token ? <History /> : <Navigate replace to="/login" />}
          />
          <Route path="/library" element={<Library />} />
          <Route
            path="/watchlater"
            element={token ? <WatchLater /> : <Navigate replace to="/login" />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
