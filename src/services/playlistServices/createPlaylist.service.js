import axios from "axios";

const createPlaylistService = (requestBody, token) =>
  axios.post("/api/user/playlists", requestBody, {
    headers: { authorization: token },
  });

export { createPlaylistService };