import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { ZodError } from "zod";
import { JWT } from "next-auth/jwt";

 
interface CustomToken extends JWT{
  id?: string | null;
  email?: string| null;
  accessToken?: string | null; // Peut être undefined
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      accessToken?: string; // 🔥 Ajoute accessToken ici
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials:{
        email:{},
        password:{}
      },
      authorize: async (credentials)=>{

        try {
          const{email,password}= await signInSchema.parseAsync(credentials);

          console.error("le provider :", email, credentials)

          const response = await fetch(
            `http://localhost:3003/gateway/login?service=authService&module=auth`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!response.ok) {
            throw new Error("Invalid credentials");
          }
        const data = await response.json();

        console.error("data retourne provider :", data)

        if (!data || !data.token|| !data.user) {
          throw new Error("Invalid credentials");
        }
        return {
          id: data.user.id,
          email: data.user.email,
          token: data.token
        }
        return data.user
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.token; // 🔥 Stocke le token JWT ici
      }
      return token;
    },
    
    async session({ session, token }: { session: any; token: CustomToken }) {
      session.user.id = token.id ?? "";
      session.user.email = token.email ?? "";
      session.user.accessToken = token.accessToken ?? ""; // 🔥 Ajoute le token à la session
      return session;
    },
  },
});