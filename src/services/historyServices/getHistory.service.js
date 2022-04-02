import axios from "axios";

const getHistoryService = (token) =>
  axios.get("/api/user/history/", { headers: { authorization: token } });

export { getHistoryService };
