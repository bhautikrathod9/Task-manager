import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-x4hj.onrender.com/api",
});
export default api;
