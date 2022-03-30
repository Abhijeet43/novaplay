import axios from "axios";

const getLikesService = (token) =>
  axios.get("/api/user/likes/", { headers: { authorization: token } });

export { getLikesService };
