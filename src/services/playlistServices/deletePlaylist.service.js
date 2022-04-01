import axios from "axios";

const deletePlaylistService = (token, playlistId) =>
  axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });

export { deletePlaylistService };
