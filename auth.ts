import NextAuth, { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";
import credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  country: string;
}

const FakeUsers: User[] = [
  {
    firstname: "Wilbroad",
    lastname: "Mark",
    email: "mrwilbroadmark@gmail.com",
    password: "1",
    country: "Tanzania",
  },
  {
    firstname: "Baraka",
    lastname: "Amos",
    email: "Baraka@gmail.com",
    password: "1",
    country: "Kenya",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {

        try {
          console.log("LOGG")
          // fetch user with some credential aligned and Procedd to verify
          const user = FakeUsers.find(
            (user) =>
              user.email == credentials.email &&
              user.password == credentials.password
          );
         
          console.log("USER : ", user);

          return user || null;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
      
    }),
  ],
  pages : {
    signIn : "/auth/login",
  },
  callbacks: {
    jwt: async ({ user, token }) => {
      return token;
    },
  },
});
