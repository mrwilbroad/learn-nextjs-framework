import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth }) {
      const isAuthorized = !!auth?.user;
      return isAuthorized;
    },
  },
};
