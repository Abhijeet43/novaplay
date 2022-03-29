const videoReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "LOAD_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export { videoReducer };
