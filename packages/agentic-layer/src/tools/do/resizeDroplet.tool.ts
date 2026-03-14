import axios from "axios";

export async function resizeDroplet(id: string, size: string) {
  try {
    const res = await axios.post(
      `https://api.digitalocean.com/v2/droplets/${id}/actions`,
      {
        type: "resize",
        size,
        disk: false
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DO_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Resize Droplet Error:", error);
    throw error;
  }
}