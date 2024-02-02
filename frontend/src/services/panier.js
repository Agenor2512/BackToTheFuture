import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const getAll = () =>
  client.get("/thermes").then((response) => {
    return response.data;
  });
