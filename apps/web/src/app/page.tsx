import React from 'react'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Page() {
  const session = await getServerSession(authOptions)

  console.log(session)

  return (
    <>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  )
}
