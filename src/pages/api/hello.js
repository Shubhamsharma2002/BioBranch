// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "@/libs/MongoClient";

export default function GET(req, res) {
  connectDB()
  res.status(200).json({ name: "John Doe" });
}
