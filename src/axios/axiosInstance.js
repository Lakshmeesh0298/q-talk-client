import axios from "axios";
export let fileAxios = axios.create({
  baseURL: "http://localhost:3800",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export let normalAxios = axios.create({
  baseURL: "http://localhost:3800",
  headers: {
    "Content-Type": "application/json",
  },
});
