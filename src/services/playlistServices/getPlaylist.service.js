import axios from "axios";

const getPlaylistService = (token, playlistId) => {
  return axios.get(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

export { getPlaylistService };
