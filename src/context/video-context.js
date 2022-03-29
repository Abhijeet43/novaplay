import React, { useEffect, useReducer, createContext, useContext } from "react";
import { videoReducer } from "../reducers/video-reducer";
import { getVideos, getCategories } from "../utils/";

const VideoContext = createContext({
  videoState: {},
  videoDispatch: () => {},
});

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    videos: [],
    categories: [],
  });

  useEffect(() => {
    getVideos(videoDispatch);
    getCategories(videoDispatch);
  }, []);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
