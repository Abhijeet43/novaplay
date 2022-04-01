import axios from "axios";

const removeFromPlaylistService = (playlistId, id, token) =>
  axios.delete(`/api/user/playlists/${playlistId}/${id}`, {
    headers: { authorization: token },
  });

export { removeFromPlaylistService };
