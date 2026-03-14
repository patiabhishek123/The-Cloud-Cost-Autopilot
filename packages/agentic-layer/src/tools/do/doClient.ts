import axios from "axios";

export const DOClient = axios.create({
  baseURL: "https://api.digitalocean.com/v2",
  headers: {
    Authorization: `Bearer ${process.env.DO_API_TOKEN}`,
    "Content-Type": "application/json",
  },
});