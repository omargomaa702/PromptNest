import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDB } from "@utils/database.js";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id;
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        // check if the user already exist

        // if not create a new one
        const userExists = await User.findOne({
          email: profile.email,
        });
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name
              .replace(/\s+/g, "")
              .toLowerCase()
              .slice(0, 20),
            image: profile.picture,
          });
        }

        return true;
      } catch (erorr) {
        console.log(erorr);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
