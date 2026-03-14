import axios from "axios";

export async function listDroplets() {
  const res = await axios.get("https://api.digitalocean.com/v2/droplets", {
    headers: {
      Authorization: `Bearer ${process.env.DO_API_TOKEN}`,
    },
  });

  return res.data.droplets;
}