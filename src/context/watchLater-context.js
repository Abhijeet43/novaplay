import React, { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../reducers/watchlater-reducer";

const WatchLaterContext = createContext({
  watchlaterState: {},
  watchlaterDispatch: () => {},
});

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
    watchLater: [],
  });
  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
