import NextAuth from "next-auth";
import kakao from "next-auth/providers/kakao";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [kakao],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
});
