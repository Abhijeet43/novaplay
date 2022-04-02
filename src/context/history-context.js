import React, { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../reducers/history-reducer";

const HistoryContext = createContext({
  historyState: [],
  historyDispatch: () => {},
});

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });
  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
