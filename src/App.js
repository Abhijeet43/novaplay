import React from "react";
import { Header, Footer } from "./components/";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
} from "./pages/";
import { useAuth } from "./context/";

const App = () => {
  const {
    authState: { token },
  } = useAuth();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:categoryId" element={<Explore />} />
        <Route
          path="/liked"
          element={token ? <Liked /> : <Navigate to="/" />}
        />
        <Route path="/videoplay/:videoId" element={<VideoPlay />} />
        <Route
          path="/playlist"
          element={token ? <Playlist /> : <Navigate to="/" />}
        />
        <Route
          path="/history"
          element={token ? <History /> : <Navigate to="/" />}
        />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
