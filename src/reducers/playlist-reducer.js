const playlistReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FROM_PLAYLIST":
      return {
        playlists: state.playlists.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };
    case "ADD_TO_PLAYLIST":
      return {
        playlists: state.playlists.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };
    case "UPDATE_PLAYLIST":
      return { ...state, playlists: action.payload };
    default:
      return state;
  }
};

export { playlistReducer };
