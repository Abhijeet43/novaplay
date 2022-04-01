import axios from "axios";

const addToPlaylistService = (playlistId, video, token) =>
  axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    { headers: { authorization: token } }
  );

export { addToPlaylistService };
