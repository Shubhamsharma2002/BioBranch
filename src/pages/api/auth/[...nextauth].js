// pages/api/auth/[...nextauth].js

import clientPromise from "@/libs/MongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  
});
