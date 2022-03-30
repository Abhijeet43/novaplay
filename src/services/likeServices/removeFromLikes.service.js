import axios from "axios";

const removeFromLikesService = (id, token) => {
  return axios.delete(`/api/user/likes/${id}`, { headers: {authorization:token} });
};

export { removeFromLikesService };