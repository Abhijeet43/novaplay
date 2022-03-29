import axios from "axios";

const loginService = (user) => axios.post("/api/auth/login", user);

export { loginService };
