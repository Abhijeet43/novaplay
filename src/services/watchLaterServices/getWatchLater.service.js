import axios from "axios";

const getWatchLaterService = (token) =>
  axios.get("/api/user/watchlater/", { headers: { authorization: token } });

export { getWatchLaterService };
