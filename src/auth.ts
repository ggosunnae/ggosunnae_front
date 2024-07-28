import NextAuth from "next-auth";
import kakao from "next-auth/providers/kakao";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [kakao],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      token.accessToken = account?.access_token;
      return { ...token };
    },
    async session({ session, token }) {
      return { ...session, access_token: token.access_token };
    },
  },
});
