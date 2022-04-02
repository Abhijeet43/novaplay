import axios from "axios";

const removeFromHistoryService = (id, token) =>
  axios.delete(`/api/user/history/${id}`, {
    headers: { authorization: token },
  });

export { removeFromHistoryService };
