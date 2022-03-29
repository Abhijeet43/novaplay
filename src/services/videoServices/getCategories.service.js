import axios from "axios";

const getCategoriesService = () => axios.get("/api/categories");

export { getCategoriesService };
