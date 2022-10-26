import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3800",
  headers: {
    "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
  },
});
