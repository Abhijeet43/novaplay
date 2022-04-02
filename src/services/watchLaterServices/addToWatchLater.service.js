import axios from "axios";

const addToWatchLaterService = (video, token) =>
  axios.post(
    "/api/user/watchlater",
    { video },
    { headers: { authorization: token } }
  );

export { addToWatchLaterService };
