const openModal = ({ token, playlistModalDispatch, video, navigate }) => {
  if (token) {
    playlistModalDispatch({
      type: "OPEN_MODAL",
      payload: { isActive: true, video },
    });
  } else {
    navigate("/login");
  }
};

export { openModal };
