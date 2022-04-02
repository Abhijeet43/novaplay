import {
  addToWatchLaterService,
  removeFromWatchLaterService,
  getWatchLaterService,
} from "../services/";

const getWatchLaterHandler = async (token, watchLaterDispatch) => {
  try {
    const response = await getWatchLaterService(token);
    if (response.status === 200) {
      watchLaterDispatch({
        type: "GET_WATCHLATER",
        payload: response.data.watchlater,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    alert(error);
  }
};

const addToWatchLater = async (video, watchLaterDispatch, token) => {
  try {
    const response = await addToWatchLaterService(video, token);
    if (response.status === 201) {
      watchLaterDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: response.data.watchlater,
      });
    } else {
      throw new Error("Sorry!! Something went wrong!!");
    }
  } catch (error) {
    alert(error);
  }
};

const removeFromWatchLater = async (id, token, watchLaterDispatch) => {
  try {
    const response = await removeFromWatchLaterService(id, token);
    if (response.status === 200) {
      watchLaterDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.data.watchlater,
      });
    } else {
      throw new Error("Sorry!! Something went wrong!!");
    }
  } catch (error) {
    alert(error);
  }
};

const checkWatchLaterAction = (id, watchLater) =>
  watchLater.find((video) => video._id === id);

const callAddToWatchLaterHandler = (
  id,
  token,
  navigate,
  videos,
  watchLaterDispatch
) => {
  if (token) {
    const video = videos.find((video) => video._id === id);
    addToWatchLater(video, watchLaterDispatch, token);
  } else {
    navigate("/login");
  }
};

const checkWatchLaterActionHandler = (
  id,
  watchLater,
  token,
  watchLaterDispatch,
  navigate,
  videos
) => {
  checkWatchLaterAction(id, watchLater)
    ? removeFromWatchLater(id, token, watchLaterDispatch)
    : callAddToWatchLaterHandler(
        id,
        token,
        navigate,
        videos,
        watchLaterDispatch
      );
};

export {
  addToWatchLater,
  removeFromWatchLater,
  checkWatchLaterAction,
  checkWatchLaterActionHandler,
  getWatchLaterHandler,
};
