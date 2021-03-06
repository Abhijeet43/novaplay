import React, { createContext, useContext, useReducer } from "react";
import { likeReducer } from "../reducers/like-reducer";

const LikeContext = createContext({
  likeState: [],
  likeDispatch: () => {},
});

const LikeProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, {
    likes: [],
  });
  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { useLike, LikeProvider };
