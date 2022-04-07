import {
  addToLikesService,
  removeFromLikesService,
  getLikesService,
} from "../services/";

import { toast } from "react-toastify";

const addToLikesHandler = async (video, token, likeDispatch) => {
  try {
    const response = await addToLikesService(video, token);
    if (response.status === 201) {
      likeDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
      toast.info("Video Added To Likes");
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const removeFromLikesHandler = async (id, token, likeDispatch) => {
  try {
    const response = await removeFromLikesService(id, token);
    if (response.status === 200) {
      likeDispatch({ type: "REMOVE_FROM_LIKES", payload: response.data.likes });
      toast.error("Video Removed From Likes");
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const getLikesHandler = async (token, likeDispatch) => {
  try {
    const response = await getLikesService(token);
    if (response.status === 200) {
      likeDispatch({ type: "GET_LIKES", payload: response.data.likes });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const checkLikesAction = (id, likes) => likes.find((like) => like._id === id);

const callAddToLikesHandler = (id, token, videos, navigate, likeDispatch) => {
  if (token) {
    const video = videos.find((video) => video._id === id);
    addToLikesHandler(video, token, likeDispatch);
  } else {
    toast.warning("You are not logged in!!");
    navigate("/login");
  }
};

const likesActionHandler = (
  id,
  token,
  likeDispatch,
  navigate,
  videos,
  likes
) => {
  checkLikesAction(id, likes)
    ? removeFromLikesHandler(id, token, likeDispatch)
    : callAddToLikesHandler(id, token, videos, navigate, likeDispatch);
};

export {
  addToLikesHandler,
  removeFromLikesHandler,
  getLikesHandler,
  checkLikesAction,
  callAddToLikesHandler,
  likesActionHandler,
};
