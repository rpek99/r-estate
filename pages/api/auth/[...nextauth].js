import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import GoogleProvider from 'next-auth/providers/google'

import clientPromise from "../../../database/connectDB"

export default NextAuth({
  providers: [
    GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		})
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  adapter: MongoDBAdapter(clientPromise)
})