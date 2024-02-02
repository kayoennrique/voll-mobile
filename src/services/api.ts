import axios from "axios";

const api = axios.create({
  baseURL: "http://172.31.112.1:3000"
});

export default api;