import { toast } from "react-toastify";

const openModal = ({ token, playlistModalDispatch, video, navigate }) => {
  if (token) {
    playlistModalDispatch({
      type: "OPEN_MODAL",
      payload: { isActive: true, video },
    });
  } else {
    toast.warning("You are not logged in!!");
    navigate("/login");
  }
};

export { openModal };
