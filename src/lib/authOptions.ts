import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  callbacks: {
    async signIn({ user, account }: any) {
      if (account.provider === 'google') {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.email,
              fullName: user.name,
              image: user.image,
              phoneNumber: '0000000000',
              password: ' ',
            }),
          });

          const data = await res.json();

          if (data.status === 409 || data.status === 201) {
            return user;
          } else {
            const error = `/login?error=${data.message}`;
            return error;
          }
        } catch (error) {
          console.log(error);
          return '/login?error=something-went-wrong';
        }
      }
    },
  },
};
