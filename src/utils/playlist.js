import {
  createPlaylistService,
  addToPlaylistService,
  removeFromPlaylistService,
  deletePlaylistService,
  getPlaylistsService,
  getPlaylistService,
} from "../services";

import { toast } from "react-toastify";

const getPlaylists = async (token, playlistsDispatch) => {
  if (token) {
    try {
      const response = await getPlaylistsService(token);
      if (response.status === 200) {
        playlistsDispatch({
          type: "GET_PLAYLISTS",
          payload: response.data.playlists,
        });
        return response.data.playlists;
      } else {
        throw new Error();
      }
    } catch (error) {
      alert(error);
    }
  }
};

const getPlaylist = async (token, playlistId, setPlaylist) => {
  if (token) {
    try {
      const response = await getPlaylistService(token, playlistId);
      if (response.status === 200) {
        setPlaylist(response.data.playlist);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert(error);
    }
  }
};

const createPlaylist = async (requestBody, token, playlistDispatch) => {
  try {
    const response = await createPlaylistService(requestBody, token);
    if (response.status === 201) {
      playlistDispatch({
        type: "UPDATE_PLAYLIST",
        payload: response.data.playlists,
      });
    } else {
      throw new Error("Sorry!! Something went wrong!!");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const addToPlaylist = async ({
  token,
  video,
  playlistId,
  playlistDispatch,
}) => {
  try {
    const response = await addToPlaylistService(playlistId, video, token);
    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlist,
      });
      toast.info("Video Added To Playlist");
    } else {
      throw new Error("Sorry!! Something went wrong!!");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const removeFromPlaylist = async ({
  token,
  video,
  playlistId,
  playlistDispatch,
}) => {
  try {
    const response = await removeFromPlaylistService(
      playlistId,
      video._id,
      token
    );

    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: response.data.playlist,
      });
      toast.error("Video Removed From Playlist");
    } else {
      throw new Error("Sorry!! Something went wrong!!");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const deletePlaylist = async (token, playlistId, playlistDispatch) => {
  try {
    const response = await deletePlaylistService(token, playlistId);
    if (response.status === 200) {
      playlistDispatch({
        type: "UPDATE_PLAYLIST",
        payload: response.data.playlists,
      });
      toast.error("Playlist Deleted");
    } else {
      throw new Error("Sorry!! Something went wrong!!");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const isVideoInPlaylist = (playlistId, videoId, playlists) => {
  const playlist = playlists.find((playlist) => playlist._id === playlistId);
  return playlist.videos.some((video) => video._id === videoId);
};

export {
  createPlaylist,
  addToPlaylist,
  removeFromPlaylist,
  deletePlaylist,
  isVideoInPlaylist,
  getPlaylists,
  getPlaylist,
};
