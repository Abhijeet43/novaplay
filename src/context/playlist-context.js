import React, { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducers/playlist-reducer";

const PlaylistContext = createContext({
  playlistState: [],
  playlistDispatch: () => {},
});

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists: [],
  });
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
