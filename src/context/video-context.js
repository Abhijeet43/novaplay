import React, { useEffect, useReducer, createContext, useContext } from "react";
import { videoReducer } from "../reducers/video-reducer";
import { getVideos, getCategories } from "../utils/";

import { useLoader } from "../context/";

const VideoContext = createContext({
  videoState: {},
  videoDispatch: () => {},
});

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    videos: [],
    categories: [],
  });

  const { setLoader } = useLoader();

  useEffect(() => {
    getVideos(videoDispatch, setLoader);
    getCategories(videoDispatch, setLoader);
  }, [setLoader]);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
