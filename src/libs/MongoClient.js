// libs/mongoClient.js

import { MongoClient } from "mongodb";

const uri = process.env.URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

let client = global._mongoClient;
let clientPromise;

if (!client) {
  client = new MongoClient(uri);
  global._mongoClient = client;
  clientPromise = client.connect();
} else {
  clientPromise = client.connect();
}

export default clientPromise;
