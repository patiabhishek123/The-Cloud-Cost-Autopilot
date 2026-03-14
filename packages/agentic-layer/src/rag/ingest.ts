import fs from "fs";
import path from "path";
import "dotenv/config";


import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

import { Chroma } from "@langchain/community/vectorstores/chroma";

import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";   

const filePath = path.join(__dirname, "data", "finops_docs.md");

async function ingest() {
  const rawText = fs.readFileSync(filePath, "utf8");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
    separators: ["\n\n", "\n", " ", ""],
  });

  const docs = await splitter.createDocuments([rawText]);

  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
    openAIApiKey: process.env.GRADIENT_API_KEY,
    configuration: {
      baseURL: "https://inference.do-ai.run/v1",
    },
  });

  await Chroma.fromDocuments(docs, embeddings, {
    collectionName: "do-finops",
  });

  console.log("RAG ingestion complete.");
}

ingest();
