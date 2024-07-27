import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  providers: [CredentialsProvider],
  callbacks: {

    authorized({ auth }) {

      console.log("IMEPITA HAPA AUTHORIZED");
      const isAuthorized = !!auth?.user;
      return isAuthorized;
    },
  },

} satisfies NextAuthConfig;
