import axios from "axios";

const deleteAllHistoryService = (token) =>
  axios.delete(`/api/user/history/all`, { headers: { authorization: token } });

export { deleteAllHistoryService };
