import axios from "axios";

const getVideosService = () => axios.get("/api/videos");

export { getVideosService };
