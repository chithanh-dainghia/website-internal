'use client'

import { makeStyles } from '@fluentui/react-components'
import React, { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',

    minHeight: '100vh',

    backgroundColor: 'var(--login-page-background)',
  },
})
