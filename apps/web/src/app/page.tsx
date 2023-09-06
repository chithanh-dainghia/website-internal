import React from 'react'

import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Page() {
  const session: any = await getServerSession(authOptions)

  return <div>{session}</div>
}
