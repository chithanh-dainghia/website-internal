import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOptions = NextAuth({
  // pages: {
  //   signIn: '/signin',
  // },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: 'Sign In',
      credentials: {
        password: { label: 'Password', type: 'password' },
        email: { label: 'Email', type: 'email' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        return {
          id: '1',
          email: 'tienlx98@gmail.com',
          name: 'LXT',
          randomKey: 'Hey cool',
        }

        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // })

        // if (!user) {
        //   return null
        // }

        // const passwordMatch = await bcrypt.compare(
        //   credentials.password,
        //   user.password,
        // )

        // if (!passwordMatch) {
        //   return null
        // }

        // return {
        //   id: user.id,
        //   email: user.email,
        //   name: user.name,
        //   randomKey: 'Hey cool',
        // }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        }
      }
      return token
    },
  },
})
