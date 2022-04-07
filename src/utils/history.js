import {
  addToHistoryService,
  getHistoryService,
  removeFromHistoryService,
  deleteAllHistoryService,
} from "../services/";

import { toast } from "react-toastify";

const getHistory = async (token, historyDispatch) => {
  try {
    const response = await getHistoryService(token);
    if (response.status === 200) {
      historyDispatch({
        type: "GET_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const addToHistory = async (video, historyDispatch, token) => {
  try {
    const response = await addToHistoryService(video, token);
    if (response.status === 201) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const removeFromHistory = async (id, token, historyDispatch) => {
  try {
    const response = await removeFromHistoryService(id, token);
    if (response.status === 200) {
      historyDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: response.data.history,
      });
      toast.error("Video Removed From Watch Later");
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const deleteAllHistory = async (token, historyDispatch) => {
  try {
    const response = await deleteAllHistoryService(token);
    if (response.status === 200) {
      historyDispatch({
        type: "CLEAR_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addToHistory, getHistory, removeFromHistory, deleteAllHistory };
