const historyReducer = (state, action) => {
  switch (action.type) {
    case "GET_HISTORY":
      return { ...state, payload: action.payload };
    case "ADD_TO_HISTORY":
      return { ...state, payload: action.payload };
    case "REMOVE_FROM_HISTORY":
      return { ...state, payload: action.payload };
    case "CLEAR_HISTORY":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export { historyReducer };
