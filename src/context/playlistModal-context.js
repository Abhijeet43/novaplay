import React, { createContext, useContext, useReducer } from "react";
import { playlistModalReducer } from "../reducers/playlistModal-reducer";

const PlayListModalContext = createContext({
  playlistModalState: [],
  playlistModalDispatch: () => {},
});

const PlaylistModalProvider = ({ children }) => {
  const [playlistModalState, playlistModalDispatch] = useReducer(
    playlistModalReducer,
    {
      isActive: false,
      video: {},
    }
  );
  return (
    <PlayListModalContext.Provider
      value={{ playlistModalState, playlistModalDispatch }}
    >
      {children}
    </PlayListModalContext.Provider>
  );
};

const usePlayListModal = () => useContext(PlayListModalContext);

export { PlaylistModalProvider, usePlayListModal };
