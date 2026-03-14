// 1️⃣  Load environment variables – make sure .env contains the two keys:
//      DIGITALOCEAN_KB_UUID   ← the UUID of the knowledge base
//      DIGITALOCEAN_API_TOKEN ← a GenAI:read token

import dotenv from "dotenv";

dotenv.config();

const kbUuid = process.env.DIGITALOCEAN_KB_UUID;
const apiToken = process.env.DIGITALOCEAN_API_TOKEN;

if (!kbUuid || !apiToken) {
  throw new Error(
    "Both DIGITALOCEAN_KB_UUID and DIGITALOCEAN_API_TOKEN must be set",
  );
}

/**
 * Search a Gradient Knowledge Base.
 *
 * @param query      Search string
 * @param numResults Optional max number of results (0‑100)
 * @param alpha      0 = lexical only, 1 = semantic only (default 0.5)
 * @returns          Parsed JSON from the API
 */
export async function retrieveFromKB(
  query: string,
  numResults = 3,
  alpha = 1,
) {
  const url = `https://kbaas.do-ai.run/v1/${kbUuid}/retrieve`;

  const body = {
    query,
    num_results: numResults,
    alpha, // optional – blends lexical/semantic retrieval
    // filters: [] // optional filter rules
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`KB API error ${res.status}: ${errText}`);
  }

  
  return await res.json(); // contains .results with .content, .score, .metadata, etc.
}
