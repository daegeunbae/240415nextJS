import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import { PrismaClient } from '@prisma/client';
import { verifyPassword } from '../../../lib/auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

let prisma = new PrismaClient();

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      authorization: {
        url: 'https://kauth.kakao.com/oauth/authorize',
        params: {
          scope: undefined,
        },
      },
      token: {
        url: 'https://kauth.kakao.com/oauth/token',
        request: async ({ provider, params, checks, client }) => {
          const exchangeBody = {
            client_id: provider.clientId,
            client_secret: provider.clientSecret,
          };
          return {
            tokens: await client.oauthCallback(provider.callbackUrl, params, checks, { exchangeBody }),
          };
        },
      },
      checks: ['state'],
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: '이메일', type: 'email' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials.email),
          },
          select: {
            name: true,
            email: true,
            password: true,
          },
        });

        if (!user) {
          throw new Error('No user found!');
        }
        // 만약 user가 있다면 verifyPassword 함수로 credentials.password 값과 user.password 값을 비교하고
        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Could not log you in!');
        }
        return { name: user.name, email: user.email };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.role = token.role;
      return session;
    },
  },
});
