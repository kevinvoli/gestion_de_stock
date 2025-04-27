import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    token: string;
  }
  interface User {
    token: string
  }
}
