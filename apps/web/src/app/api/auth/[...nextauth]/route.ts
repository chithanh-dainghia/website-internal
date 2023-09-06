import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: { label: 'Password', type: 'password' },
        email: { label: 'Email', type: 'email' },
      },
      async authorize(credentials, req) {
        console.log(credentials)

        if (credentials?.email || credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        if (!user) {
          return null
        }

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password,
        )

        if (!passwordMatch) {
          return null
        }

        return user
      },
    }),
  ],
  // pages: {
  //   signIn: '/login',
  // },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
})

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
