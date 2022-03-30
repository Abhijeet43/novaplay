import {
  addToLikesService,
  removeFromLikesService,
  getLikesService,
} from "../services/";

const addToLikesHandler = async (video, token, likeDispatch) => {
  try {
    const response = await addToLikesService(video, token);
    if (response.status === 201) {
      likeDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    alert(error);
  }
};

const removeFromLikesHandler = async (id, token, likeDispatch) => {
  try {
    const response = await removeFromLikesService(id, token);
    if (response.status === 200) {
      likeDispatch({ type: "REMOVE_FROM_LIKES", payload: response.data.likes });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    alert(error);
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
    alert(error);
  }
};

const checkLikesAction = (id, likes) => likes.find((like) => like._id === id);

const callAddToLikesHandler = (id, token, videos, navigate, likeDispatch) => {
  if (token) {
    const video = videos.find((video) => video._id === id);
    addToLikesHandler(video, token, likeDispatch);
  } else {
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
